export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  DataTableProps */
/** @typedef {typeof __propDef.events}  DataTableEvents */
/** @typedef {typeof __propDef.slots}  DataTableSlots */
export default class DataTable extends SvelteComponent<{
    [x: string]: any;
    data: any;
    emptySet?: "warn" | "error" | "pass";
    emptyMessage?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DataTableProps = typeof __propDef.props;
export type DataTableEvents = typeof __propDef.events;
export type DataTableSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        emptySet?: 'pass' | 'warn' | 'error';
        emptyMessage?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
