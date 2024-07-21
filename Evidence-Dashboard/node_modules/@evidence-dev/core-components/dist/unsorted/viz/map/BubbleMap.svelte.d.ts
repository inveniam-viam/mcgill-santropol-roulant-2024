export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  BubbleMapProps */
/** @typedef {typeof __propDef.events}  BubbleMapEvents */
/** @typedef {typeof __propDef.slots}  BubbleMapSlots */
export default class BubbleMap extends SvelteComponent<{
    [x: string]: any;
    data: any;
    title?: string;
    size?: number;
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
export type BubbleMapProps = typeof __propDef.props;
export type BubbleMapEvents = typeof __propDef.events;
export type BubbleMapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        title?: string | undefined;
        size?: number | undefined;
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
