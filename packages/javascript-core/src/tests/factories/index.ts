import type { FactoryInitializerOptions } from "@rsm-hcd/javascript-testing";
import { initializeFactories as initializeBaseFactories } from "@rsm-hcd/javascript-testing";
import { resultRecordFactoryInitializer } from "./result-record-factory";
import { resultErrorRecordFactoryInitializer } from "./result-error-record-factory";

export function initializeFactories(options: FactoryInitializerOptions) {
    initializeBaseFactories(options);
    resultRecordFactoryInitializer(options);
    resultErrorRecordFactoryInitializer(options);
}
