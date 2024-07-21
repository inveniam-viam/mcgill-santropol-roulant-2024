/** @typedef {typeof __propDef.props}  NewSourceFormProps */
/** @typedef {typeof __propDef.events}  NewSourceFormEvents */
/** @typedef {typeof __propDef.slots}  NewSourceFormSlots */
export default class NewSourceForm extends SvelteComponent<{
    availablePackages: any;
    ghost?: boolean;
    existingSources?: any[];
}, {
    newSource: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NewSourceFormProps = typeof __propDef.props;
export type NewSourceFormEvents = typeof __propDef.events;
export type NewSourceFormSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        availablePackages: any;
        ghost?: boolean;
        existingSources?: any[];
    };
    events: {
        newSource: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
