export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  LastRefreshedProps */
/** @typedef {typeof __propDef.events}  LastRefreshedEvents */
/** @typedef {typeof __propDef.slots}  LastRefreshedSlots */
export default class LastRefreshed extends SvelteComponent<{
    prefix?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LastRefreshedProps = typeof __propDef.props;
export type LastRefreshedEvents = typeof __propDef.events;
export type LastRefreshedSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        prefix?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
