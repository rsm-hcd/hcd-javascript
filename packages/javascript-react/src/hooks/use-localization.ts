import type { TFunction } from "i18next";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

type DropFirst<T extends unknown[]> = T extends [unknown, ...infer U]
    ? U
    : never;

/**
 * Typed wrapper of i18n `useTranslation` hook
 */
export const useLocalization = <TKeys>() => {
    const { t } = useTranslation();

    const translate = (
        key: keyof TKeys,
        ...options: DropFirst<Parameters<TFunction>>
    ) => t(key as string, ...options);

    return {
        t: useCallback(translate, [t]),
    };
};
