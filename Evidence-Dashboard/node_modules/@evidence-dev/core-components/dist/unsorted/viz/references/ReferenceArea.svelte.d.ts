export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ReferenceAreaProps */
/** @typedef {typeof __propDef.events}  ReferenceAreaEvents */
/** @typedef {typeof __propDef.slots}  ReferenceAreaSlots */
export default class ReferenceArea extends SvelteComponent<{
    [x: string]: any;
    data?: any;
    emptySet?: "warn" | "error" | "pass";
    emptyMessage?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ReferenceAreaProps = typeof __propDef.props;
export type ReferenceAreaEvents = typeof __propDef.events;
export type ReferenceAreaSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data?: any;
        emptySet?: 'pass' | 'warn' | 'error';
        emptyMessage?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
