export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  HeatmapProps */
/** @typedef {typeof __propDef.events}  HeatmapEvents */
/** @typedef {typeof __propDef.slots}  HeatmapSlots */
export default class Heatmap extends SvelteComponent<{
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
export type HeatmapProps = typeof __propDef.props;
export type HeatmapEvents = typeof __propDef.events;
export type HeatmapSlots = typeof __propDef.slots;
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
