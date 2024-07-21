/** @typedef {typeof __propDef.props}  AccordionTriggerProps */
/** @typedef {typeof __propDef.events}  AccordionTriggerEvents */
/** @typedef {typeof __propDef.slots}  AccordionTriggerSlots */
export default class AccordionTrigger extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    level?: number;
}, {
    click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLButtonElement>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AccordionTriggerProps = typeof __propDef.props;
export type AccordionTriggerEvents = typeof __propDef.events;
export type AccordionTriggerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        level?: number;
    };
    events: {
        click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLButtonElement>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
