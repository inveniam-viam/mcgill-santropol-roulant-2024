/** @type {import("@storybook/svelte").Meta}*/
export const meta: import("@storybook/svelte").Meta;
/** @typedef {typeof __propDef.props}  UsMapProps */
/** @typedef {typeof __propDef.events}  UsMapEvents */
/** @typedef {typeof __propDef.slots}  UsMapSlots */
export default class UsMap extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UsMapProps = typeof __propDef.props;
export type UsMapEvents = typeof __propDef.events;
export type UsMapSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
