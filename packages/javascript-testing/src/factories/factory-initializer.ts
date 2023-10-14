import { IFactory } from "rosie";

type FactoryType = string;

type FactoryConstructor =
    | ((...opts: any[]) => any)
    | (new (...opts: any[]) => any);

export type FactoryInitializerOptions = {
    define<T = any>(
        name: FactoryType,
        constructor?: FactoryConstructor
    ): IFactory<T>;
};

export type FactoryInitializer = (options: FactoryInitializerOptions) => void;
