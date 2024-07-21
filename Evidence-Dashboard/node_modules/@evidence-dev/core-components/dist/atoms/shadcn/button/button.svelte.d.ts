/** @typedef {typeof __propDef.props}  ButtonProps */
/** @typedef {typeof __propDef.events}  ButtonEvents */
/** @typedef {typeof __propDef.slots}  ButtonSlots */
export default class Button extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    size?: import(".").Size;
    variant?: import(".").Variant;
    builders?: any[];
}, {
    click: import("bits-ui").ButtonEventHandler<MouseEvent>;
    keydown: import("bits-ui").ButtonEventHandler<KeyboardEvent>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        size?: import('./index.js').Size;
        variant?: import('./index.js').Variant;
        builders?: Array<any>;
    };
    events: {
        click: import("bits-ui").ButtonEventHandler<MouseEvent>;
        keydown: import("bits-ui").ButtonEventHandler<KeyboardEvent>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
