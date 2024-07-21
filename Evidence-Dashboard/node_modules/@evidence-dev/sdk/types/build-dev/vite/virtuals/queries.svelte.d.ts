export function setSsrHookState(isInstalled: boolean): void;
export function runQuery(name: string, sql: string, opts?: import("@evidence-dev/sdk/usql").QueryOpts<import("@evidence-dev/sdk/usql").QueryResultRow> | undefined): import("@evidence-dev/sdk/usql").QueryValue<RowType>;
export function getQueries(): import("svelte/store").Readable<Record<string, import('@evidence-dev/sdk/usql').QueryValue>>;
export function getAllQueries(): any;
/** @deprecated Use Query instead of QueryStore */
export const QueryStore: typeof Query;
import { Query } from '@evidence-dev/sdk/usql';
//# sourceMappingURL=queries.svelte.d.ts.map