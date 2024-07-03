import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";
import { ResultErrorRecord, ResultRecord } from "@rsm-hcd/javascript-core";
import { waitFor } from "@testing-library/react";
import { usePageErrors } from "./use-page-errors";

describe("usePageErrors", () => {
    // -----------------------------------------------------------------------------------------
    // #region initialization
    // -----------------------------------------------------------------------------------------

    describe("initialization", () => {
        test("returns empty array", () => {
            // Arrange & Act
            const { result } = renderHook(() => usePageErrors());

            // Assert
            waitFor(() => {
                expect(result.current.pageErrors).toBeEmpty();
            });
        });
    });

    // #endregion

    // -----------------------------------------------------------------------------------------
    // #region setPageErrors
    // -----------------------------------------------------------------------------------------

    describe("setPageErrors", () => {
        it("when set with string array, pageErrors returns array", () => {
            // Arrange
            const errorMessage = "Error Message";
            const { result } = renderHook(() => usePageErrors());

            // Act
            act(() => {
                result.current.setPageErrors([errorMessage]);
            });

            // Assert
            waitFor(() => {
                expect(result.current.pageErrors).toHaveLength(1);
                expect(result.current.pageErrors[0]).toBe(errorMessage);
            });
        });
    });

    // #endregion setPageErrors

    // -----------------------------------------------------------------------------------------
    // #region handlePageLoadError
    // -----------------------------------------------------------------------------------------

    describe("handlePageLoadError", () => {
        it("when error is string, pageErrors returns array", () => {
            // Arrange
            const errorMessage = "Error Message";
            const { result } = renderHook(() => usePageErrors());

            // Act
            act(() => {
                result.current.handlePageLoadError(errorMessage);
            });

            // Assert
            expect(result.current.pageErrors).toHaveLength(1);
            expect(result.current.pageErrors[0]).toBe(errorMessage);
        });

        it("when error is ResultRecord, pageErrors returns array", () => {
            // Arrange
            const errorMessage = "Error Message";
            const erroredResultRecord = new ResultRecord<any>().with({
                errors: [
                    new ResultErrorRecord().with({
                        message: errorMessage,
                    }),
                ],
            });
            const { result } = renderHook(() => usePageErrors());

            // Act
            act(() => {
                result.current.handlePageLoadError(erroredResultRecord);
            });

            // Assert
            expect(result.current.pageErrors).toHaveLength(1);
            expect(result.current.pageErrors[0]).toBe(errorMessage);
        });
    });

    // #endregion handlePageLoadError

    // -----------------------------------------------------------------------------------------
    // #region resetPageErrors
    // -----------------------------------------------------------------------------------------

    describe("resetPageErrors", () => {
        it("when executed, pageErrors returns empty array", () => {
            // Arrange
            const { result } = renderHook(() => usePageErrors());
            result.current.handlePageLoadError("Error Message");

            // Act
            result.current.resetPageErrors();

            // Assert
            waitFor(() => {
                expect(result.current.pageErrors).toBeEmpty();
            });
        });
    });

    // #endregion resetPageErrors
});
