/**
 * @extends {Error}
 * @property {string[]} context
 * @property {any} metadata
 */
export class EvidenceError extends Error {
    /**
     * @param {string} message
     * @param {string[] | string} [context]
     * @param {ErrorOptions} [opts]
     * @param {any} [metadata]
     */
    constructor(message: string, context?: string | string[] | undefined, opts?: ErrorOptions | undefined, metadata?: any);
    /** @type {string[]} */
    context: string[];
    set metadata(data: any);
    get metadata(): any;
    #private;
}
//# sourceMappingURL=EvidenceError.d.ts.map