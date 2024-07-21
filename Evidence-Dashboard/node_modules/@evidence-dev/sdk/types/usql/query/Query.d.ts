/// <reference types="types/mosaic-sql.js" />
/**
 * @typedef {import("../types.js").QueryResultRow} QueryResultRow
 */
/**
 * @template T
 * @typedef {import('../types.js').MaybePromise<T>} MaybePromise
 */
/**
 * @template {QueryResultRow} [RowType=QueryResultRow]
 * @typedef  {import('../../lib/sharedPromise.js').SharedPromise<Query<RowType>>} ChainableSharedPromise
 */
/**
 * @template {QueryResultRow[]} RowType
 * @typedef {import("svelte/store").Readable<RowType>} Readable
 */
/**
 * @template {QueryResultRow} [RowType=QueryResultRow]
 * @typedef {RowType[] & Query<RowType>} QueryValue
 */
/**
 * @typedef {Object} QueryEvents<RowType>
 * @property {undefined} dataReady
 * @property {number} highScore
 * @property {number} longRun
 * @property {Error} error
 */
/**
 * @typedef {Object} QueryGlobalEvents
 * @property {undefined} inFlightQueryStart
 * @property {undefined} inFlightQueryEnd
 * @property {{raw: Query<any>, proxied: QueryValue<any>}} queryCreated
 */
/** @typedef {import ("../types.js").EventEmitter<QueryGlobalEvents>} QueryGlobalEventEmitter */
/**
 * @typedef {import('../types.js').EventEmitter<QueryEvents>} QueryEventEmitter
 */
/**
 * @class
 * @template {QueryResultRow} [RowType=QueryResultRow]
 * @implements {Query<RowType>}
 * @implements {Readable<QueryValue<RowType>>}
 * @implements {QueryEventEmitter}
 */
