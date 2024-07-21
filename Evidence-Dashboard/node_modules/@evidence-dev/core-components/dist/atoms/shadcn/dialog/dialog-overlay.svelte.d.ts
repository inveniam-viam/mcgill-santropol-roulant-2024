/** @typedef {typeof __propDef.props}  DialogOverlayProps */
/** @typedef {typeof __propDef.events}  DialogOverlayEvents */
/** @typedef {typeof __propDef.slots}  DialogOverlaySlots */
export default class DialogOverlay extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    transition?: any;
    transitionConfig?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DialogOverlayProps = typeof __propDef.props;
export type DialogOverlayEvents = typeof __propDef.events;
export type DialogOverlaySlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        transition?: any;
        transitionConfig?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
