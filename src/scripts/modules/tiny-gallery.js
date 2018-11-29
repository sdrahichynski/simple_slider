'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import TinyGallery from '../components/TinyGallery';

const galleryNode = document.querySelector('.js_gallery');

if (galleryNode) {
    ReactDOM.render(
        <TinyGallery />,
        galleryNode
    )
}