export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  FlowchartProps */
/** @typedef {typeof __propDef.events}  FlowchartEvents */
/** @typedef {typeof __propDef.slots}  FlowchartSlots */
export default class Flowchart extends SvelteComponent<{
    chart?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FlowchartProps = typeof __propDef.props;
export type FlowchartEvents = typeof __propDef.events;
export type FlowchartSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        chart?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
