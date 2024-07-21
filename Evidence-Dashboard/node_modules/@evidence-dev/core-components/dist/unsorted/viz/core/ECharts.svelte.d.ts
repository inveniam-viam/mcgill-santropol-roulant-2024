export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  EChartsProps */
/** @typedef {typeof __propDef.events}  EChartsEvents */
/** @typedef {typeof __propDef.slots}  EChartsSlots */
export default class ECharts extends SvelteComponent<{
    [x: string]: any;
    data: any;
    printEchartsConfig: any;
    height?: string;
    width?: string;
    queryID?: any;
    config?: any;
    echartsOptions?: any;
    seriesOptions?: any;
    seriesColors?: any;
    evidenceChartTitle?: any;
    renderer?: any;
    connectGroup?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EChartsProps = typeof __propDef.props;
export type EChartsEvents = typeof __propDef.events;
export type EChartsSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        printEchartsConfig: any;
        height?: string;
        width?: string;
        queryID?: any;
        config?: any;
        echartsOptions?: any;
        seriesOptions?: any;
        seriesColors?: any;
        evidenceChartTitle?: any;
        renderer?: any;
        connectGroup?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
