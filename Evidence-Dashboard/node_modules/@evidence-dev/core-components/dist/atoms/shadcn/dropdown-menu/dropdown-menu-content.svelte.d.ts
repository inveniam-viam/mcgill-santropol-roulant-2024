/** @typedef {typeof __propDef.props}  DropdownMenuContentProps */
/** @typedef {typeof __propDef.events}  DropdownMenuContentEvents */
/** @typedef {typeof __propDef.slots}  DropdownMenuContentSlots */
export default class DropdownMenuContent extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    transition?: any;
    transitionConfig?: any;
    sideOffset?: number;
}, {
    keydown: import("bits-ui").CustomEventHandler<KeyboardEvent, HTMLDivElement>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DropdownMenuContentProps = typeof __propDef.props;
export type DropdownMenuContentEvents = typeof __propDef.events;
export type DropdownMenuContentSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        transition?: any;
        transitionConfig?: any | undefined;
        sideOffset?: number;
    };
    events: {
        keydown: import("bits-ui").CustomEventHandler<KeyboardEvent, HTMLDivElement>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
