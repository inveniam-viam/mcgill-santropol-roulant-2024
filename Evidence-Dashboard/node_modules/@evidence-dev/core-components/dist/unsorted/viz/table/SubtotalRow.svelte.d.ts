/** @typedef {typeof __propDef.props}  SubtotalRowProps */
/** @typedef {typeof __propDef.events}  SubtotalRowEvents */
/** @typedef {typeof __propDef.slots}  SubtotalRowSlots */
export default class SubtotalRow extends SvelteComponent<{
    fontColor?: any;
    compact?: any;
    columnSummary?: any;
    groupType?: any;
    finalColumnOrder?: any;
    rowColor?: string;
    groupName?: any;
    currentGroupData?: any;
    groupBy?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SubtotalRowProps = typeof __propDef.props;
export type SubtotalRowEvents = typeof __propDef.events;
export type SubtotalRowSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        fontColor?: any;
        compact?: any;
        columnSummary?: any;
        groupType?: any;
        finalColumnOrder?: any;
        rowColor?: string;
        groupName?: any;
        currentGroupData?: any;
        groupBy?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
