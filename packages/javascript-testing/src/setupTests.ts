import "jest-extended/all";
import { initializeFactories } from "./factories";
import { Factory } from "rosie";

beforeAll(() => {
    initializeFactories({
        define(name, constructor) {
            return Factory.define(name, constructor);
        },
    });
});

// Run before each individual test across the entire test suite
beforeEach(() => {
    jest.resetAllMocks();
});
