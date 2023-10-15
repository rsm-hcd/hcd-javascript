import type { FactoryInitializer } from "@rsm-hcd/javascript-testing";
import { ResultErrorRecord } from "../../view-models/result-error-record";
import { FactoryType } from "./factory-type";

// -------------------------------------------------------------------------------------------------
// #region Factory
// -------------------------------------------------------------------------------------------------

const resultErrorRecordFactoryInitializer: FactoryInitializer = ({
    define,
}) => {
    define<ResultErrorRecord>(FactoryType.ResultErrorRecord, ResultErrorRecord)
        .sequence("key", (i: number) => `TEST_ERROR_KEY_${i}`)
        .sequence("message", (i: number) => `Test error message ${i}`);
};

// #endregion Factory

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { resultErrorRecordFactoryInitializer };

// #endregion Exports
