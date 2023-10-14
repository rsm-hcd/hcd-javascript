import { ResultErrorRecord } from "../view-models/result-error-record";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface Result<T> {
    errors?: ResultErrorRecord[];
    resultObject?: T;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export type { Result };

// #endregion Export
