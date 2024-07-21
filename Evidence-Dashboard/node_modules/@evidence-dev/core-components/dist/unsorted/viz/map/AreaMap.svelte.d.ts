export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  AreaMapProps */
/** @typedef {typeof __propDef.events}  AreaMapEvents */
/** @typedef {typeof __propDef.slots}  AreaMapSlots */
export default class AreaMap extends SvelteComponent<{
    [x: string]: any;
    data: any;
    title?: string;
    height?: number;
    geoId?: string;
    startingLat?: number;
    startingLong?: number;
    startingZoom?: number;
    basemap?: string;
    geoJsonUrl?: string;
    areaCol?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AreaMapProps = typeof __propDef.props;
export type AreaMapEvents = typeof __propDef.events;
export type AreaMapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        title?: string | undefined;
        height?: number;
        geoId?: string | undefined;
        startingLat?: number;
        startingLong?: number;
        startingZoom?: number;
        basemap?: string;
        geoJsonUrl?: string;
        areaCol?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
