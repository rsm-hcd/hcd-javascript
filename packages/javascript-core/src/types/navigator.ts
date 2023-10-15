import type { NavigatorConnectionVariant } from "../enumerations/navigator-connection-variant";
import type { NetworkInformation } from "../interfaces/network-information";

export declare interface Navigator {
    [NavigatorConnectionVariant.Standard]?: NetworkInformation;
    [NavigatorConnectionVariant.Mozilla]?: NetworkInformation;
    [NavigatorConnectionVariant.Webkit]?: NetworkInformation;
    onLine: boolean;
}
