// TODO: The original purpose for this was to provide a helper for nested routes when using react-router-dom.This needs to be re-implemented in the new project structure.

// import React from "react";
// import { RouteDefinition } from "../../interfaces/route-definition";
// import { CoreUtils } from "@rsm-hcd/javascript-core";
// import { Route } from "react-router-dom";
// import { AuthenticatedRoute as AuthenticatedRouteComponent } from "./authenticated-route";
// import { AuthenticatedRoute } from "../../interfaces/authenticated-route";

// // -----------------------------------------------------------------------------------------
// // #region NestedRouteProps
// // -----------------------------------------------------------------------------------------

// export interface NestedRouteProps extends AuthenticatedRoute {
//     route: RouteDefinition;
// }

// // #endregion NestedRouteProps

// // -----------------------------------------------------------------------------------------
// // #region Component
// // -----------------------------------------------------------------------------------------

// /**
//  * Dynamically renders a route and its subroutes, accounting
//  * for additional custom properties on RouteDefinition
//  */
// export const NestedRoute: React.FC<NestedRouteProps> = (
//     props: NestedRouteProps
// ) => {
//     const { isAuthenticated, redirectToIfUnauthenticated, route } = props;
//     const RouteComponent: any = route.authRequired
//         ? AuthenticatedRouteComponent
//         : Route;
//     const childRoutes = CoreUtils.objectToArray(route.routes);

//     return (
//         <RouteComponent
//             exact={route.exact}
//             isAuthenticated={isAuthenticated}
//             path={route.path}
//             redirectToIfUnauthenticated={redirectToIfUnauthenticated}
//             route={route}
//             render={(props: any) => (
//                 // pass the sub-routes down to keep nesting
//                 <route.component {...props} routes={childRoutes} />
//             )}
//         />
//     );
// };

// // #endregion Component
