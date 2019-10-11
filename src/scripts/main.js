// import './modules/slider';
// import './modules/tiny-gallery';

import { initMap, GoogleMap } from './modules/map';

const node = document.querySelector('.map');
const map = new GoogleMap({
    apiKey: 'AIzaSyDCmxn-x-A0CmwgNv4saEyHf_1AOSNhAV8',
    locale: 'en',
    callback: () => console.log('HOTELS MAP LOADED', window.google),
    node,
});

console.log(map);