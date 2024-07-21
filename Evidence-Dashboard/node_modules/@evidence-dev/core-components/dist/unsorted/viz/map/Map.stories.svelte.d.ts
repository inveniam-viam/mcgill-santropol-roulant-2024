/** @type {import("@storybook/svelte").Meta}*/
export const meta: import("@storybook/svelte").Meta;
/** @typedef {typeof __propDef.props}  MapProps */
/** @typedef {typeof __propDef.events}  MapEvents */
/** @typedef {typeof __propDef.slots}  MapSlots */
export default class Map extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MapProps = typeof __propDef.props;
export type MapEvents = typeof __propDef.events;
export type MapSlots = typeof __propDef.slots;
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
