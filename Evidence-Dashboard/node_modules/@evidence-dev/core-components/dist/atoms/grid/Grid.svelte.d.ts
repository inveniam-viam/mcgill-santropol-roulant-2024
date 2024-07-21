export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  GridProps */
/** @typedef {typeof __propDef.events}  GridEvents */
/** @typedef {typeof __propDef.slots}  GridSlots */
export default class Grid extends SvelteComponent<{
    cols?: 1 | 5 | 3 | 2 | 4 | 6;
    gapSize?: "none" | "sm" | "md" | "lg";
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type GridProps = typeof __propDef.props;
export type GridEvents = typeof __propDef.events;
export type GridSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        cols?: 1 | 2 | 3 | 4 | 5 | 6;
        gapSize?: "none" | "sm" | "md" | "lg";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
