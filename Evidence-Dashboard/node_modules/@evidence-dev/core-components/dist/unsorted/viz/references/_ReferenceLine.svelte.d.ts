export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ReferenceLineProps */
/** @typedef {typeof __propDef.events}  ReferenceLineEvents */
/** @typedef {typeof __propDef.slots}  ReferenceLineSlots */
export default class ReferenceLine extends SvelteComponent<{
    symbol?: string;
    color?: any;
    data?: any;
    label?: any;
    x?: any;
    y?: any;
    y2?: any;
    lineColor?: any;
    labelPosition?: string;
    labelColor?: any;
    lineWidth?: any;
    lineType?: string;
    x2?: any;
    labelTextOutline?: boolean;
    labelBackground?: boolean;
    hideValue?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ReferenceLineProps = typeof __propDef.props;
export type ReferenceLineEvents = typeof __propDef.events;
export type ReferenceLineSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        symbol?: string;
        color?: any;
        data?: any;
        label?: any;
        x?: any;
        y?: any;
        y2?: any;
        lineColor?: any;
        labelPosition?: string;
        labelColor?: any;
        lineWidth?: any;
        lineType?: string;
        x2?: any;
        labelTextOutline?: boolean;
        labelBackground?: boolean;
        hideValue?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
