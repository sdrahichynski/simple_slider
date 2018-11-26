'use strict';

import { tns } from "tiny-slider";

console.log('slider')

function nextSlide (slider) {
    const track = slider.querySelector('.js_track');
    const slides = track.querySelectorAll('.js_slide');
    const currentIndex = +track.dataset.index || 0;
    const nextIndex = currentIndex + 1 > slides.length - 1 ? slides.length - 1 : currentIndex + 1;

    track.style.transform = `translateX(-${100 * nextIndex}%)`;
    track.dataset.index = nextIndex;
}

function prevSlide (slider) {
    const track = slider.querySelector('.js_track');
    const currentIndex = track.dataset.index || 0;
    const nextIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;

    track.style.transform = `translateX(-${100 * nextIndex}%)`;
    track.dataset.index = nextIndex;
}

function jumpTo (slider, index = 0) {
    const track = slider.querySelector('.js_track');
    track.style.transform = `translateX(-${100 * index}%)`;
    track.dataset.index = index;
}


document.addEventListener('click', (e) => {
    const currentTarget = e.target;
    console.log(currentTarget)

    if (currentTarget.classList.contains('js_next')) {
        nextSlide(currentTarget.closest('.js_slider'));
    }

    if (currentTarget.classList.contains('js_prev')) {
        prevSlide(currentTarget.closest('.js_slider'));
    }

    if (currentTarget.classList.contains('js_dot')) {
        jumpTo(currentTarget.closest('.js_slider'), currentTarget.dataset.index);
    }
})


window.nextSlide = nextSlide


const slider = tns({
    container: '.js_tiny'
})