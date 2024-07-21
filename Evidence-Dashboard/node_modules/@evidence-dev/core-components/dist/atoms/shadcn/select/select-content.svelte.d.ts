/** @typedef {typeof __propDef.props}  SelectContentProps */
/** @typedef {typeof __propDef.events}  SelectContentEvents */
/** @typedef {typeof __propDef.slots}  SelectContentSlots */
export default class SelectContent extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    inTransition?: Function;
    inTransitionConfig?: any;
    outTransition?: Function;
    outTransitionConfig?: any;
    sideOffset?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SelectContentProps = typeof __propDef.props;
export type SelectContentEvents = typeof __propDef.events;
export type SelectContentSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        inTransition?: Function;
        inTransitionConfig?: object | undefined;
        outTransition?: Function;
        outTransitionConfig?: object;
        sideOffset?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
