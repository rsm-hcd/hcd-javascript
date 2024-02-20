import type { ServiceResponse } from "@rsm-hcd/javascript-core";

/**
 * Type defining the service function for listing resources by supplied type
 *
 * @param queryParams Object with query parameters to be appended to the endpoint route
 */
export type ListService<TRecord, TQueryParams> = (
    queryParams?: TQueryParams
) => Promise<ServiceResponse<TRecord>>;
