import React from "react";
import { render, waitFor } from "@testing-library/react";
import { CoreUtils } from "@rsm-hcd/javascript-core";
import type { AsyncEffectCallback } from "../types/async-effect-callback-type";
import { useAsyncEffect } from "./use-async-effect";

describe("useAsyncEffect", () => {
    const setupUseAsyncEffect = (asyncEffect: AsyncEffectCallback) => {
        const TestComponent = () => {
            useAsyncEffect(asyncEffect, []);
            return null;
        };

        return render(<TestComponent />);
    };

    test("executes async method", async () => {
        // Arrange
        const mockedMethod = jest.fn();

        // Act
        setupUseAsyncEffect(async () => {
            await CoreUtils.sleep(1);
            mockedMethod();
        });

        // Assert
        await waitFor(() => expect(mockedMethod).toBeCalledTimes(1));
    });

    test("executes cleanup method", async () => {
        // Arrange
        const mockedMethod = jest.fn();
        const mockedCleanupMethod = jest.fn();

        // Act
        const { unmount } = setupUseAsyncEffect(async () => {
            await CoreUtils.sleep(1);
            mockedMethod();
            return mockedCleanupMethod;
        });

        // Assert
        await waitFor(() => expect(mockedMethod).toBeCalledTimes(1));
        unmount();
        await waitFor(() => expect(mockedCleanupMethod).toBeCalledTimes(1));
    });

    test("isMounted initially equals true", async () => {
        // Arrange
        let actualIsMountedValue = false;
        const expectedIsMountedValue = true;

        // Act
        const { unmount } = setupUseAsyncEffect(async (isMounted) => {
            actualIsMountedValue = isMounted();
            await CoreUtils.sleep(1);
        });

        // Assert
        expect(actualIsMountedValue).toBe(expectedIsMountedValue);
        unmount();
    });

    test("isMounted equals false after cleanup", async () => {
        // Arrange
        let actualIsMountedValue = true;
        const expectedIsMountedValue = false;
        const mockedMethod = jest.fn();

        // Act
        const { unmount } = setupUseAsyncEffect(async (isMounted) => {
            await CoreUtils.sleep(1);
            actualIsMountedValue = isMounted();
            mockedMethod();
        });

        // Assert
        unmount();
        await waitFor(() => expect(mockedMethod).toHaveBeenCalledTimes(1));
        expect(actualIsMountedValue).toBe(expectedIsMountedValue);
    });
});
