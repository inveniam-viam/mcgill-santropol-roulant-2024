/** @typedef {typeof __propDef.props}  SelectItemProps */
/** @typedef {typeof __propDef.events}  SelectItemEvents */
/** @typedef {typeof __propDef.slots}  SelectItemSlots */
export default class SelectItem extends SvelteComponent<{
    [x: string]: any;
    value: any;
    class?: string;
    disabled?: boolean;
    label?: string;
}, {
    click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLDivElement>;
    pointermove: import("bits-ui").CustomEventHandler<PointerEvent, HTMLDivElement>;
    focusin: import("svelte/elements").EventHandler<FocusEvent, HTMLDivElement>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SelectItemProps = typeof __propDef.props;
export type SelectItemEvents = typeof __propDef.events;
export type SelectItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: any;
        class?: string | undefined | null;
        disabled?: boolean | undefined;
        label?: string | undefined | null;
    };
    events: {
        click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLDivElement>;
        pointermove: import("bits-ui").CustomEventHandler<PointerEvent, HTMLDivElement>;
        focusin: import("svelte/elements").EventHandler<FocusEvent, HTMLDivElement>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
