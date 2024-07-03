import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react";
import { Record } from "immutable";
import { ServiceFactory } from "../../services/service-factory";
import { setupMockApi } from "../../tests/setup-mock-api";
import { useUpdateService } from "./use-update";

// ---------------------------------------------------------------------------------------------
// #region Setup
// ---------------------------------------------------------------------------------------------

const endpoint = "records";
const baseEndpoint = `http://api.local/${endpoint}`;
const resourceEndpoint = `http://api.local/${endpoint}/:id`;

const { server, mockPutSuccess } = setupMockApi({
    baseEndpoint,
    resourceEndpoint,
});

class TestRecord extends Record<{ id: number; value: string }>({
    id: 0,
    value: "",
}) {}

interface TestServiceUpdatePathParams {
    id: number;
}

const TestService = {
    update: ServiceFactory.update<TestRecord, TestServiceUpdatePathParams>(
        TestRecord,
        resourceEndpoint
    ),
};

// #endregion Setup

describe("useCreateService", () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("should create an update service hook", () => {
        // Arrange & Act
        const { result } = renderHook(() =>
            useUpdateService(TestService.update)
        );

        // Assert
        expect(result.current.update).toBeDefined();
    });

    it("should have an updating state", () => {
        // Arrange & Act
        const { result } = renderHook(() =>
            useUpdateService(TestService.update)
        );

        // Assert
        expect(result.current.isUpdating).toBe(false);
    });

    it("should not have an error", () => {
        // Arrange & Act
        const { result } = renderHook(() =>
            useUpdateService(TestService.update)
        );

        // Assert
        expect(result.current.error).toBeUndefined();
    });

    describe("update", () => {
        it("should create a record", async () => {
            // Arrange
            const record = new TestRecord({ id: 1, value: "test" });
            mockPutSuccess(record, 100);

            const { result } = renderHook(() =>
                useUpdateService(TestService.update)
            );

            // Act
            act(() => {
                result.current.update(record);
            });

            // Assert
            await waitFor(() => {
                expect(result.current.isUpdating).toBe(true);
            });

            await waitFor(() => {
                expect(result.current.isUpdating).toBe(false);
                expect(result.current.error).toBeUndefined();
                expect(result.current.updated).toEqual([record]);
            });
        });

        describe("when unmounted", () => {
            it("should not set state", async () => {
                // Arrange
                const record = new TestRecord({ id: 1, value: "test" });
                mockPutSuccess(record, 100);

                const { result, unmount } = renderHook(() =>
                    useUpdateService(TestService.update)
                );

                // Act
                act(() => {
                    result.current.update(record);
                    unmount();
                });

                // Assert
                await waitFor(() => {
                    expect(result.current.isUpdating).toBe(false);
                    expect(result.current.error).toBeUndefined();
                    expect(result.current.updated).toEqual([]);
                });
            });
        });

        describe("rerender with the same path params", () => {
            it("should be the same update method", () => {
                // Arrange
                const { result, rerender } = renderHook(
                    ({ service, pathParams }) =>
                        useUpdateService(service, pathParams),
                    {
                        initialProps: {
                            service: TestService.update,
                            pathParams: { id: 1 },
                        },
                    }
                );

                const preRerenderUpdate = result.current.update;

                // Act
                rerender({
                    service: TestService.update,
                    pathParams: { id: 1 },
                });

                // Assert
                expect(preRerenderUpdate).toBe(result.current.update);
            });
        });
    });
});
