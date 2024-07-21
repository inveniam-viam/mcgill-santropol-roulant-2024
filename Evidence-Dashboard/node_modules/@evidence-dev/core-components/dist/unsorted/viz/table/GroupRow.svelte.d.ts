/** @typedef {typeof __propDef.props}  GroupRowProps */
/** @typedef {typeof __propDef.events}  GroupRowEvents */
/** @typedef {typeof __propDef.slots}  GroupRowSlots */
export default class GroupRow extends SvelteComponent<{
    rowNumbers: any;
    columnSummary: any;
    groupName: any;
    currentGroupData: any;
    toggled: any;
    compact?: any;
    finalColumnOrder?: any;
    rowColor?: any;
    subtotals?: boolean;
}, {
    toggle: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GroupRowProps = typeof __propDef.props;
export type GroupRowEvents = typeof __propDef.events;
export type GroupRowSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        rowNumbers: any;
        columnSummary: any;
        groupName: any;
        currentGroupData: any;
        toggled: any;
        compact?: any;
        finalColumnOrder?: any;
        rowColor?: any;
        subtotals?: boolean;
    };
    events: {
        toggle: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
