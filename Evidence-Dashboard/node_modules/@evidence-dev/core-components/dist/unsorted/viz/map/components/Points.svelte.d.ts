export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  PointsProps */
/** @typedef {typeof __propDef.events}  PointsEvents */
/** @typedef {typeof __propDef.slots}  PointsSlots */
export default class Points extends SvelteComponent<{
    data: any;
    value?: string;
    color?: string;
    size?: number;
    onclick?: Function;
    name?: string;
    link?: string;
    tooltip?: {
        /**
         * - The ID of the data field.
         */
        id: string;
        /**
         * - Whether to show the column name.
         */
        showColumnName?: boolean;
        /**
         * - The CSS class for the value.
         */
        valueClass?: string;
        /**
         * - The CSS class for the field.
         */
        fieldClass?: string;
        /**
         * - The format for the value.
         */
        fmt?: string;
        /**
         * - The content type, default is 'text'.
         */
        contentType?: string;
    }[];
    long?: string;
    max?: number;
    min?: number;
    colorPalette?: string[];
    sizeFmt?: string;
    borderColor?: string;
    borderWidth?: number;
    opacity?: number;
    maxSize?: number;
    valueFmt?: string;
    lat?: string;
    tooltipType?: string;
    showTooltip?: boolean;
    selectedBorderWidth?: number;
    selectedColor?: string;
    selectedBorderColor?: string;
    selectedOpacity?: number;
    tooltipClass?: string;
    sizeCol?: string;
    pointName?: string;
    pointClass?: string;
    selectedPointClass?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PointsProps = typeof __propDef.props;
export type PointsEvents = typeof __propDef.events;
export type PointsSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        data: any;
        value?: string | undefined;
        color?: string | undefined;
        size?: number | undefined;
        onclick?: Function;
        name?: string | undefined;
        link?: string | undefined;
        tooltip?: {
            /**
             * - The ID of the data field.
             */
            id: string;
            /**
             * - Whether to show the column name.
             */
            showColumnName?: boolean;
            /**
             * - The CSS class for the value.
             */
            valueClass?: string;
            /**
             * - The CSS class for the field.
             */
            fieldClass?: string;
            /**
             * - The format for the value.
             */
            fmt?: string;
            /**
             * - The content type, default is 'text'.
             */
            contentType?: string;
        }[];
        long?: string | undefined;
        max?: number | undefined;
        min?: number | undefined;
        colorPalette?: string[];
        sizeFmt?: string | undefined;
        borderColor?: string;
        borderWidth?: number | undefined;
        opacity?: number | undefined;
        maxSize?: number;
        valueFmt?: string | undefined;
        lat?: string | undefined;
        tooltipType?: string;
        showTooltip?: boolean;
        selectedBorderWidth?: number | undefined;
        selectedColor?: string | undefined;
        selectedBorderColor?: string;
        selectedOpacity?: number | undefined;
        tooltipClass?: string | undefined;
        sizeCol?: string | undefined;
        pointName?: string | undefined;
        pointClass?: string | undefined;
        selectedPointClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
