export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  BigValueProps */
/** @typedef {typeof __propDef.events}  BigValueEvents */
/** @typedef {typeof __propDef.slots}  BigValueSlots */
export default class BigValue extends SvelteComponent<{
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
export type BigValueProps = typeof __propDef.props;
export type BigValueEvents = typeof __propDef.events;
export type BigValueSlots = typeof __propDef.slots;
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
