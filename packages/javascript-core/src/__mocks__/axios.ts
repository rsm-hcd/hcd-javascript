// TODO-BUG (https://github.com/rsm-hcd/hcd-javascript/issues/17)
// // Hook into jest mocking, but re-export from testing
// import { MockAxios } from "@rsm-hcd/javascript-testing";
// export default MockAxios.default;

export default {
    defaults: {
        headers: {
            post: {},
            put: {},
        },
    },
    delete: jest.fn(() => Promise.resolve({ data: {} })),
    get: jest.fn(() => Promise.resolve({ data: {} })),
    interceptors: {
        response: {
            use: jest.fn(),
        },
    },
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} })),
};
