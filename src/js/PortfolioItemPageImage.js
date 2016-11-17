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
                <img src={require('../images/portfolio/' + image.name)}/>
                <h5>{image.caption}</h5>
            </div>
        );
    }
}

export { PortfolioItemPageImage };