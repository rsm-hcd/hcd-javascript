import { FactoryType } from "./factory-type";
import { AxiosResponse } from "axios";
import { FactoryInitializer } from "factories/factory-initializer";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const axiosResponseFactoryInitializer: FactoryInitializer = ({ define }) => {
    define<AxiosResponse>(FactoryType.AxiosResponse)
        .sequence("status", () => 200)
        .sequence("statusText", () => "OK");
};

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { axiosResponseFactoryInitializer };

// #endregion Export
