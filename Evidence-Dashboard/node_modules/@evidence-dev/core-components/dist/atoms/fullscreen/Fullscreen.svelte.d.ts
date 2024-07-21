export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  FullscreenProps */
/** @typedef {typeof __propDef.events}  FullscreenEvents */
/** @typedef {typeof __propDef.slots}  FullscreenSlots */
export default class Fullscreen extends SvelteComponent<{
    open?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FullscreenProps = typeof __propDef.props;
export type FullscreenEvents = typeof __propDef.events;
export type FullscreenSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
