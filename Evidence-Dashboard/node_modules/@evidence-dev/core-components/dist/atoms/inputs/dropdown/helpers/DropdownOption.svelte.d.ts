export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  DropdownOptionProps */
/** @typedef {typeof __propDef.events}  DropdownOptionEvents */
/** @typedef {typeof __propDef.slots}  DropdownOptionSlots */
export default class DropdownOption extends SvelteComponent<{
    value: any;
    idx?: number;
    __auto?: boolean;
    valueLabel?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DropdownOptionProps = typeof __propDef.props;
export type DropdownOptionEvents = typeof __propDef.events;
export type DropdownOptionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        idx?: number;
        __auto?: boolean;
        valueLabel?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
