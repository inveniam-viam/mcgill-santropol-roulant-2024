export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  CheckboxProps */
/** @typedef {typeof __propDef.events}  CheckboxEvents */
/** @typedef {typeof __propDef.slots}  CheckboxSlots */
export default class Checkbox extends SvelteComponent<{
    title: string;
    name: string;
    defaultValue?: boolean;
    hideDuringPrint?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        name: string;
        defaultValue?: boolean;
        hideDuringPrint?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
