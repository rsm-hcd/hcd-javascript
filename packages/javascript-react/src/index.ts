// -----------------------------------------------------------------------------------------
// #region Service Hooks
// -----------------------------------------------------------------------------------------

export { useListService } from "./hooks/service-hooks/use-list";
export { useGetService } from "./hooks/service-hooks/use-get";
export { useCreateService } from "./hooks/service-hooks/use-create";
export { useUpdateService } from "./hooks/service-hooks/use-update";
export { useDeleteService } from "./hooks/service-hooks/use-delete";

// #endregion

// -----------------------------------------------------------------------------------------
// #region Hooks
// -----------------------------------------------------------------------------------------

export { useAbortSignal } from "./hooks/use-abort-signal";
export { makeCancellable } from "./hooks/make-cancellable";
export { useAsyncEffect } from "./hooks/use-async-effect";
export { useCancellablePromise } from "./hooks/use-cancellable-promise";
export { useDebounce } from "./hooks/use-debounce";
export { useLocalization } from "./hooks/use-localization";
export { useOnClickOutside } from "./hooks/use-onclick-outside";
export { usePageErrors } from "./hooks/use-page-errors";
export { useSortedAlphabetically } from "./hooks/use-sorted-alphabetically";
export { useTextOverflow } from "./hooks/use-text-overflow";
export { useWindow } from "./hooks/use-window";

// #endregion

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export type { RedirectDefinition } from "./interfaces/redirect-definition";
export type { RouteDefinition } from "./interfaces/route-definition";
export type { RouteMap } from "./interfaces/route-map";
export type { UnmatchedRoute } from "./interfaces/unmatched-route";

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Services
// -----------------------------------------------------------------------------------------

export { ServiceFactory } from "./services/service-factory";
export { ServiceHookFactory } from "./services/service-hook-factory";

// #endregion Services

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

export type { AsyncEffectCallback } from "./types/async-effect-callback-type";
export type {
    BulkUpdateService,
    BulkUpdateServiceWithSignal,
} from "./types/bulk-update-service-type";
export type { BulkUpdateServiceHook } from "./types/bulk-update-service-hook-type";
export type {
    CreateService,
    CreateServiceWithSignal,
} from "./types/create-service-type";
export type { CreateServiceHook } from "./types/create-service-hook-type";
export type {
    DeleteService,
    DeleteServiceWithSignal,
} from "./types/delete-service-type";
export type { DeleteServiceHook } from "./types/delete-service-hook-type";
export type {
    GetService,
    GetServiceWithSignal,
} from "./types/get-service-type";
export type {
    GetServiceHook,
    GetServiceHookWithSignal,
} from "./types/get-service-hook-type";
export type {
    ListService,
    ListServiceWithSignal,
} from "./types/list-service-type";
export type {
    ListServiceHook,
    ListServiceHookWithSignal,
} from "./types/list-service-hook-type";
export type {
    NestedCreateService,
    NestedCreateServiceWithSignal,
} from "./types/nested-create-service-type";
export type {
    NestedCreateServiceHook,
    NestedCreateServiceHookWithSignal,
} from "./types/nested-create-service-hook-type";
export type {
    NestedListService,
    NestedListServiceWithSignal,
} from "./types/nested-list-service-type";
export type {
    NestedListServiceHook,
    NestedListServiceHookWithSignal,
} from "./types/nested-list-service-hook-type";
export type {
    UpdateService,
    UpdateServiceWithSignal,
} from "./types/update-service-type";
export type {
    UpdateServiceHook,
    UpdateServiceHookWithSignal,
} from "./types/update-service-hook-type";

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Utilities
// -----------------------------------------------------------------------------------------

export { RouteUtils } from "./utilities/route-utils";

// #endregion Utilities
