'use strict';

class GoogleMap {
    constructor (props) {
        this.initMap(props);
    }

    initMap ({
        apiKey,
        locale,
        callbackName = 'googleMapsCallback',
        callback     = () => {},
        node
    }) {
        const gmScript = document.createElement('script');

        window[callbackName] = () => {
            callback();

            this.map = new google.maps.Map(node, {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });
        };
    
        gmScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=${locale}&callback=${callbackName}`;
        document.head.appendChild(gmScript);
    }
}


export { GoogleMap };