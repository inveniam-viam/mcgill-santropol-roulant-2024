/// <reference types="svelte" />
export type DropdownValueFlag = Symbol;
/**
 * @typedef {Object} DropdownValue
 * @property {string} label
 * @property {string} value
 * @property {number} idx
 * @property {boolean} [removeOnDeselect]
 * @property {boolean} [ignoreSelected]
 * @property {boolean} selected
 * @property {boolean} [__auto]
 */
/** @enum {Symbol} */
export const DropdownValueFlag: Readonly<{
    REMOVE_ON_DESELECT: symbol;
    IGNORE_SELECTED: symbol;
    FORCE_SELECT: symbol;
    FORCE_DESELECT: symbol;
}>;
export function dropdownOptionStore(multi?: boolean, delay?: number): {
    options: import("svelte/store").Readable<DropdownValue[]>;
    destroy(): void;
    selectedOptions: import("svelte/store").Writable<DropdownValue[]>;
    addOption: (...args: any[]) => void;
    removeOption: (...args: any[]) => void;
    flagOption: (...args: any[]) => void;
    select: any;
    deselectAll: (autoOnly?: boolean) => void;
};
export type DropdownValue = {
    label: string;
    value: string;
    idx: number;
    removeOnDeselect?: boolean;
    ignoreSelected?: boolean;
    selected: boolean;
    __auto?: boolean;
};
