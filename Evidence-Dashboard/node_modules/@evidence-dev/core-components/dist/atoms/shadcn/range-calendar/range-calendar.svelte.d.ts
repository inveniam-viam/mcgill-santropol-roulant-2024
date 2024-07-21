/** @typedef {typeof __propDef.props}  RangeCalendarProps */
/** @typedef {typeof __propDef.events}  RangeCalendarEvents */
/** @typedef {typeof __propDef.slots}  RangeCalendarSlots */
export default class RangeCalendar extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    value?: import("bits-ui").DateRange;
    placeholder?: import("@internationalized/date").DateValue;
    minValue?: import("@internationalized/date").CalendarDate;
    maxValue?: import("@internationalized/date").CalendarDate;
    weekdayFormat?: "short" | "long";
    startValue?: import("@internationalized/date").DateValue;
    selectedDateRange?: {
        start: import("@internationalized/date").DateValue;
        end: import("@internationalized/date").DateValue;
    };
}, {
    keydown: import("bits-ui").CustomEventHandler<KeyboardEvent, HTMLDivElement>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RangeCalendarProps = typeof __propDef.props;
export type RangeCalendarEvents = typeof __propDef.events;
export type RangeCalendarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        value?: import("bits-ui").DateRange | undefined;
        placeholder?: import("@internationalized/date").DateValue;
        minValue?: import("@internationalized/date").CalendarDate;
        maxValue?: import("@internationalized/date").CalendarDate;
        weekdayFormat?: 'short' | 'long' | undefined;
        startValue?: import("@internationalized/date").DateValue;
        selectedDateRange?: {
            start: import("@internationalized/date").DateValue;
            end: import("@internationalized/date").DateValue;
        };
    };
    events: {
        keydown: import("bits-ui").CustomEventHandler<KeyboardEvent, HTMLDivElement>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
