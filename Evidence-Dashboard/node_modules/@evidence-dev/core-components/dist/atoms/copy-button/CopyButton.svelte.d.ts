/** @typedef {typeof __propDef.props}  CopyButtonProps */
/** @typedef {typeof __propDef.events}  CopyButtonEvents */
/** @typedef {typeof __propDef.slots}  CopyButtonSlots */
export default class CopyButton extends SvelteComponent<{
    textToCopy?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CopyButtonProps = typeof __propDef.props;
export type CopyButtonEvents = typeof __propDef.events;
export type CopyButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        textToCopy?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
