import "jest-extended/all";
import { Factory } from "rosie";
import {
    FactoryInitializerOptions,
    initializeFactories as initializeTestingFactories,
} from "@rsm-hcd/javascript-testing";
import { initializeFactories } from "tests/factories";

// global.console = {
//     ...console,
//     // uncomment to ignore a specific log level
//     log: jest.fn(),
//     debug: jest.fn(),
//     info: jest.fn(),
//     // warn: jest.fn(),
//     // error: jest.fn(),
// };

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
