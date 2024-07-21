/** @typedef {typeof __propDef.props}  SourceConfigFormProps */
/** @typedef {typeof __propDef.events}  SourceConfigFormEvents */
/** @typedef {typeof __propDef.slots}  SourceConfigFormSlots */
export default class SourceConfigForm extends SvelteComponent<{
    sourcePlugin: any;
    source: any;
    sources: any;
}, {
    sourceUpdated: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SourceConfigFormProps = typeof __propDef.props;
export type SourceConfigFormEvents = typeof __propDef.events;
export type SourceConfigFormSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        sourcePlugin: any;
        source: any;
        sources: any;
    };
    events: {
        sourceUpdated: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
