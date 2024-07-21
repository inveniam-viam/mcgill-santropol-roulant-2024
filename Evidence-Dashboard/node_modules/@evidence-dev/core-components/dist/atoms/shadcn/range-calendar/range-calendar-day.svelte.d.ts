/** @typedef {typeof __propDef.props}  RangeCalendarDayProps */
/** @typedef {typeof __propDef.events}  RangeCalendarDayEvents */
/** @typedef {typeof __propDef.slots}  RangeCalendarDaySlots */
export default class RangeCalendarDay extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    month?: any;
    date?: any;
}, {
    click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLDivElement>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        disabled: boolean;
        unavailable: boolean;
        builder: {
            readonly role: "button";
            readonly 'aria-label': string;
            readonly 'aria-selected': true;
            readonly 'aria-disabled': true;
            readonly 'data-selected': true;
            readonly 'data-selection-start': true;
            readonly 'data-selection-end': true;
            readonly 'data-value': string;
            readonly 'data-disabled': "";
            readonly 'data-unavailable': "";
            readonly 'data-today': "";
            readonly 'data-outside-month': "";
            readonly 'data-outside-visible-months': "";
            readonly 'data-focused': "";
            readonly 'data-highlighted': "";
            readonly tabindex: 0 | -1;
        } & {
            [x: `data-melt-${string}`]: "";
        } & {
            action: (node: HTMLElement) => import(".pnpm/@melt-ui+svelte@0.76.2_svelte@4.2.12/node_modules/@melt-ui/svelte/internal/types").MeltActionReturn<"click" | "focusin" | "mouseenter">;
        };
    };
}> {
}
export type RangeCalendarDayProps = typeof __propDef.props;
export type RangeCalendarDayEvents = typeof __propDef.events;
export type RangeCalendarDaySlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
        month?: any;
        date?: any;
    };
    events: {
        click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLDivElement>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            disabled: boolean;
            unavailable: boolean;
            builder: {
                readonly role: "button";
                readonly 'aria-label': string;
                readonly 'aria-selected': true;
                readonly 'aria-disabled': true;
                readonly 'data-selected': true;
                readonly 'data-selection-start': true;
                readonly 'data-selection-end': true;
                readonly 'data-value': string;
                readonly 'data-disabled': "";
                readonly 'data-unavailable': "";
                readonly 'data-today': "";
                readonly 'data-outside-month': "";
                readonly 'data-outside-visible-months': "";
                readonly 'data-focused': "";
                readonly 'data-highlighted': "";
                readonly tabindex: 0 | -1;
            } & {
                [x: `data-melt-${string}`]: "";
            } & {
                action: (node: HTMLElement) => import(".pnpm/@melt-ui+svelte@0.76.2_svelte@4.2.12/node_modules/@melt-ui/svelte/internal/types").MeltActionReturn<"click" | "focusin" | "mouseenter">;
            };
        };
    };
};
export {};
