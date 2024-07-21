/** @typedef {typeof __propDef.props}  MapAreaProps */
/** @typedef {typeof __propDef.events}  MapAreaEvents */
/** @typedef {typeof __propDef.slots}  MapAreaSlots */
export default class MapArea extends SvelteComponent<{
    onclick?: Function;
    name?: any;
    link?: string;
    tooltip?: any[];
    item?: any;
    map?: import("../EvidenceMap.js").EvidenceMap;
    feature?: any;
    areaOptions?: any;
    selectedAreaOptions?: any;
    setInput?: Function;
    unsetInput?: Function;
    tooltipOptions?: any;
    tooltipType?: string;
    showTooltip?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MapAreaProps = typeof __propDef.props;
export type MapAreaEvents = typeof __propDef.events;
export type MapAreaSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        onclick?: Function | undefined;
        name?: any;
        link?: string | undefined;
        tooltip?: Array<object> | undefined;
        item?: object | undefined;
        map?: import("../EvidenceMap.js").EvidenceMap;
        feature?: object | undefined;
        areaOptions?: object | undefined;
        selectedAreaOptions?: object | undefined;
        setInput?: Function | undefined;
        unsetInput?: Function | undefined;
        tooltipOptions?: object | undefined;
        tooltipType?: string | undefined;
        showTooltip?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
