import type { IFactory } from "rosie";

type FactoryType = string;

type FactoryConstructor =
    | ((...opts: any[]) => any)
    | (new (...opts: any[]) => any);

export interface FactoryInitializerOptions {
    define: <T = any>(
        name: FactoryType,
        constructor?: FactoryConstructor
    ) => IFactory<T>;
}

export type FactoryInitializer = (options: FactoryInitializerOptions) => void;
