/**
 * Manages Leaflet maps, including the creation of markers and area layers, and handles interactions.
 */
export class EvidenceMap {
    /**
     * Gets the promise indicating the completion of the map initialization.
     * @returns {Promise<void>}
     */
    get initPromise(): Promise<void>;
    /**
     * Gets the HTML element associated with the map.
     * @returns {HTMLDivElement | undefined}
     */
    get mapEl(): HTMLDivElement;
    /**
     * Initializes the map within the provided HTML element with specified starting coordinates and zoom level.
     * @param {HTMLDivElement} mapEl - The HTML element to initialize the map in.
     * @param {string} basemap - The URL template for the basemap.
     * @param {import('leaflet').LatLngExpression} [startingCoords] - The starting coordinates for the map.
     * @param {number} [startingZoom] - The starting zoom level for the map.
     * @param {boolean} [userDefinedView=false]
     * @returns {Promise<void>}
     */
    init(mapEl: HTMLDivElement, basemap: string, startingCoords?: import('leaflet').LatLngExpression, startingZoom?: number, userDefinedView?: boolean): Promise<void>;
    /**
     * Cleans up the map by removing it from the DOM and freeing resources.
     */
    cleanup(): void;
    /**
     * Dynamically adjusts the map's view to ensure all bounds are visible.
     */
    updateBounds: import(".pnpm/@types+lodash@4.17.5/node_modules/@types/lodash").DebouncedFunc<() => void>;
    /**
     * Adds an interactive geoJSON layer to the map that responds to click events.
     * @param {object} item - The data item associated with the area.
     * @param {string} name - The identifier used for input interaction.
     * @param {object} feature - GeoJSON feature data.
     * @param {object} areaOptions - Initial styling options for the area.
     * @param {object} selectedAreaOptions - Styling options for when the area is selected.
     * @param {Function} onclick - Function to execute when the area is clicked.
     * @param {Function} setInput - Function to set input data when an area is selected.
     * @param {Function} unsetInput - Function to clear input data when an area is deselected.
     * @param {string} [link] - URL to navigate to on area click.
     * @returns {import('leaflet').Layer} The created geoJSON layer.
     */
    addArea(item: object, name: string, feature: object, areaOptions: object, selectedAreaOptions: object, onclick: Function, setInput: Function, unsetInput: Function, link?: string): import('leaflet').Layer;
    lastSelectedLayer: any;
    originalStyles: Map<any, any>;
    /**
     * Adds a circle marker to the map.
     * @param {object} item - The data item associated with the marker.
     * @param {string} name - The identifier used for input interaction.
     * @param {NonNullable<Pick<import('leaflet').CircleMarkerOptions, 'fillColor' | 'radius'>> & Partial<import('leaflet').CircleMarkerOptions>} circleOptions - Options for the circle marker.
     * @param {object} selectedOptions - Styling options for when the marker is selected.
     * @param {import('leaflet').LatLngExpression} coords - The coordinates for the circle marker.
     * @param {Function} onclick - Function to execute when the marker is clicked.
     * @param {Function} setInput - Function to set input data when a marker is selected.
     * @param {Function} unsetInput - Function to clear input data when a marker is deselected.
     * @param {string} [link] - URL to navigate to on marker click.
     * @returns {import('leaflet').Marker} The created circle marker.
     */
    addCircle(item: object, name: string, circleOptions: NonNullable<Pick<import('leaflet').CircleMarkerOptions, 'fillColor' | 'radius'>> & Partial<import('leaflet').CircleMarkerOptions>, selectedOptions: object, coords: import('leaflet').LatLngExpression, onclick: Function, setInput: Function, unsetInput: Function, link?: string): import('leaflet').Marker;
    /**
     * Updates the style of a given marker and stores its original style if not already stored.
     * @param {import('leaflet').Marker} marker - The marker to update the style for.
     * @param {object} style - The style to apply to the marker.
     */
    updateMarkerStyle(marker: import('leaflet').Marker, style: object): void;
    /**
     * Builds a tooltip content string based on the provided item and tooltip configuration.
     * @param {object} item - The data item for the tooltip.
     * @param {Array<object>} tooltip - The tooltip configuration.
     * @returns {string} The generated tooltip content.
     */
    buildTooltip(item: object, tooltip: Array<object>): string;
    /**
     * Attaches a tooltip to a marker.
     * @param {import('leaflet').Marker} marker - The marker to attach the tooltip to.
     * @param {string} tooltipCode - The tooltip content.
     * @param {import('leaflet').TooltipOptions} tooltipOptions - The tooltip options.
     * @param {string} tooltipType - The type of the tooltip ('hover' or 'click').
     */
    attachTooltip(marker: import('leaflet').Marker, tooltipCode: string, tooltipOptions: import('leaflet').TooltipOptions, tooltipType: string): void;
    /**
     * Processes the basemap URL to handle high-resolution displays and specific file extensions.
     * @param {string} url - The original basemap URL provided by the user.
     * @returns {string} The processed basemap URL, adapted for different display resolutions and file formats.
     */
    processBasemapUrl(url: string): string;
    #private;
}
