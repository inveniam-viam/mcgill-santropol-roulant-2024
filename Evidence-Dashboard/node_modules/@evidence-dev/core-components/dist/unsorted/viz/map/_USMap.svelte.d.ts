export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  UsMapProps */
/** @typedef {typeof __propDef.events}  UsMapEvents */
/** @typedef {typeof __propDef.slots}  UsMapSlots */
export default class UsMap extends SvelteComponent<{
    value?: any;
    title?: any;
    data?: any;
    state?: any;
    filter?: boolean;
    link?: any;
    max?: any;
    min?: any;
    fmt?: any;
    legend?: boolean;
    queryID?: any;
    colorPalette?: any;
    echartsOptions?: any;
    seriesOptions?: any;
    renderer?: any;
    connectGroup?: any;
    printEchartsConfig?: boolean;
    subtitle?: any;
    colorScale?: string;
    abbreviations?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UsMapProps = typeof __propDef.props;
export type UsMapEvents = typeof __propDef.events;
export type UsMapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value?: any;
        title?: any;
        data?: any;
        state?: any;
        filter?: boolean;
        link?: any;
        max?: any;
        min?: any;
        fmt?: any;
        legend?: boolean;
        queryID?: any;
        colorPalette?: any;
        echartsOptions?: any;
        seriesOptions?: any;
        renderer?: any;
        connectGroup?: any;
        printEchartsConfig?: boolean;
        subtitle?: any;
        colorScale?: string;
        abbreviations?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
