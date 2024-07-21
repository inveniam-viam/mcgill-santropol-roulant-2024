export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  EChartsMapProps */
/** @typedef {typeof __propDef.events}  EChartsMapEvents */
/** @typedef {typeof __propDef.slots}  EChartsMapSlots */
export default class EChartsMap extends SvelteComponent<{
    [x: string]: any;
    data: any;
    emptySet?: "warn" | "error" | "pass";
    emptyMessage?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type EChartsMapProps = typeof __propDef.props;
export type EChartsMapEvents = typeof __propDef.events;
export type EChartsMapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        emptySet?: 'pass' | 'warn' | 'error';
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
