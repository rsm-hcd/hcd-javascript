import { faker } from "@faker-js/faker";

const TestUtils = {
    // -----------------------------------------------------------------------------------------
    // #region Public Properties
    // -----------------------------------------------------------------------------------------

    faker,

    // #endregion Public Properties

    // -----------------------------------------------------------------------------------------
    // #region Public Functions
    // -----------------------------------------------------------------------------------------

    /**
     * Randomize case of string
     */
    randomCase(value: string): string {
        return value
            .split("")
            .map((char: string) =>
                faker.datatype.boolean()
                    ? char.toUpperCase()
                    : char.toLowerCase()
            )
            .join("");
    },

    /**
     * Wrapper around `faker.system.fileName`
     */
    randomFilename(): string {
        return faker.system.fileName();
    },

    /**
     * Wrapper around `faker.string.uuid`
     */
    randomGuid(): string {
        return faker.string.uuid();
    },

    /**
     * Returns a random key from the given object. If the object has no keys, it returns `undefined`.
     */
    randomKey(obj: object): string | undefined {
        if (Object.keys(obj).length === 0) {
            return undefined;
        }

        return faker.helpers.arrayElement(Object.keys(obj));
    },

    /**
     * Generates random object
     */
    randomObject(keyCount?: number): Record<string, string> {
        const object: Record<string, string> = {};
        keyCount = keyCount ?? faker.number.int({ min: 1, max: 10 });

        for (let i = 0; i < keyCount; i++) {
            const key = this.randomGuid();
            object[key] = this.randomWord();
        }

        return object;
    },
    /**
     * Generates random path
     */
    randomPath(): string {
        return faker.system.directoryPath();
    },

    /**
     * Returns a random value from the given object. If the object has no keys, it returns `undefined`.
     */
    randomValue<TValue = any>(
        obj: Record<string, TValue> | Array<TValue>
    ): TValue | undefined {
        if (Array.isArray(obj)) {
            if (obj.length === 0) {
                return undefined;
            }

            return faker.helpers.arrayElement(obj);
        }

        const key = this.randomKey(obj);
        if (key === undefined) {
            return undefined;
        }

        return obj[key];
    },

    /**
     * Wrapper of faker.word.sample.
     */
    randomWord(): string {
        return faker.word.words(1);
    },

    /**
     * Returns a string array of at least two random words, leveraging the `TestUtils.randomWord` function
     */
    randomWords(): string[] {
        const words: string[] = [];
        const count = faker.number.int({ min: 2, max: 10 });
        for (let i = 0; i < count; i++) {
            words.push(this.randomWord());
        }

        return words;
    },

    // #endregion Public Functions
};

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { TestUtils };

// #endregion Exports
