export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  LineBreakProps */
/** @typedef {typeof __propDef.events}  LineBreakEvents */
/** @typedef {typeof __propDef.slots}  LineBreakSlots */
export default class LineBreak extends SvelteComponent<{
    lines?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LineBreakProps = typeof __propDef.props;
export type LineBreakEvents = typeof __propDef.events;
export type LineBreakSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        lines?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
