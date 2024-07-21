export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  SliderProps */
/** @typedef {typeof __propDef.events}  SliderEvents */
/** @typedef {typeof __propDef.slots}  SliderSlots */
export default class Slider extends SvelteComponent<{
    title: string;
    name: string;
    step: number;
    defaultValue?: number;
    size?: string;
    hideDuringPrint?: boolean;
    max?: number;
    min?: number;
    showMaxMin?: boolean;
    fmt?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SliderProps = typeof __propDef.props;
export type SliderEvents = typeof __propDef.events;
export type SliderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        name: string;
        step: number;
        defaultValue?: number;
        size?: string;
        hideDuringPrint?: boolean;
        max?: number;
        min?: number | undefined;
        showMaxMin?: boolean;
        fmt?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
