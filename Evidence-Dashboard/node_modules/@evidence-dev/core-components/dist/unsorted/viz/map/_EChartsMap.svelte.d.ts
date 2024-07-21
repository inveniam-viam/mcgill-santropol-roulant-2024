export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  EChartsMapProps */
/** @typedef {typeof __propDef.events}  EChartsMapEvents */
/** @typedef {typeof __propDef.slots}  EChartsMapSlots */
export default class EChartsMap extends SvelteComponent<{
    [x: string]: any;
    data: any;
    height?: string;
    width?: string;
    queryID?: any;
    config?: any;
    echartsOptions?: any;
    seriesOptions?: any;
    extraHeight?: number;
    renderer?: any;
    connectGroup?: any;
    printEchartsConfig?: boolean;
    hasLink?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EChartsMapProps = typeof __propDef.props;
export type EChartsMapEvents = typeof __propDef.events;
export type EChartsMapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        height?: string;
        width?: string;
        queryID?: any;
        config?: any;
        echartsOptions?: any;
        seriesOptions?: any;
        extraHeight?: number;
        renderer?: any;
        connectGroup?: any;
        printEchartsConfig?: boolean;
        hasLink?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
