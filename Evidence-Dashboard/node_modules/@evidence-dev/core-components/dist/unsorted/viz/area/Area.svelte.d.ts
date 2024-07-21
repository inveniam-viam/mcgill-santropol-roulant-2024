export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  AreaProps */
/** @typedef {typeof __propDef.events}  AreaEvents */
/** @typedef {typeof __propDef.slots}  AreaSlots */
export default class Area extends SvelteComponent<{
    line?: boolean;
    type?: string;
    name?: any;
    options?: any;
    step?: boolean;
    y?: any;
    series?: any;
    fillColor?: any;
    lineColor?: any;
    fillOpacity?: any;
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
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AreaProps = typeof __propDef.props;
export type AreaEvents = typeof __propDef.events;
export type AreaSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        line?: boolean;
        type?: string;
        name?: any;
        options?: any;
        step?: boolean;
        y?: any;
        series?: any;
        fillColor?: any;
        lineColor?: any;
        fillOpacity?: any;
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
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
