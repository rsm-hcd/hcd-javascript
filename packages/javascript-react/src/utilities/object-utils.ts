/**
 * Check if two objects are equal by deep comparison.
 */
export function isDeepCompareEqual<TValue>(
    current: TValue,
    value: TValue
): boolean {
    if (current === value || (current == null && value == null)) {
        return true;
    }

    if (typeof current !== typeof value) {
        return false;
    }

    if (Array.isArray(current) && Array.isArray(value)) {
        if (current.length !== value.length) {
            return false;
        }

        for (let i = 0; i < current.length; i++) {
            if (!isDeepCompareEqual(current[i], value[i])) {
                return false;
            }
        }

        return true;
    }

    if (
        typeof current !== "object" ||
        typeof value !== "object" ||
        current == null ||
        value == null
    ) {
        return current === value;
    }

    const currentKeys = Object.keys(current);
    const optionsKeys = Object.keys(value);

    if (currentKeys.length !== optionsKeys.length) {
        return false;
    }

    // if keys are not equal, return false
    if (currentKeys.some((key) => !optionsKeys.includes(key))) {
        return false;
    }

    // recursively check if the objects are equal
    for (const key in value) {
        if (
            typeof value[key] === "object" &&
            !isDeepCompareEqual(current[key], value[key])
        ) {
            return false;
        }

        if (current[key] !== value[key]) {
            return false;
        }
    }

    return true;
}

/**
 * Deeply replace the properties of an object with the properties of another object.
 * If any values are replaced, it returns a new object.
 */
export function deepReplace<TValue>(current: TValue, value: TValue): TValue {
    if (current === value || (current == null && value == null)) {
        return current;
    }

    if (typeof current !== typeof value) {
        return value;
    }

    if (Array.isArray(current) && Array.isArray(value)) {
        if (current.length !== value.length) {
            return value;
        }

        for (let i = 0; i < current.length; i++) {
            if (!isDeepCompareEqual(current[i], value[i])) {
                return value;
            }
        }

        return current;
    }

    if (
        typeof current !== "object" ||
        typeof value !== "object" ||
        current == null ||
        value == null
    ) {
        return value;
    }

    const valueKeys = Object.keys(value);

    let returnCurrent = true;
    const next = { ...current };

    // remove keys from current that are not in value
    for (const key in next) {
        if (!valueKeys.includes(key)) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- this should be ok
            delete next[key];
            returnCurrent = false;
        }
    }

    for (const key in value) {
        const nextPropertyValue = deepReplace(current[key], value[key]);

        if (nextPropertyValue !== current[key]) {
            next[key] = nextPropertyValue;
            returnCurrent = false;
        }
    }

    return returnCurrent ? current : next;
}
