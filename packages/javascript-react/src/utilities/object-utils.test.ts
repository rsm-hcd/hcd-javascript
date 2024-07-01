import { deepReplace } from "./object-utils";

describe("object-utils", () => {
    describe("deepReplace", () => {
        it("returns current value if new value is the same", () => {
            // Arrange
            const current = { a: 1, b: 2 };
            const value = { a: 1, b: 2 };

            // Act
            const result = deepReplace(current, value);

            // Assert
            expect(result).toEqual(current);
        });

        it("returns new value if property values are different", () => {
            // Arrange
            const current = { a: 1, b: 2 };
            const value = { a: 1, b: 3 };

            // Act
            const result = deepReplace(current, value);

            // Assert
            expect(result).not.toEqual(current);
            expect(result.b).toEqual(value.b);
            expect(result.a).toEqual(current.a);
        });

        it("returns current value if nested array values are the same", () => {
            // Arrange
            const current = { a: [1, 2, 3] };
            const value = { a: [1, 2, 3] };

            // Act
            const result = deepReplace(current, value);

            // Assert
            expect(result).toEqual(current);
        });

        it("returns current value if nested array objects are the same", () => {
            // Arrange
            const current = { a: [{ b: 1 }, { b: 1 }, { b: 3 }] };
            const value = { a: [{ b: 1 }, { b: 1 }, { b: 3 }] };

            // Act
            const result = deepReplace(current, value);

            // Assert
            expect(result).toEqual(current);
        });

        it("returns new value if nested array objects are different", () => {
            // Arrange
            const current = { a: [{ b: 1 }, { b: 1 }, { b: 4 }] };
            const value = { a: [{ b: 1 }, { b: 1 }, { b: 3 }] };

            // Act
            const result = deepReplace(current, value);

            // Assert
            expect(result).not.toEqual(current);
        });

        it("returns new value if nested property values are different", () => {
            // Arrange
            const current = {
                a: 1,
                b: {
                    c: 2,
                    d: 3,
                },
                e: {
                    f: 4,
                    g: 5,
                },
            };
            const value = {
                a: 1,
                b: {
                    c: 2,
                    d: 4,
                },
                e: {
                    f: 4,
                    g: 5,
                },
            };

            // Act
            const result = deepReplace(current, value);

            // Assert
            expect(result).not.toEqual(current);
            expect(result.b.d).toEqual(value.b.d);
            expect(result.e).toEqual(current.e);
        });
    });
});
