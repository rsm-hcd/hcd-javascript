import type { AxiosStatic } from "axios";

export const axiosMock = {
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
} as unknown as AxiosStatic;
