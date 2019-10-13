// import './modules/slider';
// import './modules/tiny-gallery';

import { loadScript, GoogleMap } from './modules/map';

let map;

const initMap = () => {
    map = new GoogleMap(
        {
            node: document.querySelector('.map'),
            options: {
                zoom: 11,
                center: { lat: 53.9, lng: 27.55 }
            }
        }
    )
}

loadScript({
    apiKey: 'AIzaSyDCmxn-x-A0CmwgNv4saEyHf_1AOSNhAV8',
    locale: 'en',
    callback: initMap
})