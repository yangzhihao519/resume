import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'

interface PortfolioItemProps {
    id: number;
    title: string;
    descriptions: string[];
    cover_image_name: string;
}

class PortfolioItem extends Component<PortfolioItemProps, {}> {
    render() {
        const {id, title, descriptions, cover_image_name} = this.props;

        var descriptionsHTML = [];
        for (var i = 0; i < descriptions.length; i++) {
            var description = descriptions[i];
            descriptionsHTML.push(<p key={description}>{description}</p>);
        }

        return (
            <div>
                <a href={"#/portfolio/"+id}>
                    <div className="portfolio-item" >
                        <div className="portfolio-item-image">
                            <img src={require('../images/portfolio/' + cover_image_name)} role="presentation" />
                            <div className="portfolio-item-content">
                                {descriptionsHTML}
                                <div className="view-more-button">
                                    <p style={{ marginBottom: 0 + "px" }}>View More</p>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item-title">
                            <h4 style={{ fontWeight: 700, color: "#333" }}>{title}</h4>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export { PortfolioItem };