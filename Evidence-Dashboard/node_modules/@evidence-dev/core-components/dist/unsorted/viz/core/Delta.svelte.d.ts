export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  DeltaProps */
/** @typedef {typeof __propDef.events}  DeltaEvents */
/** @typedef {typeof __propDef.slots}  DeltaSlots */
export default class Delta extends SvelteComponent<{
    [x: string]: any;
    data?: any;
    emptySet?: "warn" | "error" | "pass";
    emptyMessage?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DeltaProps = typeof __propDef.props;
export type DeltaEvents = typeof __propDef.events;
export type DeltaSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data?: any;
        emptySet?: "pass" | "warn" | "error";
        emptyMessage?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
