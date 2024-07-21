/** @typedef {typeof __propDef.props}  EvidenceDefaultLayoutProps */
/** @typedef {typeof __propDef.events}  EvidenceDefaultLayoutEvents */
/** @typedef {typeof __propDef.slots}  EvidenceDefaultLayoutSlots */
export default class EvidenceDefaultLayout extends SvelteComponent<{
    data: any;
    title?: string;
    logo?: string;
    algolia?: {
        appId: string;
        apiKey: string;
        indexName: string;
    };
    neverShowQueries?: boolean;
    fullWidth?: boolean;
    maxWidth?: string;
    hideSidebar?: boolean;
    githubRepo?: string;
    xProfile?: string;
    slackCommunity?: string;
    builtWithEvidence?: boolean;
    hideHeader?: boolean;
    hideBreadcrumbs?: boolean;
    hideTOC?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    content: {};
}> {
}
export type EvidenceDefaultLayoutProps = typeof __propDef.props;
export type EvidenceDefaultLayoutEvents = typeof __propDef.events;
export type EvidenceDefaultLayoutSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        data: any;
        title?: string;
        logo?: string;
        algolia?: {
            appId: string;
            apiKey: string;
            indexName: string;
        };
        neverShowQueries?: boolean;
        fullWidth?: boolean;
        maxWidth?: string;
        hideSidebar?: boolean;
        githubRepo?: string;
        xProfile?: string;
        slackCommunity?: string;
        builtWithEvidence?: boolean;
        hideHeader?: boolean;
        hideBreadcrumbs?: boolean;
        hideTOC?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        content: {};
    };
};
export {};
