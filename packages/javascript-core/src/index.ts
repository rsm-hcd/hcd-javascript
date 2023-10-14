// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

export { AuditableDefaultValues } from "./constants/auditable-default-values";
export { EmailConstants } from "./constants/email-constants";
export { Rfc4646LanguageCodes } from "./constants/rfc4646-language-codes";
export { VideoResolutions } from "./constants/video-resolutions";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Cultures
// -----------------------------------------------------------------------------------------

export { BaseEnglishUnitedStates } from "./cultures/base-english-united-states";
export { BaseSpanishSpain } from "./cultures/base-spanish-spain";

// #endregion Cultures

// -----------------------------------------------------------------------------------------
// #region Enumerations
// -----------------------------------------------------------------------------------------

export { AnchorTargetTypes } from "./enumerations/anchor-target-types";
export { AriaRole } from "./enumerations/aria-role";
export { ConnectionType } from "./enumerations/connection-type";
export { ContentType } from "./enumerations/content-type";
export { EffectiveConnectionType } from "./enumerations/effective-connection-type";
export { ErrorType } from "./enumerations/error-type";
export { HttpHeader } from "./enumerations/http-header";
export { HttpVerb } from "./enumerations/http-verb";
export { UnitOfTime } from "./enumerations/unit-of-time";

// #endregion Enumerations

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export type { Auditable } from "./interfaces/auditable";
export type { Culture } from "./interfaces/culture";
export type { CultureParams } from "./interfaces/culture-params";
export type { Entity } from "./interfaces/entity";
export type { KeyValuePair } from "./interfaces/key-value-pair";
export type { LocalizationInitOptions } from "./interfaces/localization-init-options";
export type { NetworkConnection } from "./interfaces/network-connection";
export type { PagedQuery } from "./interfaces/paged-query";
export type { PagedResult } from "./interfaces/paged-result";
export type { Result } from "./interfaces/result";
export type { ResultError } from "./interfaces/result-error";
export type { Role } from "./interfaces/role";
export type { ScrollOptions } from "./interfaces/scroll-options";
export type { ServiceResponse } from "./interfaces/service-response";
export type { User } from "./interfaces/user";

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

export type { AsyncWorkload } from "./types/async-workload";
export type { CancellablePromise } from "./types/cancellable-promise";
export type { CatchResultHandler } from "./types/catch-result-handler";
export type { Constructor } from "./types/constructor";
export type { FinallyHandler } from "./types/finally-handler";
export type { OmitKeys } from "./types/omit-keys";
export type { SyncWorkload } from "./types/sync-workload";
export type { RequiredOr } from "./types/required-or";
export type { RequiredOrUndefined } from "./types/required-or-undefined";
export type { TimerFunctionReturn } from "./types/timer-function-return";

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Utilities
// -----------------------------------------------------------------------------------------

export { BrowserUtils } from "./utilities/browser-utils";
export { CollectionUtils } from "./utilities/collection-utils";
export { CoreUtils } from "./utilities/core-utils";
export { Do } from "./utilities/do-try";
export { DoSync } from "./utilities/do-try";
export { EnvironmentUtils } from "./utilities/environment-utils";
export { LocalizationUtils } from "./utilities/localization-utils";
export { NetworkInformationUtils } from "./utilities/network-information-utils";
export { PolyfillUtils } from "./utilities/polyfill-utils";
export { PromiseFactory } from "./utilities/promise-factory";
export { RecordUtils } from "./utilities/record-utils";
export { RouteUtils } from "./utilities/route-utils";
export { ScrollUtils } from "./utilities/scroll-utils";
export { ServiceUtils } from "./utilities/service-utils";
export { StringUtils } from "./utilities/string-utils";

// #endregion Utilities

// -----------------------------------------------------------------------------------------
// #region View Models
// -----------------------------------------------------------------------------------------

export { ResultRecord } from "./view-models/result-record";
export { ResultErrorRecord } from "./view-models/result-error-record";

// #endregion View Models
