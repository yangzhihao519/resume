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
        var captionHTML = (imageCaption === "" ? "" : imageCaption.split("\n").map(function(item, i) {return (<h4 key={i}>{item} <br/></h4>)}))
        var imageName = image.name;
        var imageHTML = (imageName === "" ? "" : <img src={require('../images/portfolio/' + imageName)} role="presentation"/>)

        return (
            <div className="portfolio-item-page-image">
                {captionHTML}
                {imageHTML}
            </div>
        );
    }
}

export { PortfolioItemPageImage };