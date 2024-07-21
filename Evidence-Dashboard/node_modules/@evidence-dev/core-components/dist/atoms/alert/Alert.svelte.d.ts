export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  AlertProps */
/** @typedef {typeof __propDef.events}  AlertEvents */
/** @typedef {typeof __propDef.slots}  AlertSlots */
export default class Alert extends SvelteComponent<{
    status?: "default" | "info" | "danger" | "success" | "warning";
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        status?: "default" | "info" | "danger" | "success" | "warning";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
