import { StubResourceRecord } from "../stubs/stub-resource-record";
import { FactoryType } from "./factory-type";
import { FactoryInitializer } from "./factory-initializer";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const stubResourceRecordFactoryInitializer: FactoryInitializer = ({
    define,
}) => {
    define<StubResourceRecord>(
        FactoryType.StubResourceRecord,
        StubResourceRecord
    )
        .sequence("id", (i: number) => i)
        .sequence("name", (i: number) => `Name ${i}`);
};

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { stubResourceRecordFactoryInitializer };

// #endregion Export
