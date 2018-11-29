'use strict';

import React from 'react';


class TinyGallery extends React.Component {

    galleryItem () {
        
    }

    render () {
        const imgs = [
            
        ]
        return (
            <div className="Tiny-gallery">
                <div className="Tiny-gallery-wrapper">
                    <div className="Tiny-gallery-container">
                        <div className="Tiny-gallery-item">
                            <img src="" alt=""/>
                        </div>
                    </div>

                    <div className="Tiny-gallery-controlls"></div>

                    <div className="Tiny-gallery-nav"></div>
                </div>
            </div>   
        );
    }
}

export default TinyGallery;