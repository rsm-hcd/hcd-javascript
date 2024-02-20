import type React from "react";
import type { RouteMap } from "./route-map";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface RouteDefinition {
    authRequired: boolean;
    component: React.ComponentType;
    exact?: boolean;
    getComponent?: (location: any, cb: any) => void;
    path: string;
    routes: RouteMap;
    // TODO: This may need to be decoupled from the package.
    sidebar?: React.ComponentType;
}

// #endregion Interfaces
