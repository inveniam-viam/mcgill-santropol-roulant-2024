export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ButtonProps */
/** @typedef {typeof __propDef.events}  ButtonEvents */
/** @typedef {typeof __propDef.slots}  ButtonSlots */
export default class Button extends SvelteComponent<{
    disabled?: boolean;
    type?: any;
    icon?: import("@steeze-ui/svelte-icon").IconSource;
    iconPosition?: ButtonIconPosition;
    size?: ButtonSize;
    iconSize?: ButtonSize;
    variant?: ButtonVariant;
    outline?: boolean;
    formaction?: string;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ButtonSize = "sm" | "md" | "base" | "lg";
export type ButtonVariant = "info" | "success" | "warn" | "error";
export type ButtonIconPosition = "left" | "right";
export type ButtonOutline = boolean;
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        disabled?: boolean;
        type?: any;
        icon?: import("@steeze-ui/svelte-icon").IconSource | undefined;
        iconPosition?: ButtonIconPosition;
        size?: ButtonSize;
        iconSize?: ButtonSize;
        variant?: ButtonVariant;
        outline?: boolean;
        formaction?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
