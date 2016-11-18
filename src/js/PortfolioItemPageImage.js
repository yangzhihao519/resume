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

        return (
            <div className="portfolio-item-page-image">
                {image.name === "" ? <div/> : <img src={require('../images/portfolio/' + image.name)}/>}
                {image.caption === "" ? <div/> : <h5 className="portfolio-item-page-image-caption">{image.caption}</h5>}
            </div>
        );
    }
}

export { PortfolioItemPageImage };