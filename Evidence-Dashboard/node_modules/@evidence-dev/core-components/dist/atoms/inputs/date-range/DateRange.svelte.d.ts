export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  DateRangeProps */
/** @typedef {typeof __propDef.events}  DateRangeEvents */
/** @typedef {typeof __propDef.slots}  DateRangeSlots */
export default class DateRange extends SvelteComponent<{
    defaultValue: string;
    title: string;
    data: any;
    name: string;
    start: string | Date;
    end: string | Date;
    dates: string;
    presetRanges: [];
    hideDuringPrint?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DateRangeProps = typeof __propDef.props;
export type DateRangeEvents = typeof __propDef.events;
export type DateRangeSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        defaultValue: string | undefined;
        title: string | undefined;
        data: Query | string | undefined;
        name: string;
        start: string | Date | undefined;
        end: string | Date | undefined;
        dates: string | undefined;
        presetRanges: [];
        hideDuringPrint?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
