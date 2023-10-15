import type { ErrorType } from "../enumerations/error-type";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface ResultError {
    key?: string;
    message?: string;
    type?: ErrorType;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export type { ResultError };

// #endregion Export
