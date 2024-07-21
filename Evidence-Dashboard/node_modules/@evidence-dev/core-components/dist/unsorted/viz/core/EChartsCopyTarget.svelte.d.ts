export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  EChartsCopyTargetProps */
/** @typedef {typeof __propDef.events}  EChartsCopyTargetEvents */
/** @typedef {typeof __propDef.slots}  EChartsCopyTargetSlots */
export default class EChartsCopyTarget extends SvelteComponent<{
    height?: string;
    width?: string;
    config?: any;
    copying?: boolean;
    printing?: boolean;
    echartsOptions?: any;
    seriesOptions?: any;
    seriesColors?: any;
    isMap?: boolean;
    extraHeight?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EChartsCopyTargetProps = typeof __propDef.props;
export type EChartsCopyTargetEvents = typeof __propDef.events;
export type EChartsCopyTargetSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        height?: string;
        width?: string;
        config?: any;
        copying?: boolean;
        printing?: boolean;
        echartsOptions?: any;
        seriesOptions?: any;
        seriesColors?: any;
        isMap?: boolean;
        extraHeight?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
