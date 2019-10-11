'use strict';

export const initMap = ({
    apiKey,
    locale,
    callbackName = 'googleMapsCallback',
    callback     = () => {},
}) => {
    const gmScript = document.createElement('script');

    window[callbackName] = () => {
        callback();
    };

    gmScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=${locale}&callback=${callbackName}`;
    document.head.appendChild(gmScript);
};
