/// <reference types="node" resolution-mode="require"/>
export function ProcessingQueue({ stopOnError }?: ProcessingQueueOpts): {
    /**
     *  @param {Array<() => unknown>}  fn
     *  @returns {Promise<void>} Promise resolves when the queue has emptied; will throw if an error is encountered
     */
    add(...fn: Array<() => unknown>): Promise<void>;
    readonly frozen: boolean;
    /**
     * @param {ProcessingQueueEvent} event
     * @param {Parameters<EventEmitter["addListener"]>[1]} handler
     */
    addListener: (event: ProcessingQueueEvent, handler: [eventName: string | symbol, listener: (...args: any[]) => void][1]) => void;
    /**
     * @param {ProcessingQueueEvent} event
     * @param {Parameters<EventEmitter["removeListener"]>[1]} handler
     */
    removeListener: (event: ProcessingQueueEvent, handler: [eventName: string | symbol, listener: (...args: any[]) => void][1]) => void;
    removeAllListeners: (event?: string | symbol | undefined) => EventEmitter<[never]>;
    finish: () => Promise<void>;
};
export type ProcessingQueueEvent = "done" | "err";
export type ProcessingQueueOpts = {
    stopOnError?: boolean | undefined;
};
import EventEmitter from 'events';
//# sourceMappingURL=processing-queue.d.ts.map