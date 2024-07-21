export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ReferenceAreaProps */
/** @typedef {typeof __propDef.events}  ReferenceAreaEvents */
/** @typedef {typeof __propDef.slots}  ReferenceAreaSlots */
export default class ReferenceArea extends SvelteComponent<{
    color?: any;
    data?: any;
    label?: any;
    xMin?: any;
    xMax?: any;
    yMin?: any;
    yMax?: any;
    labelPosition?: any;
    labelColor?: any;
    borderColor?: any;
    borderWidth?: any;
    borderType?: any;
    opacity?: number;
    areaColor?: any;
    border?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ReferenceAreaProps = typeof __propDef.props;
export type ReferenceAreaEvents = typeof __propDef.events;
export type ReferenceAreaSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        color?: any;
        data?: any;
        label?: any;
        xMin?: any;
        xMax?: any;
        yMin?: any;
        yMax?: any;
        labelPosition?: any;
        labelColor?: any;
        borderColor?: any;
        borderWidth?: any;
        borderType?: any;
        opacity?: number;
        areaColor?: any;
        border?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
