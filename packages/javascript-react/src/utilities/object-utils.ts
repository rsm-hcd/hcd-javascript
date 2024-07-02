// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

/**
 * Check if two objects are equal by deep comparison.
 */
export function isDeepCompareEqual<TValue>(
    current: TValue,
    value: TValue
): boolean {
    if (isSame(current, value)) {
        return true;
    }

    if (isTypeMismatch(current, value)) {
        return false;
    }

    if (Array.isArray(current) && Array.isArray(value)) {
        return deepCompareArray(current, value);
    }

    if (!isObject(current) || !isObject(value)) {
        return current === value;
    }

    return deepCompareObject(current, value);
}

/**
 * Deeply replace the properties of an object with the properties of another object.
 * If any values are replaced, it returns a new object.
 */
export function deepReplace<TValue>(current: TValue, value: TValue): TValue {
    if (isSame(current, value)) {
        return current;
    }

    if (isTypeMismatch(current, value)) {
        return value;
    }

    if (Array.isArray(current) && Array.isArray(value)) {
        return deepReplaceArray(current, value);
    }

    if (!isObject(current) || !isObject(value)) {
        return value;
    }

    return deepReplaceObject(current, value);
}

// #endregion Exports

// -------------------------------------------------------------------------------------------------
// #region Private Methods
// -------------------------------------------------------------------------------------------------

function deepCompareObject<TValue extends object>(
    current: TValue,
    value: TValue
): boolean {
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
            isObject(value[key]) &&
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

function deepCompareArray<TValue extends unknown[]>(
    current: TValue,
    value: TValue
): boolean {
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

function deepReplaceObject<TValue extends object>(
    current: TValue,
    value: TValue
): TValue {
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

function deepReplaceArray<TValue extends unknown[]>(
    current: TValue,
    value: TValue
): TValue {
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

function isSame<TValue>(current: TValue, value: TValue) {
    return current === value || (current == null && value == null);
}

function isTypeMismatch<TValue>(current: TValue, value: TValue) {
    return typeof current !== typeof value;
}

function isObject(value: unknown): value is object {
    return value != null && typeof value === "object";
}

// #endregion Private Methods
