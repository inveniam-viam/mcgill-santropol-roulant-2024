export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ButtonGroupItemProps */
/** @typedef {typeof __propDef.events}  ButtonGroupItemEvents */
/** @typedef {typeof __propDef.slots}  ButtonGroupItemSlots */
export default class ButtonGroupItem extends SvelteComponent<{
    value: string | number | boolean | Date;
    valueLabel: string;
    default?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ButtonGroupItemProps = typeof __propDef.props;
export type ButtonGroupItemEvents = typeof __propDef.events;
export type ButtonGroupItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: string | boolean | number | Date;
        valueLabel: string;
        default?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
