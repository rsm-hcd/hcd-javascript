// TODO: The original purpose for this was to provide a helper component for routing when using react-router-dom.This needs to be re-implemented in the new project structure.

// import { createMemoryHistory } from "history";
// import { render } from "@testing-library/react";
// import { Router } from "react-router-dom";
// import { Factory } from "rosie";
// import {faker} from "@faker-js/faker";
// import type { RouteDefinition } from "../../interfaces/route-definition";
// import { FactoryType } from "../../tests/factories/factory-type";
// import { NestedRoutes } from "./nested-routes";

describe("NestedRoutes", () => {
    it.skip("TODO: needs tests", () => {
        expect(true).toBe(true);
    });
});

// describe("NestedRoutes", () => {
//     let nonExistentRoute: string;
//     const HomePage = () => <h1>Home</h1>;
//     const NotFoundPage = () => <h1>404</h1>;

//     const homeRoute: RouteDefinition = Factory.build<RouteDefinition>(
//         FactoryType.RouteDefinition.Default,
//         { path: "/", component: HomePage }
//     );

//     const nestedRoutes: RouteDefinition[] = Factory.buildList(
//         FactoryType.RouteDefinition.Nested,
//         3
//     );

//     const notFoundRoute = Factory.build<RouteDefinition>(
//         FactoryType.RouteDefinition.Default,
//         { path: "/404", component: NotFoundPage }
//     );

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars -- This is used in the beforeEach
//     let routes: RouteDefinition[] = [];

//     beforeEach(() => {
//         nonExistentRoute = [
//             "", // Preprends a / before the route
//             faker.random.alphaNumeric(5),
//             faker.random.alphaNumeric(5),
//             faker.random.alphaNumeric(5),
//         ].join("/");

//         routes = [...nestedRoutes, homeRoute, notFoundRoute];
//     });

//     // -----------------------------------------------------------------------------------------
//     // #region redirectToIfNotFound
//     // -----------------------------------------------------------------------------------------

//     describe("when pathname does not match any route path", () => {
//         describe("given redirectToIfNotFound has a value", () => {
//             test("it redirects to the redirectToIfNotFound route", () => {
//                 // Arrange
//                 const history = createMemoryHistory();
//                 // This should have no effect on whether or not the user is redirected for a non-existent route
//                 const isAuthenticated = faker.random.boolean();
//                 const redirectToIfNotFound = notFoundRoute.path; // This is the important setup

//                 const App = () => (
//                     <Router history={history}>
//                         <NestedRoutes
//                             isAuthenticated={isAuthenticated}
//                             redirectToIfNotFound={redirectToIfNotFound}
//                             routes={routes}
//                         />
//                     </Router>
//                 );

//                 // Act
//                 history.push(nonExistentRoute);
//                 const { getByRole } = render(<App />);

//                 // Assert
//                 expect(getByRole("heading")).toHaveTextContent("404");
//                 expect(history.location.pathname).toBe(redirectToIfNotFound);
//             });
//         });

//         describe("given redirectToIfNotFound is null or empty", () => {
//             test("it does not redirect", () => {
//                 // Arrange
//                 const history = createMemoryHistory();
//                 // This should have no effect on whether or not the user is redirected for a non-existent route
//                 const isAuthenticated = faker.random.boolean();
//                 // This is the important setup
//                 const redirectToIfNotFound:
//                     | string
//                     | undefined = faker.random.arrayElement([
//                     undefined,
//                     null,
//                     "",
//                 ]);

//                 const App = () => (
//                     <Router history={history}>
//                         <NestedRoutes
//                             isAuthenticated={isAuthenticated}
//                             redirectToIfNotFound={redirectToIfNotFound}
//                             routes={routes}
//                         />
//                     </Router>
//                 );

//                 // Act
//                 history.push(nonExistentRoute);
//                 render(<App />);

//                 // Assert
//                 expect(history.location.pathname).toBe(nonExistentRoute);
//             });
//         });
//     });

//     // #endregion redirectToIfNotFound
// });
