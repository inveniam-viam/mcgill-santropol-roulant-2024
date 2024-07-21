export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  VariableCopyProps */
/** @typedef {typeof __propDef.events}  VariableCopyEvents */
/** @typedef {typeof __propDef.slots}  VariableCopySlots */
export default class VariableCopy extends SvelteComponent<{
    copy?: (text: any) => Promise<void>;
    text?: any;
    small?: boolean;
    hideText?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type VariableCopyProps = typeof __propDef.props;
export type VariableCopyEvents = typeof __propDef.events;
export type VariableCopySlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        copy?: (text: any) => Promise<void>;
        text?: any;
        small?: boolean;
        hideText?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
