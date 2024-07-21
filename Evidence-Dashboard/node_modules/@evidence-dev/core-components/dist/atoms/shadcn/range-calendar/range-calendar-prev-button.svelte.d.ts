/** @typedef {typeof __propDef.props}  RangeCalendarPrevButtonProps */
/** @typedef {typeof __propDef.events}  RangeCalendarPrevButtonEvents */
/** @typedef {typeof __propDef.slots}  RangeCalendarPrevButtonSlots */
export default class RangeCalendarPrevButton extends SvelteComponent<{
    [x: string]: any;
    class?: string;
}, {
    click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLButtonElement>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        builder: {
            role: string;
            type: "button";
            'aria-label': string;
            'aria-disabled': "true";
            disabled: boolean;
            'data-disabled': string;
        } & {
            [x: `data-melt-${string}`]: "";
        } & {
            action: (node: HTMLElement) => import(".pnpm/@melt-ui+svelte@0.76.2_svelte@4.2.12/node_modules/@melt-ui/svelte/internal/types").MeltActionReturn<"click">;
        };
    };
}> {
}
export type RangeCalendarPrevButtonProps = typeof __propDef.props;
export type RangeCalendarPrevButtonEvents = typeof __propDef.events;
export type RangeCalendarPrevButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
    };
    events: {
        click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLButtonElement>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            builder: {
                role: string;
                type: "button";
                'aria-label': string;
                'aria-disabled': "true";
                disabled: boolean;
                'data-disabled': string;
            } & {
                [x: `data-melt-${string}`]: "";
            } & {
                action: (node: HTMLElement) => import(".pnpm/@melt-ui+svelte@0.76.2_svelte@4.2.12/node_modules/@melt-ui/svelte/internal/types").MeltActionReturn<"click">;
            };
        };
    };
};
export {};
