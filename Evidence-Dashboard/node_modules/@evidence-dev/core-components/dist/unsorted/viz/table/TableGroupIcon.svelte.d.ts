/** @typedef {typeof __propDef.props}  TableGroupIconProps */
/** @typedef {typeof __propDef.events}  TableGroupIconEvents */
/** @typedef {typeof __propDef.slots}  TableGroupIconSlots */
export default class TableGroupIcon extends SvelteComponent<{
    color?: string;
    size?: number;
    toggled?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TableGroupIconProps = typeof __propDef.props;
export type TableGroupIconEvents = typeof __propDef.events;
export type TableGroupIconSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        color?: string;
        size?: number;
        toggled?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
