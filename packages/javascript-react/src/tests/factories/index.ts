import type { FactoryInitializerOptions } from "@rsm-hcd/javascript-testing";
import { initializeFactories as initializeBaseFactories } from "@rsm-hcd/javascript-core";

// TODO: The original purpose for this was to provide a helper component for routing when using react-router-dom.This needs to be re-implemented in the new project structure.
// export {
//     RouteDefinitionFactory,
//     RouteDefinitionNestedFactory,
// } from "./route-definition-factory";
// export { RouteMapFactory } from "./route-map-factory";

export function initializeFactories(options: FactoryInitializerOptions) {
    initializeBaseFactories(options);
}
