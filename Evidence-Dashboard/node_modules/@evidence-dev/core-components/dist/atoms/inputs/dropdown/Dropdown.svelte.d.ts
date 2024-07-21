export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  DropdownProps */
/** @typedef {typeof __propDef.events}  DropdownEvents */
/** @typedef {typeof __propDef.slots}  DropdownSlots */
export default class Dropdown extends SvelteComponent<{
    value: any;
    data: any;
    name: string;
    label: any;
    defaultValue?: string | string[];
    multiple?: boolean;
    title?: string;
    hideDuringPrint?: boolean;
    disableSelectAll?: boolean;
    noDefault?: boolean;
    selectAllByDefault?: boolean;
    order?: any;
    where?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DropdownProps = typeof __propDef.props;
export type DropdownEvents = typeof __propDef.events;
export type DropdownSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        data: string | any;
        name: string;
        label: any;
        defaultValue?: string | string[];
        multiple?: boolean;
        title?: string;
        hideDuringPrint?: boolean;
        disableSelectAll?: boolean;
        noDefault?: boolean;
        selectAllByDefault?: boolean;
        order?: any;
        where?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
