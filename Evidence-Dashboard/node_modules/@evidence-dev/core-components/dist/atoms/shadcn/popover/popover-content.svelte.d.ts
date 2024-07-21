/** @typedef {typeof __propDef.props}  PopoverContentProps */
/** @typedef {typeof __propDef.events}  PopoverContentEvents */
/** @typedef {typeof __propDef.slots}  PopoverContentSlots */
export default class PopoverContent extends SvelteComponent<{
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
export type PopoverContentProps = typeof __propDef.props;
export type PopoverContentEvents = typeof __propDef.events;
export type PopoverContentSlots = typeof __propDef.slots;
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
