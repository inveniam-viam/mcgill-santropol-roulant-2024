export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  SankeyDiagramProps */
/** @typedef {typeof __propDef.events}  SankeyDiagramEvents */
/** @typedef {typeof __propDef.slots}  SankeyDiagramSlots */
export default class SankeyDiagram extends SvelteComponent<{
    [x: string]: any;
    data: any;
    emptySet?: "warn" | "error" | "pass";
    emptyMessage?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SankeyDiagramProps = typeof __propDef.props;
export type SankeyDiagramEvents = typeof __propDef.events;
export type SankeyDiagramSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        emptySet?: 'pass' | 'warn' | 'error';
        emptyMessage?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
