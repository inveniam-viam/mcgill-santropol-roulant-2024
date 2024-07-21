export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  FunnelChartProps */
/** @typedef {typeof __propDef.events}  FunnelChartEvents */
/** @typedef {typeof __propDef.slots}  FunnelChartSlots */
export default class FunnelChart extends SvelteComponent<{
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
export type FunnelChartProps = typeof __propDef.props;
export type FunnelChartEvents = typeof __propDef.events;
export type FunnelChartSlots = typeof __propDef.slots;
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