export class Query<RowType extends import("../types.js").QueryResultRow = import("../types.js").QueryResultRow> implements Query<RowType>, Readable<QueryValue<RowType>>, QueryEventEmitter {
    /** @type {Set<Query>} */
    static "__#5@#inFlightQueries": Set<Query>;
    static get queriesInFlight(): boolean;
    /**
     * @protected
     */
    protected static resetInFlightQueries(): void;
    /**
     * @param {Query<any>} q
     */
    static "__#5@#markInFlight": (q: Query<any>) => void;
    /** @type {import("../types.js").EventMap<QueryGlobalEvents>} */
    static "__#5@#globalHandlerMap": import("../types.js").EventMap<QueryGlobalEvents>;
    /**
     * @template {keyof QueryGlobalEvents} Event
     * @param {Event} event
     * @param {QueryGlobalEvents[Event]} value
     */
    static "__#5@#globalEmit": <Event_2 extends keyof QueryGlobalEvents>(event: Event_2, value: QueryGlobalEvents[Event_2]) => void;
    static addEventListener<Event_3 extends keyof QueryGlobalEvents>(event: Event_3, handler: import("../types.js").EventHandler<QueryGlobalEvents, keyof QueryGlobalEvents>): void;
    static removeEventListener<Event_4 extends keyof QueryGlobalEvents>(event: Event_4, handler: import("../types.js").EventHandler<QueryGlobalEvents, keyof QueryGlobalEvents>): void;
    static "__#5@#scoreThreshold": number;
    /**
     * @template {QueryResultRow} RowType
     * @param {unknown} q
     * @returns {q is Query<RowType>}
     */
    static isQuery: <RowType_2 extends import("../types.js").QueryResultRow>(q: unknown) => q is Query<RowType_2>;
    /** @type {string[]} */
    static get ProxyFetchTriggers(): string[];
    /**
     * This is a fairly arbitrary number that determines how much data
     * the Query will cache internally. The larger the number, the
     * larger the cache will be.
     *
     * The number is based on our Query Score calculation, see
     * queryScore.js for details on how this is calculated.
     *
     * @default 5 * 10 * 1024
     *
     */
    static CacheMaxScore: number;
    /**
     * @type {Map<string, {added: number, query: Query<any>}>}
     */
    static "__#5@#cache": Map<string, {
        added: number;
        query: Query<any>;
    }>;
    static emptyCache: () => void;
    static get cacheSize(): number;
    /**
     * @param {Query<any>} q
     */
    static "__#5@#addToCache": (q: Query<any>) => void;
    /**
     * @template {QueryResultRow} [RowType=QueryResultRow]
     * @param {string} hash
     * @returns {Query<RowType> | null}
     */
    static "__#5@#getFromCache": <RowType_3 extends import("../types.js").QueryResultRow = import("../types.js").QueryResultRow>(hash: string) => Query<RowType_3> | null;
    static "__#5@#cacheCleanup": () => void;
    /**
     *
     * @param {import('../types.js').QueryReactivityOpts<any>} reactiveOpts Callback that is executed when the new query is ready
     * @param {import('../types.js').QueryOpts<any>} [opts]
     * @param {QueryValue<any>} [initialQuery]
     */
    static createReactive: (reactiveOpts: import('../types.js').QueryReactivityOpts<any>, opts?: import("../types.js").QueryOpts<any> | undefined, initialQuery?: QueryValue<any> | undefined) => (queryText: string, newOpts?: import("../types.js").QueryOpts<any> | undefined) => void;
    static "__#5@#devModeBootstrapped": boolean;
    static "__#5@#devModeBootstraps": () => void;
    /**
     * @template {QueryResultRow} [RowType=QueryResultRow]
     * @type {import("../types.js").CreateQuery<RowType>}
     */
    static create: import("../types.js").CreateQuery<RowType_1>;
    static "__#5@#debugStatic": (label: string, message?: any, ...optionalParams: any[]) => void;
    static "__#5@#debugStyledStatic": (label: string, text: string, style: string) => void;
    static "__#5@#constructing": boolean;
    /**
     * @typedef {Object} AggArgs
     * @property {import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[]} sum
     * @property {import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[]} avg
     * @property {import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[]} min
     * @property {import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[]} max
     * @property {import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[]} median
     */
    /**
     * @type {Record<keyof AggArgs, CallableFunction>}
     */
    static "__#5@#aggFns": Record<keyof {
        sum: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        avg: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        min: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        max: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        median: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
    }, CallableFunction>;
    /**
     *
     * @param {string} aggKey
     * @returns {aggKey is keyof AggArgs}
     */
    static "__#5@#checkAggFn": (aggKey: string) => aggKey is keyof {
        sum: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        avg: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        min: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        max: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        median: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
    };
    /** @param {unknown} v */
    static [Symbol.hasInstance](v: unknown): boolean;
    /**
     * @param {QueryBuilder | string} query
     * @param {import('../types.js').Runner} executeQuery
     * @param {import("../types.js").QueryOpts<RowType>} opts
     * @deprecated Use {@link Query.create} instead
     */
    constructor(query: QueryBuilder | string, executeQuery: import('../types.js').Runner, opts?: import("../types.js").QueryOpts<RowType>);
    get value(): QueryValue<RowType>;
    get dataLoaded(): boolean;
    get dataLoading(): boolean;
    get dataQueryTime(): number;
    get length(): number;
    get lengthLoaded(): boolean;
    get lengthLoading(): boolean;
    get lengthQueryTime(): number;
    get columns(): import("../../types/duckdb-wellknown.js").DescribeResultRow[];
    get columnsLoaded(): boolean;
    get columnsLoading(): boolean;
    get columnsQueryTime(): number;
    /**
     * True when data, length, and columns have all been fetched
     */
    get ready(): boolean;
    /**
     * True when data, length, or columns are currently being fetched
     */
    get loading(): boolean;
    get error(): Error | undefined;
    /**
     * The Query text as is was provided
     */
    get originalText(): string;
    /**
     * The Query text as it is being executed
     */
    get text(): string;
    get score(): number;
    fetch: () => Promise<QueryValue<RowType>>;
    /**
     * Executes the query without actually updating the state
     * This is helpful for ensuring that the related parquet files
     * are available, even when SSR is used to initially hydrate the
     * query / page.
     *
     * Does not run on the server, only in browser
     */
    backgroundFetch: () => void;
    /**
     * @ignore
     * @private
     */
    private get isQuery();
    /** @type {string} */
    get id(): string;
    /** @type {string} */
    get hash(): string;
    /** @type {import('../types.js').QueryOpts} */
    opts: import('../types.js').QueryOpts;
    /**
     * @param {import('../types.js').Subscriber<QueryValue<RowType>>} fn
     * @returns {() => void} Unsubscribe function
     */
    subscribe: (fn: import('../types.js').Subscriber<QueryValue<RowType>>) => () => void;
    /**
     * @protected
     */
    protected publish: (source: string) => void;
    /**
     * @template {keyof QueryEvents} Event
     * @param {Event} event
     * @param {import('../types.js').EventHandler<QueryEvents, Event>} handler
     */
    on: <Event extends keyof QueryEvents>(event: Event, handler: import("../types.js").EventHandler<QueryEvents, Event>) => void;
    /**
     * @template {keyof QueryEvents} Event
     * @param {Event} event
     * @param {import('../types.js').EventHandler<QueryEvents, Event>} handler
     */
    off: <Event_1 extends keyof QueryEvents>(event: Event_1, handler: import("../types.js").EventHandler<QueryEvents, Event_1>) => void;
    addEventListener: <Event extends keyof QueryEvents>(event: Event, handler: import("../types.js").EventHandler<QueryEvents, Event>) => void;
    removeEventListener: <Event_1 extends keyof QueryEvents>(event: Event_1, handler: import("../types.js").EventHandler<QueryEvents, Event_1>) => void;
    /** @param {string} filterStatement */
    where: (filterStatement: string) => QueryValue<RowType_1>;
    /**
     * Attaches an `ordinal` column to the query based on some window statement
     * @example myQuery.withOrdinal('partition by a order by b')
     * @param {string} windowStatement
     * @returns
     */
    withOrdinal: (windowStatement: string) => QueryValue<RowType_1>;
    /**
     * @param {string} searchTerm
     * @param {string | string[]} searchCol
     * @param {number} searchThreshold
     * @returns {QueryValue<RowType & {similarity: number}>}
     */
    search: (searchTerm: string, searchCol: string | string[], searchThreshold?: number) => QueryValue<RowType & {
        similarity: number;
    }>;
    /** @param {number} limit */
    limit: (limit: number) => QueryValue<RowType_1>;
    /** @param {number} offset */
    offset: (offset: number) => QueryValue<RowType_1>;
    /**
     * @param {number} offset
     * @param {number} limit
     */
    paginate: (offset: number, limit: number) => QueryValue<RowType_1>;
    /**
     * @param {string[]} columns
     * @param {boolean} [withRowCount=true]
     */
    groupBy: (columns: string[], withRowCount?: boolean | undefined) => QueryValue<RowType_1>;
    /**
     * @param {AggArgs} cfg
     */
    agg: (cfg: {
        sum: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        avg: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        min: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        max: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
        median: import("../types.js").MaybeAliasedCol | import("../types.js").MaybeAliasedCol[];
    }) => QueryValue<RowType_1>;
    #private;
}
export function hashQuery(...args: any[]): string;
export type QueryResultRow = import("../types.js").QueryResultRow;
export type MaybePromise<T> = import('../types.js').MaybePromise<T>;
export type ChainableSharedPromise<RowType extends import("../types.js").QueryResultRow = import("../types.js").QueryResultRow> = import('../../lib/sharedPromise.js').SharedPromise<Query<RowType>>;
export type Readable<RowType extends import("../types.js").QueryResultRow[]> = import("svelte/store").Readable<RowType>;
export type QueryValue<RowType extends import("../types.js").QueryResultRow = import("../types.js").QueryResultRow> = RowType[] & Query<RowType>;
/**
 * <RowType>
 */
export type QueryEvents = {
    dataReady: undefined;
    highScore: number;
    longRun: number;
    error: Error;
};
export type QueryGlobalEvents = {
    inFlightQueryStart: undefined;
    inFlightQueryEnd: undefined;
    queryCreated: {
        raw: Query<any>;
        proxied: QueryValue<any>;
    };
};
export type QueryGlobalEventEmitter = import("../types.js").EventEmitter<QueryGlobalEvents>;
export type QueryEventEmitter = import('../types.js').EventEmitter<QueryEvents>;
import { Query as QueryBuilder } from '@uwdata/mosaic-sql';
//# sourceMappingURL=Query.d.ts.map