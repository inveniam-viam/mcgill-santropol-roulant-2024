export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  BubblesProps */
/** @typedef {typeof __propDef.events}  BubblesEvents */
/** @typedef {typeof __propDef.slots}  BubblesSlots */
export default class Bubbles extends SvelteComponent<{
    [x: string]: any;
    size?: string;
    opacity?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BubblesProps = typeof __propDef.props;
export type BubblesEvents = typeof __propDef.events;
export type BubblesSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        opacity?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
