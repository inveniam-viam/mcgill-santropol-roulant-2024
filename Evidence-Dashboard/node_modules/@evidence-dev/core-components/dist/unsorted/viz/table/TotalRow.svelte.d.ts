/** @typedef {typeof __propDef.props}  TotalRowProps */
/** @typedef {typeof __propDef.events}  TotalRowEvents */
/** @typedef {typeof __propDef.slots}  TotalRowSlots */
export default class TotalRow extends SvelteComponent<{
    data?: any;
    fontColor?: any;
    compact?: any;
    rowNumbers?: any;
    columnSummary?: any;
    groupType?: any;
    finalColumnOrder?: any;
    rowColor?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TotalRowProps = typeof __propDef.props;
export type TotalRowEvents = typeof __propDef.events;
export type TotalRowSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        data?: any;
        fontColor?: any;
        compact?: any;
        rowNumbers?: any;
        columnSummary?: any;
        groupType?: any;
        finalColumnOrder?: any;
        rowColor?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
