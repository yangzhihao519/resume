import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'
import {PortfolioItemPageImage} from './PortfolioItemPageImage'

interface PortfolioItemPageSectionProps {
    title: string;
    content: {
        images: [],
        text: string
    }
}

class PortfolioItemPageSection extends Component<PortfolioItemPageSectionProps, {}> {

    render() {
        const title = this.props.title;
        const text = this.props.content.text;
        var textHTML = text.split("\n").map(function(item, i) {return (<h4 key={i}>{item} <br/></h4>)})

        var imagesHTML = [];
        var images = this.props.content.images;
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imagesHTML.push(<PortfolioItemPageImage image={image} key={i}/>);
        }

        return (
            <div className="portfolio-item-page-section">
                <div className="portfolio-item-page-section-title">
                    <h2>{title}</h2>
                </div>
                <div className="portfolio-item-page-section-content">
                    <div className="text">
                        {textHTML}
                    </div>
                    <div className="images">
                        {imagesHTML}
                    </div>
                </div>
            </div>
        );
    }
}

export { PortfolioItemPageSection };