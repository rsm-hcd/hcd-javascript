import { useRef } from "react";
import { deepReplace } from "../utilities/object-utils";

/**
 * Returns a memoized value that is deeply compared.
 */
export function useDeepMemo<TValue>(obj: TValue): TValue {
    const ref = useRef<TValue>(obj);
    ref.current = deepReplace(ref.current, obj);
    return ref.current;
}
