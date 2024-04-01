import { useMemo } from "react";

export function useResultsMerge<T extends { id: number }>(
    results: T[],
    created: T[],
    updated: T[],
    deleted: number[]
) {
    return useMemo(() => {
        const mergedResults = [
            ...results,
            ...created.filter(
                (created) => !results.some((result) => result.id === created.id)
            ),
        ];

        return mergedResults
            .filter((result) => !deleted.some((d) => d === result.id))
            .map(
                (result) =>
                    updated.find((updated) => updated.id === result.id) ??
                    result
            );
    }, [created, deleted, results, updated]);
}
