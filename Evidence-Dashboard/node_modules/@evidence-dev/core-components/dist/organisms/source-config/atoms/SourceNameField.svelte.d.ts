export function validateName(name: string, sources: {
    name: string;
}[]): string;
/** @typedef {typeof __propDef.props}  SourceNameFieldProps */
/** @typedef {typeof __propDef.events}  SourceNameFieldEvents */
/** @typedef {typeof __propDef.slots}  SourceNameFieldSlots */
export default class SourceNameField extends SvelteComponent<{
    sourceName: any;
    nameError: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SourceNameFieldProps = typeof __propDef.props;
export type SourceNameFieldEvents = typeof __propDef.events;
export type SourceNameFieldSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        sourceName: any;
        nameError: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
