export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  PointMapProps */
/** @typedef {typeof __propDef.events}  PointMapEvents */
/** @typedef {typeof __propDef.slots}  PointMapSlots */
export default class PointMap extends SvelteComponent<{
    [x: string]: any;
    data: any;
    title?: string;
    height?: number;
    long?: string;
    startingLat?: number;
    startingLong?: number;
    startingZoom?: number;
    basemap?: string;
    lat?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PointMapProps = typeof __propDef.props;
export type PointMapEvents = typeof __propDef.events;
export type PointMapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        title?: string | undefined;
        height?: number;
        long?: string | undefined;
        startingLat?: number;
        startingLong?: number;
        startingZoom?: number;
        basemap?: string;
        lat?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
