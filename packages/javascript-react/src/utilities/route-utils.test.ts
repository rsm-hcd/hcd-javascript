import "jest-extended";
import { Factory } from "rosie";
import { FactoryType } from "../tests/factories/factory-type";
import type { RouteDefinition } from "../interfaces/route-definition";
import type { RouteMap } from "../interfaces/route-map";
import { RouteUtils } from "./route-utils";

describe("RouteUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region debugRoutes
    // -----------------------------------------------------------------------------------------

    describe("debugRoutes", () => {
        test.skip("when given a route map with a single route, it calls console.log once", () => {
            // Arrange
            const routeMap = Factory.build<RouteMap>(FactoryType.RouteMap);
            const consoleLogSpy = jest.spyOn(console, "log");

            // Act
            RouteUtils.debugRoutes(routeMap);

            // Assert
            expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        });

        test.skip("when given a route map with multiple routes, it calls console.log at least once", () => {
            // Arrange
            const routeMap = Factory.build<RouteMap>(FactoryType.RouteMap, {
                routes: Factory.build<RouteDefinition>(
                    FactoryType.RouteDefinition.Nested
                ),
            });
            const consoleLogSpy = jest.spyOn(console, "log");

            // Act
            RouteUtils.debugRoutes(routeMap);

            // Assert
            expect(consoleLogSpy).toHaveBeenCalled();
            expect(consoleLogSpy).not.toHaveBeenCalledTimes(1);
        });
    });

    // #endregion debugRoutes

    // -----------------------------------------------------------------------------------------
    // #region getFlattenedRoutes
    // -----------------------------------------------------------------------------------------

    describe("getFlattenedRoutes", () => {
        test.skip("when a route has nested routes, it returns a flattened list", () => {
            // Arrange
            const parentRoute = Factory.build<RouteDefinition>(
                FactoryType.RouteDefinition.Nested
            );
            const routes = [parentRoute];

            // Act
            const result = RouteUtils.getFlattenedRoutes(routes);

            // Assert
            expect(result).toHaveLength(2);
        });

        test.skip("when routes are already in a flattened state, it returns an equivalent array", () => {
            // Arrange
            const routes: RouteDefinition[] = Factory.buildList(
                FactoryType.RouteDefinition.Default,
                3
            );

            // Act
            const result = RouteUtils.getFlattenedRoutes(routes);

            // Assert
            expect(result).toHaveLength(routes.length);
            expect(result).toStrictEqual(routes);
        });
    });

    // #endregion getFlattenedRoutes
});
