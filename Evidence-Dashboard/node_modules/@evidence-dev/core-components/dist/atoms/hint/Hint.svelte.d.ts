export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  HintProps */
/** @typedef {typeof __propDef.events}  HintEvents */
/** @typedef {typeof __propDef.slots}  HintSlots */
export default class Hint extends SvelteComponent<{
    icon?: import("@steeze-ui/svelte-icon").IconSource;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type HintProps = typeof __propDef.props;
export type HintEvents = typeof __propDef.events;
export type HintSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        icon?: import('@steeze-ui/svelte-icon').IconSource;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
