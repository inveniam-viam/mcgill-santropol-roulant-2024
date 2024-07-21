/** @typedef {typeof __propDef.props}  BigValueProps */
/** @typedef {typeof __propDef.events}  BigValueEvents */
/** @typedef {typeof __propDef.slots}  BigValueSlots */
export default class BigValue extends SvelteComponent<{
    data: any;
    value?: any;
    title?: any;
    link?: string;
    fmt?: any;
    downIsGood?: boolean;
    neutralMin?: number;
    neutralMax?: number;
    maxWidth?: string;
    connectGroup?: any;
    sparkline?: any;
    comparison?: any;
    comparisonDelta?: boolean;
    sparklineType?: string;
    sparklineColor?: any;
    sparklineValueFmt?: any;
    sparklineDateFmt?: any;
    sparklineYScale?: boolean;
    comparisonFmt?: any;
    comparisonTitle?: any;
    minWidth?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BigValueProps = typeof __propDef.props;
export type BigValueEvents = typeof __propDef.events;
export type BigValueSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        data: any;
        value?: any;
        title?: any;
        link?: string | null;
        fmt?: any;
        downIsGood?: boolean;
        neutralMin?: number;
        neutralMax?: number;
        maxWidth?: string;
        connectGroup?: any;
        sparkline?: any;
        comparison?: any;
        comparisonDelta?: boolean;
        sparklineType?: string;
        sparklineColor?: any;
        sparklineValueFmt?: any;
        sparklineDateFmt?: any;
        sparklineYScale?: boolean;
        comparisonFmt?: any;
        comparisonTitle?: any;
        minWidth?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
