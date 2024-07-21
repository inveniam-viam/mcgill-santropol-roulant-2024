/** @typedef {typeof __propDef.props}  TableOfContentsProps */
/** @typedef {typeof __propDef.events}  TableOfContentsEvents */
/** @typedef {typeof __propDef.slots}  TableOfContentsSlots */
export default class TableOfContents extends SvelteComponent<{
    hideHeader?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TableOfContentsProps = typeof __propDef.props;
export type TableOfContentsEvents = typeof __propDef.events;
export type TableOfContentsSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        hideHeader?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
