import "jest-extended/all";
import "@testing-library/jest-dom";
import { Factory } from "rosie";
import type { GlobalWithFetchMock } from "jest-fetch-mock";
import { initializeFactories } from "./tests/factories";

require("tests/factories");

const customGlobal: GlobalWithFetchMock =
    global as unknown as GlobalWithFetchMock;
customGlobal.fetch = require("jest-fetch-mock");

customGlobal.fetchMock = customGlobal.fetch;

beforeAll(() => {
    initializeFactories({
        define: (name, constructor) => Factory.define(name, constructor),
    });
});

// Run before each individual test across the entire test suite
beforeEach(() => {
    jest.resetAllMocks();
});
