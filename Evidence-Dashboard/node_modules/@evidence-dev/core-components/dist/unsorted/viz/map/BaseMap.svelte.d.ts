export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  BaseMapProps */
/** @typedef {typeof __propDef.events}  BaseMapEvents */
/** @typedef {typeof __propDef.slots}  BaseMapSlots */
export default class BaseMap extends SvelteComponent<{
    title?: string;
    height?: number;
    startingLat?: number;
    startingLong?: number;
    startingZoom?: number;
    basemap?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type BaseMapProps = typeof __propDef.props;
export type BaseMapEvents = typeof __propDef.events;
export type BaseMapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        height?: number;
        startingLat?: number | undefined;
        startingLong?: number | undefined;
        startingZoom?: number | undefined;
        basemap?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
