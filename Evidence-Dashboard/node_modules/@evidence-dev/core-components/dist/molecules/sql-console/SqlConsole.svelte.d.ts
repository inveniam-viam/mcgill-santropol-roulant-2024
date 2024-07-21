export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  SqlConsoleProps */
/** @typedef {typeof __propDef.events}  SqlConsoleEvents */
/** @typedef {typeof __propDef.slots}  SqlConsoleSlots */
export default class SqlConsole extends SvelteComponent<{
    disabled?: boolean;
    data?: any;
    hideErrors?: boolean;
    initialQuery?: string;
    showResults?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SqlConsoleArgs = import('./sqlConsole.action.js').SqlConsoleArgs;
export type SqlConsoleProps = typeof __propDef.props;
export type SqlConsoleEvents = typeof __propDef.events;
export type SqlConsoleSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        disabled?: boolean;
        data?: any;
        hideErrors?: boolean;
        initialQuery?: string;
        showResults?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
