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

        describe("arrays have the same values", () => {
            it("returns current array", () => {
                // Arrange
                const current = [1, 2, 3];
                const value = [1, 2, 3];

                // Act
                const result = deepReplace(current, value);

                // Assert
                expect(result).toEqual(current);
            });
        });

        describe("arrays have different values", () => {
            it("returns new array", () => {
                // Arrange
                const current = [1, 2, 3];
                const value = [1, 2, 4];

                // Act
                const result = deepReplace(current, value);

                // Assert
                expect(result).toEqual(value);
            });
        });

        describe("arrays have different lengths", () => {
            it("returns new array", () => {
                // Arrange
                const current = [1, 2, 3];
                const value = [1, 2];

                // Act
                const result = deepReplace(current, value);

                // Assert
                expect(result).toEqual(value);
            });
        });

        describe("arrays have the same objects", () => {
            it("returns current array", () => {
                // Arrange
                const current = [{ a: 1 }, { a: 2 }, { a: 3 }];
                const value = [{ a: 1 }, { a: 2 }, { a: 3 }];

                // Act
                const result = deepReplace(current, value);

                // Assert
                expect(result).toEqual(current);
            });
        });

        describe("arrays have different objects", () => {
            it("returns new array", () => {
                // Arrange
                const current = [{ a: 1 }, { a: 2 }, { a: 3 }];
                const value = [{ a: 1 }, { a: 2 }, { a: 4 }];

                // Act
                const result = deepReplace(current, value);

                // Assert
                expect(result).toEqual(value);
            });
        });

        describe("primitive values", () => {
            describe("current value is a string", () => {
                describe("new value is a string", () => {
                    describe("values are the same", () => {
                        it("returns current string", () => {
                            // Arrange
                            const current = "current";
                            const value = "current";

                            // Act
                            const result = deepReplace(current, value);

                            // Assert
                            expect(result).toEqual(current);
                        });
                    });

                    describe("values are different", () => {
                        it("returns new string", () => {
                            // Arrange
                            const current = "current";
                            const value = "new";

                            // Act
                            const result = deepReplace(current, value);

                            // Assert
                            expect(result).toEqual(value);
                        });
                    });
                });

                describe("new value is a number", () => {
                    it("returns new value", () => {
                        // Arrange
                        const current = "current";
                        const value = 1;

                        // Act
                        const result = deepReplace<unknown>(current, value);

                        // Assert
                        expect(result).toEqual(value);
                    });
                });

                describe("new value is an object", () => {
                    it("returns new value", () => {
                        // Arrange
                        const current = "current";
                        const value = { a: 1 };

                        // Act
                        const result = deepReplace<unknown>(current, value);

                        // Assert
                        expect(result).toEqual(value);
                    });
                });
            });
        });
    });
});
