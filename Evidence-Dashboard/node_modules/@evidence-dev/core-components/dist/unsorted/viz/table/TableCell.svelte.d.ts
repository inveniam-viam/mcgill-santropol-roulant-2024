/** @typedef {typeof __propDef.props}  TableCellProps */
/** @typedef {typeof __propDef.events}  TableCellEvents */
/** @typedef {typeof __propDef.slots}  TableCellSlots */
export default class TableCell extends SvelteComponent<{
    [x: string]: any;
    height?: any;
    align?: any;
    show?: boolean;
    width?: any;
    wrap?: any;
    dataType?: any;
    verticalAlign?: string;
    rowSpan?: number;
    colSpan?: number;
    cellColor?: any;
    fontColor?: any;
    topBorder?: any;
    paddingLeft?: any;
    borderBottom?: any;
    compact?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TableCellProps = typeof __propDef.props;
export type TableCellEvents = typeof __propDef.events;
export type TableCellSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        height?: any;
        align?: any;
        show?: boolean;
        width?: any;
        wrap?: any;
        dataType?: any;
        verticalAlign?: string;
        rowSpan?: number;
        colSpan?: number;
        cellColor?: any;
        fontColor?: any;
        topBorder?: any;
        paddingLeft?: any;
        borderBottom?: any;
        compact?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
