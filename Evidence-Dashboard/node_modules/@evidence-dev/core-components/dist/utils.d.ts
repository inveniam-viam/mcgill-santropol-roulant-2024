/**
 * Merges and concatenates CSS class names.
 * @param {...ClassValue[]} inputs - The class values to merge.
 * @returns {string} The merged class names.
 */
export function cn(...inputs: ClassValue[][]): string;
export function flyAndScale(node: Element, params?: FlyAndScaleParams): import('svelte/transition').TransitionConfig;
export type FlyAndScaleParams = {
    /**
     * - The vertical offset for the transition.
     */
    y?: number;
    /**
     * - The horizontal offset for the transition.
     */
    x?: number;
    /**
     * - The initial scale value for the transition.
     */
    start?: number;
    /**
     * - The duration of the transition in milliseconds.
     */
    duration?: number;
};
