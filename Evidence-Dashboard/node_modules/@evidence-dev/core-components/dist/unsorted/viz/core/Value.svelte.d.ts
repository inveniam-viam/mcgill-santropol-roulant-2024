export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ValueProps */
/** @typedef {typeof __propDef.events}  ValueEvents */
/** @typedef {typeof __propDef.slots}  ValueSlots */
export default class Value extends SvelteComponent<{
    [x: string]: any;
    data: any;
    column: any;
    agg: any;
    emptySet?: "warn" | "error" | "pass";
    emptyMessage?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ValueProps = typeof __propDef.props;
export type ValueEvents = typeof __propDef.events;
export type ValueSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        column: any;
        agg: any;
        emptySet?: "pass" | "warn" | "error";
        emptyMessage?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
