import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'
import { Row, Col } from 'react-bootstrap'

var portfolioItems = require('../data/PortfolioItems.json');

class PortfolioItemPage extends Component {
    componentDidMount() {
        // from the path `/inbox/messages/:id`
        const id = this.props.params.id
    }

    render() {
        const id = this.props.params.id;
        const portfolioItem = portfolioItems[id - 1];
        const title = portfolioItem.title;
        var coverImageName = portfolioItem.cover_image_name;
        var periodOfTime = portfolioItem.period_of_time;

        var descriptionsHTML = [];
        var descriptions = portfolioItem.descriptions;
        for (var i = 0; i < descriptions.length; i++) {
            var description = descriptions[i];
            descriptionsHTML.push(<h4 key={description}>{description}</h4>);
        }

        return (
            <div id="portfolio-item-page">
                <div id="route">
                    <a href="#/portfolio"><h5>Back</h5></a>
                </div>
                <div id="portfolio-item-page-content">
                    <div id="portfolio-item-page-cover-image">
                        <img src={require('../images/' + coverImageName)} />
                    </div>
                    <div id="portfolio-item-page-title">
                        <h2>{title}</h2>
                        <h4 style={{ fontWeight: 300 }}>{periodOfTime}</h4>
                    </div>
                    <div id="portfolio-item-page-descriptions">
                        {descriptionsHTML}
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioItemPage;