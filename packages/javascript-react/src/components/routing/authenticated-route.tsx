// TODO: The original purpose for this was to provide a helper for authenticated routes when using react-router-dom.This needs to be re-implemented in the new project structure.

// import React from "react";
// import { Navigate, Route, RouteProps } from "react-router-dom";
// import { RouteDefinition } from "../../interfaces/route-definition";
// import { AuthenticatedRoute } from "../../interfaces/authenticated-route";

// // -----------------------------------------------------------------------------------------
// // #region Interfaces
// // -----------------------------------------------------------------------------------------

// type AuthenticatedRouteProps = RouteProps &
//     AuthenticatedRoute & {
//         route: RouteDefinition;
//         render: (props: any) => any;
//     };

// // #endregion Interfaces

// /**
//  * Locks a route behind authentication. Can optionally redirect a user to another location if
//  * attempting to access the route while unauthenticated.
//  */
// const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
//     render,
//     ...props
// }: AuthenticatedRouteProps) => {
//     const { isAuthenticated, redirectToIfUnauthenticated, route } = props;

//     const renderIfAuthenticated = (props: any): any => {
//         if (isAuthenticated || !route.authRequired) {
//             return render(props);
//         }

//         if (!isAuthenticated && redirectToIfUnauthenticated != null) {
//             return <Navigate to={redirectToIfUnauthenticated} replace />;
//         }

//         return render(props);
//     };

//     return <Route {...props} render={renderIfAuthenticated} />;
// };

// // -----------------------------------------------------------------------------------------
// // #region Exports
// // -----------------------------------------------------------------------------------------

// export { AuthenticatedRoute, AuthenticatedRouteProps };

// // #endregion Exports
