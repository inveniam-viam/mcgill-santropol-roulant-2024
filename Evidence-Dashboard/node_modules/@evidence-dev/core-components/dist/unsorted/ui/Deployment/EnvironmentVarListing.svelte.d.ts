export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  EnvironmentVarListingProps */
/** @typedef {typeof __propDef.events}  EnvironmentVarListingEvents */
/** @typedef {typeof __propDef.slots}  EnvironmentVarListingSlots */
export default class EnvironmentVarListing extends SvelteComponent<{
    datasourceSettings: {
        environmentVariables: Record<string, string>;
    }[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EnvironmentVarListingProps = typeof __propDef.props;
export type EnvironmentVarListingEvents = typeof __propDef.events;
export type EnvironmentVarListingSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        datasourceSettings: Array<{
            environmentVariables: Record<string, string>;
        }>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
