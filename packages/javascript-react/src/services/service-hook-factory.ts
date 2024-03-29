/**
 * Disabling eslint rule as currently it does not support currying of custom hooks
 * and thinks we are calling it
 */
import { useCallback } from "react";
import type { ServiceResponse } from "@rsm-hcd/javascript-core";
import { useCancellablePromise } from "../hooks/use-cancellable-promise";
import type { BulkUpdateServiceHook } from "../types/bulk-update-service-hook-type";
import type { CreateServiceHook } from "../types/create-service-hook-type";
import type { DeleteServiceHook } from "../types/delete-service-hook-type";
import type { GetServiceHook } from "../types/get-service-hook-type";
import type { ListServiceHook } from "../types/list-service-hook-type";
import type { NestedCreateServiceHook } from "../types/nested-create-service-hook-type";
import type { NestedListServiceHook } from "../types/nested-list-service-hook-type";
import type { UpdateServiceHook } from "../types/update-service-hook-type";
import type { RecordType } from "./service-factory";
import { ServiceFactory } from "./service-factory";

// ---------------------------------------------------------------------------------------------
// #region Functions
// ---------------------------------------------------------------------------------------------

/**
 * Factory to encapsulate common service function logic
 */
const ServiceHookFactory = {
    /**
     * Creates conventional hook for using service update function for an array of the supplied resource type.
     * Automatically handles cancellation tokens internally.
     * @param recordType
     * @param resourceEndpoint
     */
    useBulkUpdate<TRecord extends RecordType, TPathParams>(
        recordType: new () => TRecord,
        resourceEndpoint: string
    ): BulkUpdateServiceHook<TRecord, TPathParams> {
        return () => {
            const { cancellablePromise } = useCancellablePromise();

            const serviceUpdate = ServiceFactory.bulkUpdate(
                recordType,
                resourceEndpoint
            );

            function update(
                records: TRecord[],
                pathParams: TPathParams
            ): Promise<ServiceResponse<TRecord>> {
                return cancellablePromise(serviceUpdate(records, pathParams));
            }

            return { update: useCallback(update, []) };
        };
    },

    /**
     * Creates conventional hook for using service create function for the supplied resource type.
     * Automatically handles cancellation tokens internally.
     *
     * ### Recommendation
     * Use `useNestedCreate` when route is nested!
     *
     * @param recordType
     * @param baseEndpoint
     */
    useCreate<TRecord extends RecordType>(
        recordType: new () => TRecord,
        baseEndpoint: string
    ): CreateServiceHook<TRecord> {
        return () => {
            const { cancellablePromise } = useCancellablePromise();

            const serviceCreate = ServiceFactory.create(
                recordType,
                baseEndpoint
            );

            function create(
                record?: TRecord
            ): Promise<ServiceResponse<TRecord>> {
                return cancellablePromise(serviceCreate(record));
            }

            return { create: useCallback(create, []) };
        };
    },

    /**
     * Creates conventional hook for using service delete function for the supplied resource type.
     * Automatically handles cancellation tokens internally.
     * @param recordType
     * @param baseEndpoint
     */
    useDelete(resourceEndpoint: string): DeleteServiceHook {
        return () => {
            const { cancellablePromise } = useCancellablePromise();

            const serviceDelete = ServiceFactory.delete(resourceEndpoint);

            function _delete(
                id: number,
                pathParams?: any
            ): Promise<ServiceResponse<Boolean>> {
                return cancellablePromise(serviceDelete(id, pathParams));
            }

            return { delete: useCallback(_delete, []) };
        };
    },

    /**
     * Creates conventional hook for using service get function for the supplied resource type.
     * Automatically handles cancellation tokens internally.
     * @param recordType
     * @param resourceEndpoint
     */
    useGet<TRecord, TPathParams, TQueryParams = undefined>(
        recordType: new () => TRecord,
        resourceEndpoint: string
    ): GetServiceHook<TRecord, TPathParams, TQueryParams> {
        return () => {
            const { cancellablePromise } = useCancellablePromise();

            const serviceGet = ServiceFactory.get<
                TRecord,
                TPathParams,
                TQueryParams
            >(recordType, resourceEndpoint);

            function get(
                pathParams: TPathParams,
                queryParams?: TQueryParams
            ): Promise<ServiceResponse<TRecord>> {
                return cancellablePromise(serviceGet(pathParams, queryParams));
            }

            return { get: useCallback(get, []) };
        };
    },

    /**
     * Creates conventional hook for using service list function for the supplied resource type.
     * Automatically handles cancellation tokens internally.
     *
     * ### Recommendation
     * Use `useNestedList` when route is nested!
     *
     * @param recordType
     * @param baseEndpoint
     */
    useList<TRecord, TQueryParams>(
        recordType: new () => TRecord,
        baseEndpoint: string
    ): ListServiceHook<TRecord, TQueryParams> {
        return () => {
            const { cancellablePromise } = useCancellablePromise();

            const serviceList = ServiceFactory.list<TRecord, TQueryParams>(
                recordType,
                baseEndpoint
            );

            function list(
                queryParams?: TQueryParams
            ): Promise<ServiceResponse<TRecord>> {
                return cancellablePromise(serviceList(queryParams));
            }

            return { list: useCallback(list, []) };
        };
    },

    /**
     * Creates conventional hook for using service nested create function for the supplied resource type.
     * Automatically handles cancellation tokens internally.
     * @param recordType
     * @param baseEndpoint
     */
    useNestedCreate<TRecord extends RecordType, TPathParams>(
        recordType: new () => TRecord,
        baseEndpoint: string
    ): NestedCreateServiceHook<TRecord, TPathParams> {
        return () => {
            const { cancellablePromise } = useCancellablePromise();

            const serviceCreate = ServiceFactory.nestedCreate<
                TRecord,
                TPathParams
            >(recordType, baseEndpoint);

            function create(
                record: TRecord,
                pathParams: TPathParams
            ): Promise<ServiceResponse<TRecord>> {
                return cancellablePromise(serviceCreate(record, pathParams));
            }

            return { create: useCallback(create, []) };
        };
    },

    /**
     * Creates conventional hook for using service nested list function for the supplied resource type.
     * Automatically handles cancellation tokens internally.
     * @param recordType
     * @param baseEndpoint
     */
    useNestedList<TRecord, TPathParams, TQueryParams>(
        recordType: new () => TRecord,
        baseEndpoint: string
    ): NestedListServiceHook<TRecord, TPathParams, TQueryParams> {
        return () => {
            const { cancellablePromise } = useCancellablePromise();

            const serviceList = ServiceFactory.nestedList<
                TRecord,
                TPathParams,
                TQueryParams
            >(recordType, baseEndpoint);

            function list(
                pathParams: TPathParams,
                queryParams?: TQueryParams
            ): Promise<ServiceResponse<TRecord>> {
                return cancellablePromise(serviceList(pathParams, queryParams));
            }

            return { list: useCallback(list, []) };
        };
    },

    /**
     * Creates conventional hook for using service update function for the supplied resource type.
     * Automatically handles cancellation tokens internally.
     * @param recordType
     * @param baseEndpoint
     */
    useUpdate<TRecord extends RecordType, TPathParams>(
        recordType: new () => TRecord,
        resourceEndpoint: string
    ): UpdateServiceHook<TRecord, TPathParams> {
        return () => {
            const { cancellablePromise } = useCancellablePromise();

            const serviceUpdate = ServiceFactory.update(
                recordType,
                resourceEndpoint
            );

            function update(
                record: TRecord,
                pathParams?: TPathParams
            ): Promise<ServiceResponse<TRecord>> {
                return cancellablePromise(serviceUpdate(record, pathParams));
            }

            return { update: useCallback(update, []) };
        };
    },
};

// #endregion Functions

// ---------------------------------------------------------------------------------------------
// #region Exports
// ---------------------------------------------------------------------------------------------

export { ServiceHookFactory };

// #endregion Exports
