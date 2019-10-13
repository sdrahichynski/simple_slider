'use strict';


const loadScript = (
    {
        apiKey,
        locale,
        callbackName = 'googleMapsCallback',
        callback     = () => {},
        node
    }
) => {
    const gmScript = document.createElement('script');

    window[callbackName] = () => {
        callback();
    };

    gmScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=${locale}&callback=${callbackName}`;
    document.head.appendChild(gmScript);
}

class GoogleMap {
    constructor (props) {
        const { node, options } = props;
        this.options = { ...GoogleMap.commonOptions, options };
        this.initMap(node, this.options);
    }

    static commonOptions = {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    }

    initMap = (node, options) => {
        this.map = new window.google.maps.Map(node, options)
    }
}


export { loadScript, GoogleMap };