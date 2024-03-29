import {
    CoreUtils,
    RouteUtils as CoreRouteUtils,
} from "@rsm-hcd/javascript-core";
import type { RouteDefinition } from "../interfaces/route-definition";
import type { RouteMap } from "../interfaces/route-map";

// -----------------------------------------------------------------------------------------
// #region Private Methods
// -----------------------------------------------------------------------------------------

/**
 * Outputs flattened routing table for debugging purposes
 */
const debugRoutes = (routes: RouteMap) => {
    const flattenedRoutes = getFlattenedRoutes(CoreUtils.objectToArray(routes));
    flattenedRoutes.forEach((route: RouteDefinition) => {
        console.log(JSON.stringify(route));
    });
};

const getFlattenedRoutes = (routeArray: RouteDefinition[]) => {
    const results = [...routeArray];

    results.forEach((route: RouteDefinition) => {
        if (route.routes == null) {
            return null;
        }

        results.push(
            ...getFlattenedRoutes(CoreUtils.objectToArray(route.routes))
        );
    });

    return results;
};

// #endregion Private Methods

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const RouteUtils = {
    appendQueryParams: CoreRouteUtils.appendQueryParams,
    debugRoutes,
    getFlattenedRoutes,
    getUrl: CoreRouteUtils.getUrl,
    getUrlFromPath: CoreRouteUtils.getUrlFromPath,
    replacePathParams: CoreRouteUtils.replacePathParams,
};

// #endregion Exports
