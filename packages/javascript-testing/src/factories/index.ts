import type { FactoryInitializerOptions } from "./factory-initializer";
import { axiosResponseFactoryInitializer } from "./axios-response-factory";
import { stubResourceRecordFactoryInitializer } from "./stub-resource-record-factory";

export function initializeFactories(options: FactoryInitializerOptions): void {
    axiosResponseFactoryInitializer(options);
    stubResourceRecordFactoryInitializer(options);
}
