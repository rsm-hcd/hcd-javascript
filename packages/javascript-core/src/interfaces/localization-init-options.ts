import type { InitOptions, InterpolationOptions } from "i18next";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface LocalizationInitOptions
    extends Pick<InitOptions, "debug">,
        Pick<InitOptions, "detection">,
        Pick<InterpolationOptions, "escapeValue"> {}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export type { LocalizationInitOptions };

// #endregion Export
