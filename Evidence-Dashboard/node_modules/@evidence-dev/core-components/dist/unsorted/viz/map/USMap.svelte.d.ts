export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  UsMapProps */
/** @typedef {typeof __propDef.events}  UsMapEvents */
/** @typedef {typeof __propDef.slots}  UsMapSlots */
export default class UsMap extends SvelteComponent<{
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
export type UsMapProps = typeof __propDef.props;
export type UsMapEvents = typeof __propDef.events;
export type UsMapSlots = typeof __propDef.slots;
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
