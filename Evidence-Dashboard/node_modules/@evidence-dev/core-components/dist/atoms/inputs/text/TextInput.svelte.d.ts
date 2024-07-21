export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  TextInputProps */
/** @typedef {typeof __propDef.events}  TextInputEvents */
/** @typedef {typeof __propDef.slots}  TextInputSlots */
export default class TextInput extends SvelteComponent<{
    title: string;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    hideDuringPrint?: boolean;
    unsafe?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextInputProps = typeof __propDef.props;
export type TextInputEvents = typeof __propDef.events;
export type TextInputSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        name: string;
        defaultValue?: string;
        placeholder?: string;
        hideDuringPrint?: boolean;
        unsafe?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
