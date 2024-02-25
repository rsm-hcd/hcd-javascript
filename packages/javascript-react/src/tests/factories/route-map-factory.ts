import { Factory } from "rosie";
import type { RouteMap } from "../../interfaces/route-map";
import type { RouteDefinition } from "../../interfaces/route-definition";
import { FactoryType } from "./factory-type";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const RouteMapFactory = Factory.define<RouteMap>(FactoryType.RouteMap).sequence(
    "/",
    () => Factory.build<RouteDefinition>(FactoryType.RouteDefinition.Default)
);

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { RouteMapFactory };

// #endregion Export
