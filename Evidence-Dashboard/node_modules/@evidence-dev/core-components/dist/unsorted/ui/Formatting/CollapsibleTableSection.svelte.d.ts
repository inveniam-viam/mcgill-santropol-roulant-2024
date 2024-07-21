export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  CollapsibleTableSectionProps */
/** @typedef {typeof __propDef.events}  CollapsibleTableSectionEvents */
/** @typedef {typeof __propDef.slots}  CollapsibleTableSectionSlots */
export default class CollapsibleTableSection extends SvelteComponent<{
    headerText: any;
    expanded?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CollapsibleTableSectionProps = typeof __propDef.props;
export type CollapsibleTableSectionEvents = typeof __propDef.events;
export type CollapsibleTableSectionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        headerText: any;
        expanded?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
