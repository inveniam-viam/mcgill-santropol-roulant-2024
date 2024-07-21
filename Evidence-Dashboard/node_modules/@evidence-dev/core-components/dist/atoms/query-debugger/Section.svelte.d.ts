/** @typedef {typeof __propDef.props}  SectionProps */
/** @typedef {typeof __propDef.events}  SectionEvents */
/** @typedef {typeof __propDef.slots}  SectionSlots */
export default class Section extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    default: {};
}> {
}
export type SectionProps = typeof __propDef.props;
export type SectionEvents = typeof __propDef.events;
export type SectionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
    };
};
export {};
