/** @typedef {typeof __propDef.props}  TableRowProps */
/** @typedef {typeof __propDef.events}  TableRowEvents */
/** @typedef {typeof __propDef.slots}  TableRowSlots */
export default class TableRow extends SvelteComponent<{
    link?: any;
    rowSpan?: any;
    compact?: any;
    displayedData?: any;
    rowShading?: any;
    rowNumbers?: any;
    rowLines?: any;
    index?: any;
    columnSummary?: any;
    grouped?: boolean;
    groupType?: any;
    groupColumn?: any;
    groupNamePosition?: string;
    finalColumnOrder?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TableRowProps = typeof __propDef.props;
export type TableRowEvents = typeof __propDef.events;
export type TableRowSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        link?: any;
        rowSpan?: any;
        compact?: any;
        displayedData?: any;
        rowShading?: any;
        rowNumbers?: any;
        rowLines?: any;
        index?: any;
        columnSummary?: any;
        grouped?: boolean;
        groupType?: any;
        groupColumn?: any;
        groupNamePosition?: string;
        finalColumnOrder?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
