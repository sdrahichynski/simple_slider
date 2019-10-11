// import './modules/slider';
// import './modules/tiny-gallery';

import { initMap } from './modules/map';

initMap({
    apiKey: 'AIzaSyDCmxn-x-A0CmwgNv4saEyHf_1AOSNhAV8',
    locale: 'en',
    callback: () => console.log('HOTELS MAP LOADED', window.google),
})