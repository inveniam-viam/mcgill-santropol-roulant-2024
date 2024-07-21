/** @typedef {typeof __propDef.props}  DateRangeProps */
/** @typedef {typeof __propDef.events}  DateRangeEvents */
/** @typedef {typeof __propDef.slots}  DateRangeSlots */
export default class DateRange extends SvelteComponent<{
    defaultValue: string;
    start: string;
    end: string;
    presetRanges: [];
    loaded?: boolean;
    selectedDateRange?: import("bits-ui").DateRange;
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
        defaultValue: string;
        start: string;
        end: string;
        presetRanges: [];
        loaded?: boolean;
        selectedDateRange?: import('bits-ui').DateRange | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
