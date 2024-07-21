/** @typedef {typeof __propDef.props}  HeaderProps */
/** @typedef {typeof __propDef.events}  HeaderEvents */
/** @typedef {typeof __propDef.slots}  HeaderSlots */
export default class Header extends SvelteComponent<{
    title?: any;
    logo?: any;
    algolia?: any;
    mobileSidebarOpen?: any;
    neverShowQueries?: any;
    fullWidth?: any;
    maxWidth?: any;
    hideSidebar?: any;
    sidebarFrontMatter?: any;
    githubRepo?: any;
    xProfile?: any;
    slackCommunity?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HeaderProps = typeof __propDef.props;
export type HeaderEvents = typeof __propDef.events;
export type HeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: any;
        logo?: any;
        algolia?: any;
        mobileSidebarOpen?: any;
        neverShowQueries?: any;
        fullWidth?: any;
        maxWidth?: any;
        hideSidebar?: any;
        sidebarFrontMatter?: any;
        githubRepo?: any;
        xProfile?: any;
        slackCommunity?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
