import { FactoryInitializerOptions } from "@rsm-hcd/javascript-testing";
import { resultRecordFactoryInitializer } from "./result-record-factory";
import { resultErrorRecordFactoryInitializer } from "./result-error-record-factory";

export function initializeFactories(options: FactoryInitializerOptions) {
    resultRecordFactoryInitializer(options);
    resultErrorRecordFactoryInitializer(options);
}
