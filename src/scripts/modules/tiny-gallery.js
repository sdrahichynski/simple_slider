'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from '../components/Gallery';

const galleryNode = document.querySelector('.js_gallery');

const imgs = [
    {
        src: 'https://placeimg.com/600/400/tech?1',
        alt: 'Photo'
    },

    {
        src: 'https://404error',
        alt: 'Photo'
    },

    {
        src: 'https://placeimg.com/600/400/tech?3',
        alt: 'Photo'
    },

    {
        src: 'https://placeimg.com/600/400/tech?5',
        alt: 'Photo'
    },

    {
        src: 'https://placeimg.com/600/400/tech?6',
        alt: 'Photo'
    },

    {
        src: 'https://placeimg.com/600/400/tech?7',
        alt: 'Photo'
    }
];

if (galleryNode) {
    ReactDOM.render(
        <Gallery imgs={[...imgs]} />,
        galleryNode
    )
}
