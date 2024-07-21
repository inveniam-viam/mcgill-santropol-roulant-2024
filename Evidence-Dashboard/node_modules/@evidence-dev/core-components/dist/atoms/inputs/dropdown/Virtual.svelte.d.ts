/** @typedef {typeof __propDef.props}  VirtualProps */
/** @typedef {typeof __propDef.events}  VirtualEvents */
/** @typedef {typeof __propDef.slots}  VirtualSlots */
export default class Virtual extends SvelteComponent<{
    items: any;
    height?: string;
    itemHeight?: any;
    start?: number;
    end?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        item: any;
    };
}> {
}
export type VirtualProps = typeof __propDef.props;
export type VirtualEvents = typeof __propDef.events;
export type VirtualSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: any;
        height?: string;
        itemHeight?: any;
        start?: number;
        end?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            item: any;
        };
    };
};
export {};
