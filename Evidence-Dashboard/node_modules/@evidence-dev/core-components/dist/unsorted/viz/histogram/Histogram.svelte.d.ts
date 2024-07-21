export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  HistogramProps */
/** @typedef {typeof __propDef.events}  HistogramEvents */
/** @typedef {typeof __propDef.slots}  HistogramSlots */
export default class Histogram extends SvelteComponent<{
    xFmt: any;
    title?: any;
    data?: any;
    legend?: boolean;
    x?: any;
    emptySet?: any;
    emptyMessage?: any;
    colorPalette?: any;
    echartsOptions?: any;
    seriesOptions?: any;
    renderer?: any;
    connectGroup?: any;
    printEchartsConfig?: boolean;
    subtitle?: any;
    xAxisTitle?: any;
    xBaseline?: any;
    xTickMarks?: any;
    xGridlines?: any;
    xAxisLabels?: any;
    yAxisTitle?: any;
    yBaseline?: any;
    yTickMarks?: any;
    yGridlines?: any;
    yAxisLabels?: any;
    yMin?: number;
    yMax?: any;
    chartAreaHeight?: any;
    fillColor?: any;
    fillOpacity?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type HistogramProps = typeof __propDef.props;
export type HistogramEvents = typeof __propDef.events;
export type HistogramSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        xFmt: any;
        title?: any;
        data?: any;
        legend?: boolean;
        x?: any;
        emptySet?: any;
        emptyMessage?: any;
        colorPalette?: any;
        echartsOptions?: any;
        seriesOptions?: any;
        renderer?: any;
        connectGroup?: any;
        printEchartsConfig?: boolean;
        subtitle?: any;
        xAxisTitle?: any;
        xBaseline?: any;
        xTickMarks?: any;
        xGridlines?: any;
        xAxisLabels?: any;
        yAxisTitle?: any;
        yBaseline?: any;
        yTickMarks?: any;
        yGridlines?: any;
        yAxisLabels?: any;
        yMin?: number;
        yMax?: any;
        chartAreaHeight?: any;
        fillColor?: any;
        fillOpacity?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
