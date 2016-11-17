import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'

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

        var imagesHTML = [];
        var images = this.props.content.images;
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imagesHTML.push(<img src={require('../images/portfolio/' + image)} />);
            imagesHTML.push(<br />);
        }

        return (
            <div className="portfolio-item-page-section">
                <div className="title">
                    <h3 style={{fontWeight: 700}}>{title}</h3>
                </div>
                <div className="content">
                    <div className="text">
                        <h4>{text}</h4>
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