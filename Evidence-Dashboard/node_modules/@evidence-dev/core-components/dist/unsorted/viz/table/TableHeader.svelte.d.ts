/** @typedef {typeof __propDef.props}  TableHeaderProps */
/** @typedef {typeof __propDef.events}  TableHeaderEvents */
/** @typedef {typeof __propDef.slots}  TableHeaderSlots */
export default class TableHeader extends SvelteComponent<{
    sort?: any;
    compact?: any;
    rowNumbers?: any;
    columnSummary?: any;
    finalColumnOrder?: any;
    headerColor?: any;
    headerFontColor?: any;
    sortable?: any;
    formatColumnTitles?: any;
    sortBy?: any;
    wrapTitles?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TableHeaderProps = typeof __propDef.props;
export type TableHeaderEvents = typeof __propDef.events;
export type TableHeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        sort?: any;
        compact?: any;
        rowNumbers?: any;
        columnSummary?: any;
        finalColumnOrder?: any;
        headerColor?: any;
        headerFontColor?: any;
        sortable?: any;
        formatColumnTitles?: any;
        sortBy?: any;
        wrapTitles?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
