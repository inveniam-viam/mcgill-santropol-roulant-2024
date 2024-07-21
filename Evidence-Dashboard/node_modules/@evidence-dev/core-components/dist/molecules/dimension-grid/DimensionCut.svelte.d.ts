/** @typedef {typeof __propDef.props}  DimensionCutProps */
/** @typedef {typeof __propDef.events}  DimensionCutEvents */
/** @typedef {typeof __propDef.slots}  DimensionCutSlots */
export default class DimensionCut extends SvelteComponent<{
    dimension: any;
    data: any;
    metric: any;
    metricLabel: any;
    limit: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DimensionCutProps = typeof __propDef.props;
export type DimensionCutEvents = typeof __propDef.events;
export type DimensionCutSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        dimension: any;
        data: any;
        metric: any;
        metricLabel: any;
        limit: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
