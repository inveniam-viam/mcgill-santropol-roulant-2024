/** @typedef {typeof __propDef.props}  SourceConfigProps */
/** @typedef {typeof __propDef.events}  SourceConfigEvents */
/** @typedef {typeof __propDef.slots}  SourceConfigSlots */
export default class SourceConfig extends SvelteComponent<{
    sources?: any[];
    availableSourcePlugins?: {};
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SourceConfigProps = typeof __propDef.props;
export type SourceConfigEvents = typeof __propDef.events;
export type SourceConfigSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        sources?: any[];
        availableSourcePlugins?: {};
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
