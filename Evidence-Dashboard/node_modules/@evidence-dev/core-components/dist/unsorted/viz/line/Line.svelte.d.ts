export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  LineProps */
/** @typedef {typeof __propDef.events}  LineEvents */
/** @typedef {typeof __propDef.slots}  LineSlots */
export default class Line extends SvelteComponent<{
    name?: any;
    options?: any;
    step?: boolean;
    y?: any;
    y2?: any;
    series?: any;
    lineColor?: any;
    markers?: boolean;
    markerShape?: string;
    markerSize?: number;
    handleMissing?: string;
    stepPosition?: "start" | "end" | "middle";
    labels?: boolean;
    labelSize?: number;
    labelPosition?: string;
    labelColor?: any;
    labelFmt?: any;
    showAllLabels?: boolean;
    yLabelFmt?: any;
    y2LabelFmt?: any;
    y2SeriesType?: any;
    lineWidth?: number;
    lineType?: string;
    lineOpacity?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LineProps = typeof __propDef.props;
export type LineEvents = typeof __propDef.events;
export type LineSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        name?: any;
        options?: any;
        step?: boolean;
        y?: any;
        y2?: any;
        series?: any;
        lineColor?: any;
        markers?: boolean;
        markerShape?: string;
        markerSize?: number;
        handleMissing?: string;
        stepPosition?: 'start' | 'middle' | 'end';
        labels?: boolean;
        labelSize?: number;
        labelPosition?: string;
        labelColor?: any;
        labelFmt?: any;
        showAllLabels?: boolean;
        yLabelFmt?: any;
        y2LabelFmt?: any;
        y2SeriesType?: any;
        lineWidth?: number;
        lineType?: string;
        lineOpacity?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
