import { CollectionUtils } from "@rsm-hcd/javascript-core";
import type { Dispatch, Reducer, ReducerAction, ReducerState } from "react";
import { useReducer } from "react";

// -----------------------------------------------------------------------------------------
// #region Hook
// -----------------------------------------------------------------------------------------

/**
 * Create a stateful array value which is always sorted alphabetically.
 * @param initialValue the initial value of the array. Does not need to be sorted, the hook will sort it before setting the value.
 * @param sortBySelector a function which takes an array element, and returns a string property by which to sort alphabetically.
 */
function useSortedAlphabetically<T>(
    initialValue: T[],
    sortBySelector: (value: T) => string
): [
    ReducerState<Reducer<T[], T[]>>,
    Dispatch<ReducerAction<Reducer<T[], T[]>>>,
] {
    const [values, setValues] = useReducer<Reducer<T[], T[]>>(
        // first parameter prevState is unused, replace with discard _
        (_: T[], newState: T[]) =>
            CollectionUtils.sortByString(newState, sortBySelector),
        CollectionUtils.sortByString(initialValue, sortBySelector)
    );

    return [values, setValues];
}

// #endregion Hook

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { useSortedAlphabetically };

// #endregion Exports
