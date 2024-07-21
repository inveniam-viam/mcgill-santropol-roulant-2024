export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  HeatmapProps */
/** @typedef {typeof __propDef.events}  HeatmapEvents */
/** @typedef {typeof __propDef.slots}  HeatmapSlots */
export default class Heatmap extends SvelteComponent<{
    value: any;
    data: any;
    queryID: any;
    x: any;
    y: any;
    valueFmt: any;
    title?: any;
    filter?: boolean;
    max?: any;
    min?: any;
    legend?: boolean;
    colorPalette?: any;
    echartsOptions?: any;
    seriesOptions?: any;
    renderer?: any;
    connectGroup?: any;
    printEchartsConfig?: boolean;
    subtitle?: any;
    xTickMarks?: boolean;
    yTickMarks?: boolean;
    chartAreaHeight?: any;
    xSort?: any;
    xSortOrder?: string;
    ySort?: any;
    ySortOrder?: string;
    valueLabels?: boolean;
    mobileValueLabels?: boolean;
    xAxisPosition?: string;
    borders?: boolean;
    xLabelRotation?: any;
    leftPadding?: number;
    rightPadding?: number;
    cellHeight?: number;
    nullsZero?: boolean;
    zeroDisplay?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HeatmapProps = typeof __propDef.props;
export type HeatmapEvents = typeof __propDef.events;
export type HeatmapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        data: any;
        queryID: any;
        x: any;
        y: any;
        valueFmt: any;
        title?: any;
        filter?: boolean;
        max?: any;
        min?: any;
        legend?: boolean;
        colorPalette?: any;
        echartsOptions?: any;
        seriesOptions?: any;
        renderer?: any;
        connectGroup?: any;
        printEchartsConfig?: boolean;
        subtitle?: any;
        xTickMarks?: boolean;
        yTickMarks?: boolean;
        chartAreaHeight?: any;
        xSort?: any;
        xSortOrder?: string;
        ySort?: any;
        ySortOrder?: string;
        valueLabels?: boolean;
        mobileValueLabels?: boolean;
        xAxisPosition?: string;
        borders?: boolean;
        xLabelRotation?: any;
        leftPadding?: number;
        rightPadding?: number;
        cellHeight?: number;
        nullsZero?: boolean;
        zeroDisplay?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
