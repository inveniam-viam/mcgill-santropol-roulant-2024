/** @typedef {typeof __propDef.props}  HoverCardContentProps */
/** @typedef {typeof __propDef.events}  HoverCardContentEvents */
/** @typedef {typeof __propDef.slots}  HoverCardContentSlots */
export default class HoverCardContent extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    transition?: any;
    transitionConfig?: any;
    align?: string;
    sideOffset?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type HoverCardContentProps = typeof __propDef.props;
export type HoverCardContentEvents = typeof __propDef.events;
export type HoverCardContentSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        transition?: any;
        transitionConfig?: any | undefined;
        align?: string;
        sideOffset?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
