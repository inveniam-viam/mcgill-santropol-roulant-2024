export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ColumnProps */
/** @typedef {typeof __propDef.events}  ColumnEvents */
/** @typedef {typeof __propDef.slots}  ColumnSlots */
export default class Column extends SvelteComponent<{
    id: any;
    title?: any;
    height?: any;
    align?: string;
    alt?: any;
    width?: any;
    fmt?: any;
    wrap?: boolean;
    chip?: boolean;
    downIsGood?: boolean;
    showValue?: boolean;
    neutralMin?: number;
    neutralMax?: number;
    wrapTitle?: boolean;
    contentType?: any;
    openInNewTab?: boolean;
    linkLabel?: any;
    fmtColumn?: any;
    totalAgg?: any;
    totalFmt?: any;
    subtotalFmt?: any;
    weightCol?: any;
    deltaSymbol?: boolean;
    colorMax?: any;
    colorMin?: any;
    scaleColor?: string;
    scaleColumn?: any;
    colGroup?: any;
    colorMid?: any;
    colorBreakpoints?: any;
    redNegatives?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ColumnProps = typeof __propDef.props;
export type ColumnEvents = typeof __propDef.events;
export type ColumnSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        id: any;
        title?: any;
        height?: any;
        align?: string;
        alt?: any;
        width?: any;
        fmt?: any;
        wrap?: boolean;
        chip?: boolean;
        downIsGood?: boolean;
        showValue?: boolean;
        neutralMin?: number;
        neutralMax?: number;
        wrapTitle?: boolean;
        contentType?: any;
        openInNewTab?: boolean;
        linkLabel?: any;
        fmtColumn?: any;
        totalAgg?: any;
        totalFmt?: any;
        subtotalFmt?: any;
        weightCol?: any;
        deltaSymbol?: boolean;
        colorMax?: any;
        colorMin?: any;
        scaleColor?: string;
        scaleColumn?: any;
        colGroup?: any;
        colorMid?: any;
        colorBreakpoints?: any;
        redNegatives?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
