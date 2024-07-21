/** @typedef {typeof __propDef.props}  SourceConfigFormSectionProps */
/** @typedef {typeof __propDef.events}  SourceConfigFormSectionEvents */
/** @typedef {typeof __propDef.slots}  SourceConfigFormSectionSlots */
export default class SourceConfigFormSection extends SvelteComponent<{
    reveal: any;
    optionSpec: any;
    disabled?: boolean;
    options?: {};
    rootOptions?: {};
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SourceConfigFormSectionProps = typeof __propDef.props;
export type SourceConfigFormSectionEvents = typeof __propDef.events;
export type SourceConfigFormSectionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        reveal: any;
        optionSpec: any;
        disabled?: boolean;
        options?: {};
        rootOptions?: {};
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
