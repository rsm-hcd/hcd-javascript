import axios from "axios";
import { RouteUtils, ServiceUtils } from "@rsm-hcd/javascript-core";
import type { BulkUpdateService } from "../types/bulk-update-service-type";
import type { DeleteService } from "../types/delete-service-type";
import type { CreateService } from "../types/create-service-type";
import type { ListService } from "../types/list-service-type";
import type { GetService } from "../types/get-service-type";
import type { NestedCreateService } from "../types/nested-create-service-type";
import type { NestedListService } from "../types/nested-list-service-type";
import type { UpdateService } from "../types/update-service-type";

// ---------------------------------------------------------------------------------------------
// #region Types
// ---------------------------------------------------------------------------------------------

export interface RecordType {
    id: number;
    toJS: () => unknown;
}

// ---------------------------------------------------------------------------------------------
// #region Public Functions
// ---------------------------------------------------------------------------------------------

/**
 * Factory to encapsulate common service function logic
 */
const ServiceFactory = {
    /**
     * Creates a conventional Service Update function for an Array of the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    bulkUpdate<TRecord extends RecordType, TPathParams extends any>(
        recordType: new () => TRecord,
        resourceEndpoint: string
    ): BulkUpdateService<TRecord, TPathParams> {
        return (records: TRecord[], pathParams?: any) =>
            _bulkUpdate<TRecord, TPathParams>(
                recordType,
                records,
                resourceEndpoint,
                pathParams
            );
    },

    /**
     * Creates conventional Service Create function for the supplied resource type
     *
     * ### Recommendation
     * Use `nestedCreate` when route is nested!
     *
     * @param recordType
     * @param baseEndpoint
     */
    create<TRecord extends RecordType>(
        recordType: new () => TRecord,
        baseEndpoint: string
    ): CreateService<TRecord> {
        return (record?: TRecord) =>
            _create<TRecord>(recordType, baseEndpoint, record);
    },

    /**
     * Creates conventional Service Delete function for the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    delete(resourceEndpoint: string): DeleteService {
        return (id: number, pathParams?: any) =>
            _delete(id, resourceEndpoint, pathParams);
    },

    /**
     * Creates conventional Service Get function for the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    get<TRecord, TPathParams, TQueryParams = undefined>(
        recordType: new () => TRecord,
        resourceEndpoint: string
    ): GetService<TRecord, TPathParams, TQueryParams> {
        return (pathParams: TPathParams, queryParams?: TQueryParams) =>
            _get<TRecord, TPathParams, TQueryParams>(
                recordType,
                resourceEndpoint,
                pathParams,
                queryParams
            );
    },

    /**
     * Creates conventional Service List function for the supplied resource type
     *
     * ### Recommendation
     * Use `nestedList` when route is nested!
     *
     * @param recordType
     * @param baseEndpoint
     */
    list<TRecord, TQueryParams>(
        recordType: new () => TRecord,
        baseEndpoint: string
    ): ListService<TRecord, TQueryParams> {
        return (queryParams?: TQueryParams) =>
            _list<TRecord>(recordType, baseEndpoint, null, queryParams);
    },

    /**
     * Creates conventional Service Create function for the supplied resource type
     * when the resource is nested
     * @param recordType
     * @param baseEndpoint
     */
    nestedCreate<TRecord extends RecordType, TPathParams>(
        recordType: new () => TRecord,
        baseEndpoint: string
    ): NestedCreateService<TRecord, TPathParams> {
        return (record: TRecord, pathParams: TPathParams) => {
            const url = RouteUtils.getUrlFromPath(baseEndpoint, pathParams);

            if (!url) {
                throw new Error(
                    `Could not create nested resource. URL could not be constructed from path: ${baseEndpoint}`
                );
            }

            return _create<TRecord>(recordType, url, record);
        };
    },

    /**
     * Creates conventional Service List function for the supplied resource type
     * @param recordType
     * @param baseEndpoint
     */
    nestedList<TRecord, TPathParams, TQueryParams>(
        recordType: new () => TRecord,
        baseEndpoint: string
    ): NestedListService<TRecord, TPathParams, TQueryParams> {
        return (pathParams: TPathParams, queryParams?: TQueryParams) =>
            _list<TRecord>(recordType, baseEndpoint, pathParams, queryParams);
    },

    /**
     * Creates conventional Service Update function for the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    update<TRecord extends RecordType, TPathParams extends any>(
        recordType: new () => TRecord,
        resourceEndpoint: string
    ): UpdateService<TRecord, TPathParams> {
        return (record: TRecord, pathParams?: any) =>
            _update<TRecord, TPathParams>(
                recordType,
                record,
                resourceEndpoint,
                pathParams
            );
    },
};

// #endregion Public Functions

// ---------------------------------------------------------------------------------------------
// #region Private Functions
// ---------------------------------------------------------------------------------------------

const _buildUrl = (id: number, resourceEndpoint: string, pathParams?: any) => {
    if (pathParams == null) {
        pathParams = {};
    }
    pathParams = Object.assign(pathParams, { id });
    return RouteUtils.getUrlFromPath(resourceEndpoint, pathParams);
};

const _bulkUpdate = async function <
    TRecord extends RecordType,
    TPathParams extends any,
>(
    recordType: new () => TRecord,
    records: TRecord[],
    resourceEndpoint: string,
    pathParams: TPathParams
) {
    const url = RouteUtils.getUrlFromPath(resourceEndpoint, pathParams);

    if (!url) {
        throw new Error(
            `Could not bulk update resource. URL could not be constructed from path: ${resourceEndpoint}`
        );
    }

    return axios
        .put(
            url,
            records.map((r: TRecord) => r.toJS())
        )
        .then((r) => ServiceUtils.mapPagedAxiosResponse(recordType, r));
};

const _create = async function <TRecord extends RecordType>(
    recordType: new () => TRecord,
    url: string,
    record?: TRecord
) {
    const requestData = record != null ? record.toJS() : null;

    return axios
        .post(url, requestData)
        .then((r) => ServiceUtils.mapAxiosResponse(recordType, r));
};

const _delete = async function (
    id: number,
    resourceEndpoint: string,
    pathParams?: any
) {
    const url = _buildUrl(id, resourceEndpoint, pathParams);

    if (!url) {
        throw new Error(
            `Could not delete resource. URL could not be constructed from path: ${resourceEndpoint}`
        );
    }

    return axios
        .delete(url)
        .then((r) => ServiceUtils.mapAxiosResponse(Boolean, r));
};

const _get = async function <TRecord, TPathParams, TQueryParams = undefined>(
    recordType: new () => TRecord,
    resourceEndpoint: string,
    pathParams: TPathParams,
    queryParams?: TQueryParams
) {
    const url = RouteUtils.getUrlFromPath(
        resourceEndpoint,
        pathParams,
        queryParams
    );

    if (!url) {
        throw new Error(
            `Could not get resource. URL could not be constructed from path: ${resourceEndpoint}`
        );
    }

    return axios
        .get(url)
        .then((r) => ServiceUtils.mapAxiosResponse(recordType, r));
};

const _list = async function <TRecord extends any>(
    recordType: new () => TRecord,
    baseEndpoint: string,
    pathParams?: any,
    queryParams?: any
) {
    const url = RouteUtils.getUrlFromPath(
        baseEndpoint,
        pathParams,
        queryParams
    );

    if (!url) {
        throw new Error(
            `Could not list resource. URL could not be constructed from path: ${baseEndpoint}`
        );
    }

    return axios
        .get(url)
        .then((r) => ServiceUtils.mapPagedAxiosResponse(recordType, r));
};

const _update = async function <
    TRecord extends RecordType,
    TPathParams extends any,
>(
    recordType: new () => TRecord,
    record: TRecord,
    resourceEndpoint: string,
    pathParams?: TPathParams
) {
    const url = _buildUrl(record.id, resourceEndpoint, pathParams);

    if (!url) {
        throw new Error(
            `Could not update resource. URL could not be constructed from path: ${resourceEndpoint}`
        );
    }

    return axios
        .put(url, record.toJS())
        .then((r) => ServiceUtils.mapAxiosResponse(recordType, r));
};

// #endregion Private Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { ServiceFactory };

// #endregion Exports
