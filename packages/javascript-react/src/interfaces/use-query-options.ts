import type { CatchResultHandler } from "@rsm-hcd/javascript-core";
import type { ListServiceHook } from "../types/list-service-hook-type";
import type { NestedListServiceHook } from "../types/nested-list-service-hook-type";

export interface UseQueryOptions<
    TRecord,
    TQueryParams,
    TPathParams = undefined,
> {
    serviceHook:
        | ListServiceHook<TRecord, TQueryParams>
        | NestedListServiceHook<TRecord, TPathParams, TQueryParams>;
    initialQuery: TQueryParams;
    initialPathParams?: TPathParams;
    onSuccess?: (records: TRecord[]) => void;
    onError?: CatchResultHandler<TRecord>;
}
