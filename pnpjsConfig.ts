import { WebPartContext } from "@microsoft/sp-webpart-base";
import { spfi, SPFI, SPFx } from "@pnp/sp";
import { LogLevel, PnPLogging } from "@pnp/logging";

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/fields";
import "@pnp/sp/batching"; // Import batching

let _sp: SPFI | null = null;

export const getSP = (context?: WebPartContext): SPFI => {
    if (_sp === null && context != null) {
        // Initialize the PnPjs instance with SPFx context and logging
        _sp = spfi().using(SPFx(context)).using(PnPLogging(LogLevel.Warning));
    }
    return _sp!;
};
