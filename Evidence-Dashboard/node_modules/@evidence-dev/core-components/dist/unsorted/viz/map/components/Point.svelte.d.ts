/** @typedef {typeof __propDef.props}  PointProps */
/** @typedef {typeof __propDef.events}  PointEvents */
/** @typedef {typeof __propDef.slots}  PointSlots */
export default class Point extends SvelteComponent<{
    onclick?: Function;
    name?: any;
    link?: string;
    tooltip?: any[];
    selectedOptions?: any;
    options?: any;
    item?: any;
    map?: import("../EvidenceMap.js").EvidenceMap;
    setInput?: Function;
    unsetInput?: Function;
    tooltipOptions?: any;
    tooltipType?: string;
    showTooltip?: boolean;
    coords?: import("leaflet").LatLngExpression;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PointProps = typeof __propDef.props;
export type PointEvents = typeof __propDef.events;
export type PointSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        onclick?: Function | undefined;
        name?: any;
        link?: string | undefined;
        tooltip?: Array<object> | undefined;
        selectedOptions?: object | undefined;
        options?: object | undefined;
        item?: object | undefined;
        map?: import("../EvidenceMap.js").EvidenceMap;
        setInput?: Function | undefined;
        unsetInput?: Function | undefined;
        tooltipOptions?: object | undefined;
        tooltipType?: string | undefined;
        showTooltip?: boolean | undefined;
        coords?: import('leaflet').LatLngExpression | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
