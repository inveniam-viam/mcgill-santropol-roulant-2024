export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  EmptyChartProps */
/** @typedef {typeof __propDef.events}  EmptyChartEvents */
/** @typedef {typeof __propDef.slots}  EmptyChartSlots */
export default class EmptyChart extends SvelteComponent<{
    chartType?: string;
    isInitial?: boolean;
    emptySet?: "warn" | "error" | "pass";
    emptyMessage?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EmptyChartProps = typeof __propDef.props;
export type EmptyChartEvents = typeof __propDef.events;
export type EmptyChartSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        chartType?: string;
        isInitial?: boolean;
        emptySet?: "pass" | "warn" | "error";
        emptyMessage?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
