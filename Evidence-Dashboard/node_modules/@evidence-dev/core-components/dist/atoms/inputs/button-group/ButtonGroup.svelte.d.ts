export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ButtonGroupProps */
/** @typedef {typeof __propDef.events}  ButtonGroupEvents */
/** @typedef {typeof __propDef.slots}  ButtonGroupSlots */
export default class ButtonGroup extends SvelteComponent<{
    value: any;
    title: string;
    data: any;
    name: string;
    label: any;
    order: any;
    where: any;
    hideDuringPrint?: boolean;
    preset?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ButtonGroupProps = typeof __propDef.props;
export type ButtonGroupEvents = typeof __propDef.events;
export type ButtonGroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        title: string;
        data: any;
        name: string;
        label: any;
        order: any;
        where: any;
        hideDuringPrint?: boolean;
        preset?: keyof typeof presets | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
import { presets } from './lib.js';
export {};
