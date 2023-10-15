// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Promise.finally is not natively supported in Internet Explorer.
 */

const registerPromiseFinallyPolyfill = () => {
    Promise.prototype.finally =
        Promise.prototype.finally ??
        function (callback: () => any) {
            // @ts-expect-error - this is expected
            return this.then(
                (value: any) => Promise.resolve(callback()).then(() => value),
                (reason: any) =>
                    Promise.resolve(callback()).then(() => {
                        throw reason;
                    })
            );
        };
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const PolyfillUtils = {
    registerPromiseFinallyPolyfill,
};

export { PolyfillUtils };

// #endregion Exports
