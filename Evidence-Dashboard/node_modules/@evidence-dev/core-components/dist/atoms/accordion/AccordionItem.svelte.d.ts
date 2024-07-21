export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  AccordionItemProps */
/** @typedef {typeof __propDef.events}  AccordionItemEvents */
/** @typedef {typeof __propDef.slots}  AccordionItemSlots */
export default class AccordionItem extends SvelteComponent<{
    class?: any;
    title?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    title: {};
    default: {};
}> {
}
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: any;
        title?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {};
    };
};
export {};
