/** @typedef {typeof __propDef.props}  SliderShadcnProps */
/** @typedef {typeof __propDef.events}  SliderShadcnEvents */
/** @typedef {typeof __propDef.slots}  SliderShadcnSlots */
export default class SliderShadcn extends SvelteComponent<{
    [x: string]: any;
    class?: string;
    value?: number[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SliderShadcnProps = typeof __propDef.props;
export type SliderShadcnEvents = typeof __propDef.events;
export type SliderShadcnSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: SliderPrimitive.Props["class"];
        value?: SliderPrimitive.Props["value"];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
import { Slider as SliderPrimitive } from 'bits-ui';
export {};
