import type { FactoryInitializer } from "@rsm-hcd/javascript-testing";
import { ResultRecord } from "../../view-models/result-record";
import { FactoryType } from "./factory-type";

// -------------------------------------------------------------------------------------------------
// #region Factory
// -------------------------------------------------------------------------------------------------

const resultRecordFactoryInitializer: FactoryInitializer = ({ define }) => {
    define<ResultRecord<any>>(FactoryType.ResultRecord, ResultRecord);
};

// #endregion Factory

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { resultRecordFactoryInitializer };

// #endregion Exports
