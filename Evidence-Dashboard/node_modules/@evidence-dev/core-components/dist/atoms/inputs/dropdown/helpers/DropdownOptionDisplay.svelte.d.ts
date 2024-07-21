/** @typedef {typeof __propDef.props}  DropdownOptionDisplayProps */
/** @typedef {typeof __propDef.events}  DropdownOptionDisplayEvents */
/** @typedef {typeof __propDef.slots}  DropdownOptionDisplaySlots */
export default class DropdownOptionDisplay extends SvelteComponent<{
    value: any;
    multiple: boolean;
    handleSelect: ({ value: any, label: string }: {
        value: any;
        label: any;
    }) => void;
    valueLabel?: string;
    active?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DropdownOptionDisplayProps = typeof __propDef.props;
export type DropdownOptionDisplayEvents = typeof __propDef.events;
export type DropdownOptionDisplaySlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        multiple: boolean;
        handleSelect: ({ value: any, label: string }: {
            value: any;
            label: any;
        }) => void;
        valueLabel?: string;
        active?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
