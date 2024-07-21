export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  SankeyDiagramProps */
/** @typedef {typeof __propDef.events}  SankeyDiagramEvents */
/** @typedef {typeof __propDef.slots}  SankeyDiagramSlots */
export default class SankeyDiagram extends SvelteComponent<{
    depthOverride: any;
    title?: any;
    data?: any;
    sort?: boolean;
    colorPalette?: any;
    echartsOptions?: any;
    printEchartsConfig?: boolean;
    subtitle?: any;
    chartAreaHeight?: string;
    outlineColor?: any;
    outlineWidth?: any;
    orient?: string;
    nodeWidth?: number;
    nodeGap?: number;
    nodeAlign?: string;
    valueCol?: string;
    valueFmt?: any;
    percentFmt?: any;
    sourceCol?: string;
    targetCol?: string;
    percentCol?: any;
    nodeLabels?: string;
    linkLabels?: any;
    linkColor?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SankeyDiagramProps = typeof __propDef.props;
export type SankeyDiagramEvents = typeof __propDef.events;
export type SankeyDiagramSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        depthOverride: any;
        title?: any;
        data?: any;
        sort?: boolean;
        colorPalette?: any;
        echartsOptions?: any;
        printEchartsConfig?: boolean;
        subtitle?: any;
        chartAreaHeight?: string;
        outlineColor?: any;
        outlineWidth?: any;
        orient?: string;
        nodeWidth?: number;
        nodeGap?: number;
        nodeAlign?: string;
        valueCol?: string;
        valueFmt?: any;
        percentFmt?: any;
        sourceCol?: string;
        targetCol?: string;
        percentCol?: any;
        nodeLabels?: string;
        linkLabels?: any;
        linkColor?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
