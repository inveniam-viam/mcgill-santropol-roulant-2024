export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  BarProps */
/** @typedef {typeof __propDef.events}  BarEvents */
/** @typedef {typeof __propDef.slots}  BarSlots */
export default class Bar extends SvelteComponent<{
    type?: string;
    name?: any;
    options?: any;
    y?: any;
    y2?: any;
    series?: any;
    fillColor?: any;
    fillOpacity?: any;
    labels?: boolean;
    labelSize?: number;
    labelPosition?: any;
    labelColor?: any;
    labelFmt?: any;
    showAllLabels?: boolean;
    stackName?: any;
    outlineColor?: any;
    outlineWidth?: any;
    yLabelFmt?: any;
    y2LabelFmt?: any;
    y2SeriesType?: string;
    stackTotalLabel?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BarProps = typeof __propDef.props;
export type BarEvents = typeof __propDef.events;
export type BarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        type?: string;
        name?: any;
        options?: any;
        y?: any;
        y2?: any;
        series?: any;
        fillColor?: any;
        fillOpacity?: any;
        labels?: boolean;
        labelSize?: number;
        labelPosition?: any;
        labelColor?: any;
        labelFmt?: any;
        showAllLabels?: boolean;
        stackName?: any;
        outlineColor?: any;
        outlineWidth?: any;
        yLabelFmt?: any;
        y2LabelFmt?: any;
        y2SeriesType?: string;
        stackTotalLabel?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
