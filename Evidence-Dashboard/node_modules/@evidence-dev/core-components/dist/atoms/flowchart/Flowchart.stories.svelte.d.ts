/** @typedef {typeof __propDef.props}  FlowchartProps */
/** @typedef {typeof __propDef.events}  FlowchartEvents */
/** @typedef {typeof __propDef.slots}  FlowchartSlots */
export default class Flowchart extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FlowchartProps = typeof __propDef.props;
export type FlowchartEvents = typeof __propDef.events;
export type FlowchartSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
