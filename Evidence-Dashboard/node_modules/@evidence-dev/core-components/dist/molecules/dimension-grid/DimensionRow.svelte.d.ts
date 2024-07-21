/** @typedef {typeof __propDef.props}  DimensionRowProps */
/** @typedef {typeof __propDef.events}  DimensionRowEvents */
/** @typedef {typeof __propDef.slots}  DimensionRowSlots */
export default class DimensionRow extends SvelteComponent<{
    row: any;
    value: any;
    selectedValue: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DimensionRowProps = typeof __propDef.props;
export type DimensionRowEvents = typeof __propDef.events;
export type DimensionRowSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        row: any;
        value: any;
        selectedValue: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
