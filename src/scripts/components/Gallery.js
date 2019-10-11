import React from 'react';
import TinyGallery from './TinyGallery'

class Gallery extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            imgs: [...props.imgs]
        }
    }

    onImageError (index) {
        console.log(this, index);
        const imgs = [...this.state.imgs];
        imgs.splice(index, 1);
            
        this.setState({
            imgs
        })
    }

    render () {
        const { imgs } = this.state;

        console.log(imgs)

        return (
            <TinyGallery imgs={[...imgs]} onImageError={index => this.onImageError(index)} />
        )
    }
}

export default Gallery;