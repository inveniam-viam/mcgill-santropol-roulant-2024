export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  DeltaProps */
/** @typedef {typeof __propDef.events}  DeltaEvents */
/** @typedef {typeof __propDef.slots}  DeltaSlots */
export default class Delta extends SvelteComponent<{
    value?: any;
    data?: any;
    row?: number;
    align?: string;
    text?: any;
    fmt?: any;
    column?: any;
    chip?: boolean;
    downIsGood?: boolean;
    format_object?: any;
    columnUnitSummary?: any;
    showValue?: boolean;
    showSymbol?: boolean;
    symbolPosition?: string;
    fontClass?: string;
    neutralMin?: number;
    neutralMax?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DeltaProps = typeof __propDef.props;
export type DeltaEvents = typeof __propDef.events;
export type DeltaSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value?: any;
        data?: any;
        row?: number;
        align?: string;
        text?: any;
        fmt?: any;
        column?: any;
        chip?: boolean;
        downIsGood?: boolean;
        format_object?: any;
        columnUnitSummary?: any;
        showValue?: boolean;
        showSymbol?: boolean;
        symbolPosition?: string;
        fontClass?: string;
        neutralMin?: number;
        neutralMax?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
