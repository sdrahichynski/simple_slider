'use strict';

import { tns } from "tiny-slider";

const slider = tns({
    container: '.js_tiny', 
    navContainer: '.js_nav_track'
});



function fitNavContainer () {
    const sliderInfo = slider.getInfo()
    const navContainer = sliderInfo.navContainer;
}

console.log(slider.getInfo().navContainer)