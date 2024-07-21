/** @typedef {typeof __propDef.props}  CommandInputProps */
/** @typedef {typeof __propDef.events}  CommandInputEvents */
/** @typedef {typeof __propDef.slots}  CommandInputSlots */
export default class CommandInput extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    value?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CommandInputProps = typeof __propDef.props;
export type CommandInputEvents = typeof __propDef.events;
export type CommandInputSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        value?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
