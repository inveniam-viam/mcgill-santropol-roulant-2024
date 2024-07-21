/** @typedef {typeof __propDef.props}  SeparatorProps */
/** @typedef {typeof __propDef.events}  SeparatorEvents */
/** @typedef {typeof __propDef.slots}  SeparatorSlots */
export default class Separator extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SeparatorProps = typeof __propDef.props;
export type SeparatorEvents = typeof __propDef.events;
export type SeparatorSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        orientation?: 'horizontal' | 'vertical' | undefined;
        decorative?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
