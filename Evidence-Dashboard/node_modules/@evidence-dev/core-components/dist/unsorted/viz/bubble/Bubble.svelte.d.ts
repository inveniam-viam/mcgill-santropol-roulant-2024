export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  BubbleProps */
/** @typedef {typeof __propDef.events}  BubbleEvents */
/** @typedef {typeof __propDef.slots}  BubbleSlots */
export default class Bubble extends SvelteComponent<{
    tooltipTitle: any;
    size?: any;
    name?: any;
    options?: any;
    y?: any;
    series?: any;
    fillColor?: any;
    outlineColor?: any;
    outlineWidth?: any;
    opacity?: number;
    shape?: any;
    scaleTo?: number;
    useTooltip?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BubbleProps = typeof __propDef.props;
export type BubbleEvents = typeof __propDef.events;
export type BubbleSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        tooltipTitle: any;
        size?: any;
        name?: any;
        options?: any;
        y?: any;
        series?: any;
        fillColor?: any;
        outlineColor?: any;
        outlineWidth?: any;
        opacity?: number;
        shape?: any;
        scaleTo?: number;
        useTooltip?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
