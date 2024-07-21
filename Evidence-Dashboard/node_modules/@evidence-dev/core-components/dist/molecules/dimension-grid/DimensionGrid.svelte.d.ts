export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  DimensionGridProps */
/** @typedef {typeof __propDef.events}  DimensionGridEvents */
/** @typedef {typeof __propDef.slots}  DimensionGridSlots */
export default class DimensionGrid extends SvelteComponent<{
    data: any;
    name: string;
    metric?: string;
    metricLabel?: string;
    limit?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DimensionGridProps = typeof __propDef.props;
export type DimensionGridEvents = typeof __propDef.events;
export type DimensionGridSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        data: any;
        name: string;
        metric?: string;
        metricLabel?: string;
        limit?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
