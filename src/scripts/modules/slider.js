'use strict';

import { tns } from "tiny-slider";

const visibleDotsCount = 5;
const fixOnDot = Math.round(visibleDotsCount / 2);
const dotStep  = 12;


const slider = tns({
    container: '.js_tiny', 
    navContainer: '.js_nav_track'
});



function fitNavContainer (info) {
    const { index, navContainer, slideCount } = info;
    const maxStepsOffset = slideCount - visibleDotsCount;
    
    let stepsOffset;

    if (index <= fixOnDot) {
        stepsOffset = 0;
    }

    if (index > fixOnDot) {
        stepsOffset = Math.min(index - fixOnDot, maxStepsOffset);
    }

    navContainer.style.transform = `translateX(${ -stepsOffset * dotStep }px)`;
}

slider.events.on('indexChanged', (e) => {
    fitNavContainer(e);
})
