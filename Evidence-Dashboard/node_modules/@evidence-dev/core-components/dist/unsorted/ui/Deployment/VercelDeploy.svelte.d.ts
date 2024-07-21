/** @typedef {typeof __propDef.props}  VercelDeployProps */
/** @typedef {typeof __propDef.events}  VercelDeployEvents */
/** @typedef {typeof __propDef.slots}  VercelDeploySlots */
export default class VercelDeploy extends SvelteComponent<{
    settings: any;
    datasourceSettings: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type VercelDeployProps = typeof __propDef.props;
export type VercelDeployEvents = typeof __propDef.events;
export type VercelDeploySlots = typeof __propDef.slots;
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
