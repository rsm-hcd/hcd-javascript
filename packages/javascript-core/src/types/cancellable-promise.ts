interface CancellablePromise<T = any> {
    cancel: () => void;
    promise: Promise<T>;
}

export type { CancellablePromise };
