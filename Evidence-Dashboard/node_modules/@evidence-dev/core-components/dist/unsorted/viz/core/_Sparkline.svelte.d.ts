/** @typedef {typeof __propDef.props}  SparklineProps */
/** @typedef {typeof __propDef.events}  SparklineEvents */
/** @typedef {typeof __propDef.slots}  SparklineSlots */
export default class Sparkline extends SvelteComponent<{
    type?: string;
    color?: any;
    data?: any;
    height?: number;
    width?: number;
    interactive?: boolean;
    config?: {};
    connectGroup?: any;
    yScale?: boolean;
    dateCol?: any;
    valueCol?: any;
    valueFmt?: any;
    dateFmt?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SparklineProps = typeof __propDef.props;
export type SparklineEvents = typeof __propDef.events;
export type SparklineSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        type?: string;
        color?: any;
        data?: any;
        height?: number;
        width?: number;
        interactive?: boolean;
        config?: {};
        connectGroup?: any;
        yScale?: boolean;
        dateCol?: any;
        valueCol?: any;
        valueFmt?: any;
        dateFmt?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
