/** @typedef {typeof __propDef.props}  ValueProps */
/** @typedef {typeof __propDef.events}  ValueEvents */
/** @typedef {typeof __propDef.slots}  ValueSlots */
export default class Value extends SvelteComponent<{
    value?: any;
    placeholder?: any;
    data?: any;
    row?: number;
    fmt?: any;
    column?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ValueProps = typeof __propDef.props;
export type ValueEvents = typeof __propDef.events;
export type ValueSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value?: any;
        placeholder?: any;
        data?: any;
        row?: number;
        fmt?: any;
        column?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
