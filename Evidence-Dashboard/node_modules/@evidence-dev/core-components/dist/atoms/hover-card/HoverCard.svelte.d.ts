/** @typedef {typeof __propDef.props}  HoverCardProps */
/** @typedef {typeof __propDef.events}  HoverCardEvents */
/** @typedef {typeof __propDef.slots}  HoverCardSlots */
export default class HoverCard extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    trigger: {};
    content: {};
}> {
}
export type HoverCardProps = typeof __propDef.props;
export type HoverCardEvents = typeof __propDef.events;
export type HoverCardSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        trigger: {};
        content: {};
    };
};
export {};
