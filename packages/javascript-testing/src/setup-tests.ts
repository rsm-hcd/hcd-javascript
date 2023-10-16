import "jest-extended/all";
import { Factory } from "rosie";
import { initializeFactories } from "./factories";

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
