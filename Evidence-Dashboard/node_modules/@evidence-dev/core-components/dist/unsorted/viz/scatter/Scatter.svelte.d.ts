export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ScatterProps */
/** @typedef {typeof __propDef.events}  ScatterEvents */
/** @typedef {typeof __propDef.slots}  ScatterSlots */
export default class Scatter extends SvelteComponent<{
    tooltipTitle: any;
    name?: any;
    options?: any;
    y?: any;
    series?: any;
    fillColor?: any;
    outlineColor?: any;
    outlineWidth?: any;
    opacity?: number;
    pointSize?: number;
    shape?: string;
    useTooltip?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ScatterProps = typeof __propDef.props;
export type ScatterEvents = typeof __propDef.events;
export type ScatterSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        tooltipTitle: any;
        name?: any;
        options?: any;
        y?: any;
        series?: any;
        fillColor?: any;
        outlineColor?: any;
        outlineWidth?: any;
        opacity?: number;
        pointSize?: number;
        shape?: string;
        useTooltip?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
