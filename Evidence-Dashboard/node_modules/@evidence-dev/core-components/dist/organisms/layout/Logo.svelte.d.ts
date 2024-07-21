/** @typedef {typeof __propDef.props}  LogoProps */
/** @typedef {typeof __propDef.events}  LogoEvents */
/** @typedef {typeof __propDef.slots}  LogoSlots */
export default class Logo extends SvelteComponent<{
    logo: any;
    title: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LogoProps = typeof __propDef.props;
export type LogoEvents = typeof __propDef.events;
export type LogoSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        logo: any;
        title: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
