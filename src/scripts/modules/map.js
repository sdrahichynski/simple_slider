'use strict';

const PIN        = './image/common/travel-services/icon-map-pin.svg';
const PIN_ACTIVE = './image/common/travel-services/icon-map-pin-active.svg';

class HotelMarker extends window.google.maps.Marker {
    constructor (options) {
        const extendedOptions = { ...HotelMarker.commonMarkerOptions, ...options };
        super(extendedOptions);
        this.addEventListeners();
    }

    static icons = {
        common: PIN,
        hover : PIN_ACTIVE,
        active: PIN_ACTIVE,
    };

    static zIndexes = {
        common: 10,
        hover : 100,
        active: 1000,
    };

    static commonMarkerOptions = {
        icon  : HotelMarker.icons.common,
        zIndex: HotelMarker.zIndexes.common,
    };

    setMarkerStyle = style => {
        this.setIconStyle(style);
        this.setZIndexStyle(style);
    };

    setZIndexStyle = style => this.setZIndex(HotelMarker.zIndexes[style] ?? HotelMarker.zIndexes.common);
    setIconStyle   = style => this.setIcon(HotelMarker.icons[style] ?? HotelMarker.icons.common);

    addEventListeners = () => {
        this.addListener('mouseout',  () => this.setMarkerStyle('common'));
        this.addListener('mouseover', () => this.setMarkerStyle('hover'));
        // this.addListener('click',     () => this.setIconStyle('active'));
    }
}

class HotelsGoogleMap {
    constructor ({ node, options }) {
        this.options = { ...HotelsGoogleMap.commonOptions, ...options };
        this.markers = {};
        this.initMap(node, this.options);
    }

    static commonOptions = {
        center: { lat: 55.75838088989258, lng: 37.62165069580078 },
        zoom: 8,
    };

    initMap = (node, options) => {
        this.map = new window.google.maps.Map(node, options);
    };

    addMarkers = (markers = []) => markers.forEach(marker => this.addMarker(marker));

    addMarker = ({ id, ...options }) => this.markers[id] = new HotelMarker({
        map: this.map,
        ...options,
    });
}

export { HotelsGoogleMap };
