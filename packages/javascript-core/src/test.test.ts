import { Factory } from "rosie";
import {
    FactoryInitializerOptions,
    initializeFactories as initializeTestingFactories,
} from "@rsm-hcd/javascript-testing";
import { initializeFactories } from "tests/factories";

describe("test", () => {
    test("test", () => {
        expect(true).toBe(true);
    });
});
