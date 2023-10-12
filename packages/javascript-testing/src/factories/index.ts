import { axiosResponseFactoryInitializer } from "./axios-response-factory";
import { FactoryInitializerOptions } from "factories/factory-initializer";
import { stubResourceRecordFactoryInitializer } from "./stub-resource-record-factory";

export function initializeFactories(options: FactoryInitializerOptions) {
    axiosResponseFactoryInitializer(options);
    stubResourceRecordFactoryInitializer(options);
}
