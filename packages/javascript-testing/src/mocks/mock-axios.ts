import type { AxiosMockType } from "jest-mock-axios";
import type mockAxios from "jest-mock-axios";
import { Record } from "immutable";

// ---------------------------------------------------------
// #region Interfaces & Types
// ---------------------------------------------------------

/**
 * MockAxios is merely a typed wrapper around the dynamically
 * mocked __mocks__/axios implementation.
 */
interface MockAxios {
    delete: typeof mockAxios.delete;

    /**
     * Simple way to mock a successful axios delete request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    deleteSuccess: (record?: any, delay?: number) => void;

    get: typeof mockAxios.get;

    /**
     * Simple way to mock a successful axios get/find request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    getSuccess: (record: any, delay?: number) => void;

    /**
     * Simple way to mock a successful axios get/list request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    listSuccess: (records: any[], delay?: number) => void;

    post: typeof mockAxios.post;

    /**
     * Simple way to mock a successful axios post request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    postSuccess: (record: any, delay?: number) => void;

    put: typeof mockAxios.put;

    /**
     * Simple way to mock a successful axios put request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    putSuccess: (record: any, delay?: number) => void;
}

// #endregion Interfaces & Types

// ---------------------------------------------------------
// #region Private Functions
// ---------------------------------------------------------

const _mockSuccess = (
    method: jest.Mock,
    resultObject: any | any[],
    delay?: number
) => {
    resultObject = _resultObjectToJS(resultObject);
    delay = delay != null ? delay : 0;
    const resolveResult = {
        data: {
            resultObject,
        },
    };

    // Result needs to match PagedResult<T> when an array
    if (resultObject != null && resultObject instanceof Array) {
        (resolveResult.data as any).rowCount = resultObject.length;
    }

    method.mockImplementationOnce(() => {
        return new Promise((resolve) =>
            window.setTimeout(() => {
                resolve(resolveResult);
            }, delay)
        );
    });
};

const _resultObjectToJS = (resultObject: any | any[]): any | any[] => {
    if (resultObject == null) {
        return resultObject;
    }

    if (resultObject instanceof Array) {
        return resultObject.map((r) => r.toJS());
    }

    if (Record.isRecord(resultObject)) {
        return resultObject.toJS();
    }

    return resultObject;
};

// #endregion Private Functions

// ---------------------------------------------------------
// #region Exports
// ---------------------------------------------------------

const MockAxiosUtils: (mockAxios: AxiosMockType) => MockAxios = (mockAxios) => {
    const deleteSuccess = (record?: any, delay?: number) => {
        _mockSuccess(mockAxios.delete, record, delay);
    };

    const getSuccess = (record: any, delay?: number) => {
        _mockSuccess(mockAxios.get, record, delay);
    };

    const listSuccess = (records: any[], delay?: number) => {
        _mockSuccess(mockAxios.get, records, delay);
    };

    const postSuccess = (record: any, delay?: number) => {
        _mockSuccess(mockAxios.post, record, delay);
    };

    const putSuccess = (record: any, delay?: number) => {
        _mockSuccess(mockAxios.put, record, delay);
    };

    return {
        delete: mockAxios.delete,
        deleteSuccess,
        get: mockAxios.get,
        getSuccess,
        listSuccess,
        post: mockAxios.post,
        postSuccess,
        put: mockAxios.put,
        putSuccess,
    };
};

export { MockAxiosUtils };

// #endregion Exports
