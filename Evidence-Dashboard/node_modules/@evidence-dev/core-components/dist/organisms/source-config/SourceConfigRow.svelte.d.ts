/** @typedef {typeof __propDef.props}  SourceConfigRowProps */
/** @typedef {typeof __propDef.events}  SourceConfigRowEvents */
/** @typedef {typeof __propDef.slots}  SourceConfigRowSlots */
export default class SourceConfigRow extends SvelteComponent<{
    source: any;
    sources: any;
    availableSourcePlugins: any;
    startOpen?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SourceConfigRowProps = typeof __propDef.props;
export type SourceConfigRowEvents = typeof __propDef.events;
export type SourceConfigRowSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        source: any;
        sources: any;
        availableSourcePlugins: any;
        startOpen?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
