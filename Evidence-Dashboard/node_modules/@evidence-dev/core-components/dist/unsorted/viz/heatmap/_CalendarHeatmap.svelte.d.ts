export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  CalendarHeatmapProps */
/** @typedef {typeof __propDef.events}  CalendarHeatmapEvents */
/** @typedef {typeof __propDef.slots}  CalendarHeatmapSlots */
export default class CalendarHeatmap extends SvelteComponent<{
    value: any;
    data: any;
    date: any;
    queryID: any;
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
    chartAreaHeight?: any;
    valueFmt?: any;
    yearLabel?: boolean;
    monthLabel?: boolean;
    dayLabel?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CalendarHeatmapProps = typeof __propDef.props;
export type CalendarHeatmapEvents = typeof __propDef.events;
export type CalendarHeatmapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        data: any;
        date: any;
        queryID: any;
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
        chartAreaHeight?: any;
        valueFmt?: any;
        yearLabel?: boolean;
        monthLabel?: boolean;
        dayLabel?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
