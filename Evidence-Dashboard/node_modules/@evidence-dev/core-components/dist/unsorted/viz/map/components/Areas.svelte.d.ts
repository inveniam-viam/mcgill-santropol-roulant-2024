export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  AreasProps */
/** @typedef {typeof __propDef.events}  AreasEvents */
/** @typedef {typeof __propDef.slots}  AreasSlots */
export default class Areas extends SvelteComponent<{
    data: any;
    value?: string;
    color?: string;
    onclick?: (item: any) => void;
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
    max?: number;
    min?: number;
    colorPalette?: string[];
    borderColor?: string;
    borderWidth?: number;
    opacity?: number;
    geoId?: string;
    valueFmt?: string;
    tooltipType?: string;
    showTooltip?: boolean;
    geoJsonUrl?: string;
    areaCol?: string;
    areaClass?: string;
    selectedBorderWidth?: number;
    selectedColor?: string;
    selectedBorderColor?: string;
    selectedOpacity?: number;
    selectedAreaClass?: string;
    tooltipClass?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AreasProps = typeof __propDef.props;
export type AreasEvents = typeof __propDef.events;
export type AreasSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        data: any;
        value?: string | undefined;
        color?: string | undefined;
        onclick?: (item: any) => void;
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
        max?: number | undefined;
        min?: number | undefined;
        colorPalette?: string[];
        borderColor?: string;
        borderWidth?: number | undefined;
        opacity?: number | undefined;
        geoId?: string | undefined;
        valueFmt?: string | undefined;
        tooltipType?: string;
        showTooltip?: boolean;
        geoJsonUrl?: string;
        areaCol?: string | undefined;
        areaClass?: string | undefined;
        selectedBorderWidth?: number | undefined;
        selectedColor?: string | undefined;
        selectedBorderColor?: string;
        selectedOpacity?: number | undefined;
        selectedAreaClass?: string | undefined;
        tooltipClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
