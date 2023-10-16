import "jest-extended/all";
import { Factory } from "rosie";
import type { FactoryInitializerOptions } from "@rsm-hcd/javascript-testing";
import { initializeFactories as initializeTestingFactories } from "@rsm-hcd/javascript-testing";
import { initializeFactories } from "./tests/factories";

beforeAll(() => {
    const options: FactoryInitializerOptions = {
        define: (name, constructor) => Factory.define(name, constructor),
    };

    initializeTestingFactories(options);
    initializeFactories(options);
});

// Run before each individual test across the entire test suite
beforeEach(() => {
    jest.resetAllMocks();
});
