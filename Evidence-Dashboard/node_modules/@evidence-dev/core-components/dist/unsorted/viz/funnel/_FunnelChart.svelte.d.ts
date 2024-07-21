export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  FunnelChartProps */
/** @typedef {typeof __propDef.events}  FunnelChartEvents */
/** @typedef {typeof __propDef.slots}  FunnelChartSlots */
export default class FunnelChart extends SvelteComponent<{
    title?: any;
    data?: any;
    legend?: boolean;
    colorPalette?: any;
    echartsOptions?: any;
    seriesOptions?: any;
    renderer?: any;
    connectGroup?: any;
    printEchartsConfig?: boolean;
    subtitle?: any;
    labelPosition?: string;
    outlineColor?: any;
    outlineWidth?: any;
    funnelAlign?: string;
    valueCol?: any;
    valueFmt?: any;
    nameCol?: any;
    funnelSort?: string;
    showPercent?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FunnelChartProps = typeof __propDef.props;
export type FunnelChartEvents = typeof __propDef.events;
export type FunnelChartSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: any;
        data?: any;
        legend?: boolean;
        colorPalette?: any;
        echartsOptions?: any;
        seriesOptions?: any;
        renderer?: any;
        connectGroup?: any;
        printEchartsConfig?: boolean;
        subtitle?: any;
        labelPosition?: string;
        outlineColor?: any;
        outlineWidth?: any;
        funnelAlign?: string;
        valueCol?: any;
        valueFmt?: any;
        nameCol?: any;
        funnelSort?: string;
        showPercent?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
