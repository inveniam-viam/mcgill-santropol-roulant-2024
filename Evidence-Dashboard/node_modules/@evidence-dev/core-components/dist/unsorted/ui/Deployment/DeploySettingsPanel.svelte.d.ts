export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  DeploySettingsPanelProps */
/** @typedef {typeof __propDef.events}  DeploySettingsPanelEvents */
/** @typedef {typeof __propDef.slots}  DeploySettingsPanelSlots */
export default class DeploySettingsPanel extends SvelteComponent<{
    settings: any;
    datasourceSettings: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DeploySettingsPanelProps = typeof __propDef.props;
export type DeploySettingsPanelEvents = typeof __propDef.events;
export type DeploySettingsPanelSlots = typeof __propDef.slots;
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
