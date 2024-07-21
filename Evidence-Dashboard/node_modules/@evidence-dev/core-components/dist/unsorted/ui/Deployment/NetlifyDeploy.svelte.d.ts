export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  NetlifyDeployProps */
/** @typedef {typeof __propDef.events}  NetlifyDeployEvents */
/** @typedef {typeof __propDef.slots}  NetlifyDeploySlots */
export default class NetlifyDeploy extends SvelteComponent<{
    settings: any;
    datasourceSettings: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NetlifyDeployProps = typeof __propDef.props;
export type NetlifyDeployEvents = typeof __propDef.events;
export type NetlifyDeploySlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        settings: any;
        datasourceSettings: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
