import { renderHook, waitFor } from "@testing-library/react";
import { Record } from "immutable";
import type { ServiceResponse } from "@rsm-hcd/javascript-core";
import { ServiceFactory } from "../../services/service-factory";
import { setupMockApi } from "../../tests/setup-mock-api";
import { useListService } from "./use-list";

// ---------------------------------------------------------------------------------------------
// #region Setup
// ---------------------------------------------------------------------------------------------

const endpoint = "records";
const baseEndpoint = `http://api.local/${endpoint}`;

const { server, mockGetSuccess } = setupMockApi({
    baseEndpoint,
});

class TestRecord extends Record<{ id: number; value: string }>({
    id: 0,
    value: "",
}) {}

interface TestServiceListQueryParams {
    flag?: boolean;
}

const TestService = {
    list: ServiceFactory.list<TestRecord, TestServiceListQueryParams>(
        TestRecord,
        baseEndpoint
    ),
};

// #endregion Setup

describe("useListService", () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    describe("initial state", () => {
        it("should create a list service hook", () => {
            // Arrange & Act
            const { result } = renderHook(() =>
                useListService(TestService.list)
            );

            // Assert
            expect(result.current.results).toBeDefined();
        });

        it("should have an empty list of results", () => {
            // Arrange & Act
            const { result } = renderHook(() =>
                useListService(TestService.list)
            );

            // Assert
            expect(result.current.results).toHaveLength(0);
        });

        it("should have a loading state", () => {
            // Arrange & Act
            const { result } = renderHook(() =>
                useListService(TestService.list)
            );

            // Assert
            expect(result.current.isLoading).toBe(true);
        });

        it("should not have an error", () => {
            // Arrange & Act
            const { result } = renderHook(() =>
                useListService(TestService.list)
            );

            // Assert
            expect(result.current.error).toBeUndefined();
        });
    });

    describe("when hook unmounts", () => {
        let listSpy: jest.SpyInstance;
        let records: TestRecord[] = [];
        beforeAll(() => {
            records = [new TestRecord({ id: 1, value: "test" })];
            mockGetSuccess(records, 200);
            listSpy = jest.spyOn(TestService, "list");
        });
        afterEach(() => {
            listSpy.mockRestore();
        });

        it("should not call the list service again", async () => {
            // Arrange & Act
            const { unmount } = renderHook(() =>
                useListService(TestService.list)
            );
            unmount();

            // Assert
            await waitFor(() => {
                expect(listSpy).toHaveBeenCalledTimes(1);
            });
        });

        it("should not return results", async () => {
            // Arrange & Act
            const { result, unmount } = renderHook(() =>
                useListService(TestService.list)
            );
            unmount();

            // Assert
            await waitFor(() => {
                expect(result.current.results).toHaveLength(0);
            });
        });
    });

    describe("when list rerenders", () => {
        let listSpy: jest.SpyInstance;
        let records: TestRecord[] = [];
        beforeAll(() => {
            records = [new TestRecord({ id: 1, value: "test" })];
            mockGetSuccess(records, 200);
            listSpy = jest.spyOn(TestService, "list");
        });
        afterEach(() => {
            listSpy.mockRestore();
        });

        it("should not call the list service again", async () => {
            // Arrange & Act
            const { rerender } = renderHook(() =>
                useListService(TestService.list)
            );
            rerender();

            // Assert
            await waitFor(() => {
                expect(listSpy).toHaveBeenCalledTimes(1);
            });
        });

        it("should return results", async () => {
            // Arrange & Act
            const { result, rerender } = renderHook(() =>
                useListService(TestService.list)
            );
            rerender();

            // Assert
            await waitFor(() => {
                expect(result.current.results).toHaveLength(1);
            });
        });
    });

    describe("when list service is successful", () => {
        let records: TestRecord[] = [];

        beforeAll(() => {
            records = [new TestRecord({ id: 1, value: "test" })];
            mockGetSuccess(records, 200);
        });

        it("should set results", async () => {
            // Arrange & Act
            const { result } = renderHook(() =>
                useListService(TestService.list)
            );

            // Assert
            await waitFor(() => {
                expect(result.current.results).toStrictEqual(records);
            });
        });

        it("should have a false loading state", async () => {
            // Arrange & Act
            const { result } = renderHook(() =>
                useListService(TestService.list)
            );

            // Assert
            await waitFor(() => {
                expect(result.current.isLoading).toBe(false);
            });
        });

        describe("with queryparams", () => {
            let listSpy: jest.SpyInstance;

            beforeEach(() => {
                records = [new TestRecord({ id: 1, value: "test" })];
                listSpy = jest
                    .spyOn(TestService, "list")
                    .mockReturnValue(
                        Promise.resolve({
                            resultObjects: records,
                        } as ServiceResponse<TestRecord>)
                    );
            });

            afterEach(() => {
                listSpy.mockRestore();
            });

            it("should call service with queryparams", async () => {
                // Arrange
                const queryparams: TestServiceListQueryParams = { flag: true };

                // Act
                const { result } = renderHook(
                    ({ queryparams }) =>
                        useListService(TestService.list, {
                            queryParams: queryparams,
                        }),
                    {
                        initialProps: { queryparams },
                    }
                );

                // Assert
                await waitFor(() => {
                    expect(result.current.results).toStrictEqual(records);
                    expect(listSpy).toHaveBeenCalledTimes(1);
                });
            });

            describe("do not change", () => {
                it("should not call the list service with queryparams", async () => {
                    // Arrange
                    const queryparams: TestServiceListQueryParams = {
                        flag: true,
                    };

                    // Act
                    const { result, rerender } = renderHook(
                        ({ queryparams }) =>
                            useListService(TestService.list, {
                                queryParams: queryparams,
                            }),
                        {
                            initialProps: { queryparams },
                        }
                    );

                    rerender({ queryparams: { flag: true } });

                    // Assert
                    await waitFor(() => {
                        expect(result.current.results).toStrictEqual(records);
                        expect(listSpy).toHaveBeenCalledTimes(1);
                    });
                });
            });
        });
    });
});
