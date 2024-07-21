export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ChartProps */
/** @typedef {typeof __propDef.events}  ChartEvents */
/** @typedef {typeof __propDef.slots}  ChartSlots */
export default class Chart extends SvelteComponent<{
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
export type ChartProps = typeof __propDef.props;
export type ChartEvents = typeof __propDef.events;
export type ChartSlots = typeof __propDef.slots;
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
