import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'

interface PortfolioItemPageImageProps {
    image: {
        name: string,
        caption: string
    }
}

class PortfolioItemPageImage extends Component<PortfolioItemPageImageProps, {}> {

    render() {
        const {image} = this.props;
        var imageCaption = image.caption;
        var captionHTML = (imageCaption === "" ? "" : imageCaption.split("\n").map(function(item, i) {return (<h5 key={i}>{item} <br/></h5>)}))
        var imageName = image.name;
        var imageHTML = (image.name === "" ? "" : <img src={require('../images/portfolio/' + image.name)}/>)

        return (
            <div className="portfolio-item-page-image">
                {captionHTML}
                {imageHTML}
            </div>
        );
    }
}

export { PortfolioItemPageImage };