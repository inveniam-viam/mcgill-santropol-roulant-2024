export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  CodeBlockProps */
/** @typedef {typeof __propDef.events}  CodeBlockEvents */
/** @typedef {typeof __propDef.slots}  CodeBlockSlots */
export default class CodeBlock extends SvelteComponent<{
    source: any;
    language?: any;
    copyToClipboard?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CodeBlockProps = typeof __propDef.props;
export type CodeBlockEvents = typeof __propDef.events;
export type CodeBlockSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        source: any;
        language?: any;
        copyToClipboard?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
