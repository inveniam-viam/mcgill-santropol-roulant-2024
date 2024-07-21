export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  CalendarHeatmapProps */
/** @typedef {typeof __propDef.events}  CalendarHeatmapEvents */
/** @typedef {typeof __propDef.slots}  CalendarHeatmapSlots */
export default class CalendarHeatmap extends SvelteComponent<{
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
export type CalendarHeatmapProps = typeof __propDef.props;
export type CalendarHeatmapEvents = typeof __propDef.events;
export type CalendarHeatmapSlots = typeof __propDef.slots;
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
