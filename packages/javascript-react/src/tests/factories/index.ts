import type { FactoryInitializerOptions } from "@rsm-hcd/javascript-testing";
import { initializeFactories as initializeBaseFactories } from "@rsm-hcd/javascript-core";

export function initializeFactories(options: FactoryInitializerOptions) {
    initializeBaseFactories(options);
}
