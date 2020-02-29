import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'
import Scrollchor from 'react-scrollchor';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom'
import { Button } from 'antd';

var portfolioItems = require('../data/PortfolioItems.json');

class PortfolioItemPage extends Component {
    
    constructor(props) {
        super(props)

        this.state = { portfolioContent: null }
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        let portfolioContentFile = require('../md/portfolio/' + id +'.md');
        fetch(portfolioContentFile).then((response) => response.text()).then((text) => {
          this.setState({ portfolioContent: text })
        })
    }

    render() {
        const id = this.props.match.params.id;
        const portfolioItem = portfolioItems[id - 1];
        const title = portfolioItem.title;
        const periodOfTime = portfolioItem.period_of_time;
        const location = portfolioItem.location;
        const skills = portfolioItem.skills;
        const website = portfolioItem.website;
        var descriptionsHTML = [];
        var descriptions = portfolioItem.descriptions;
        for (var i = 0; i < descriptions.length; i++) {
            var description = descriptions[i];
            descriptionsHTML.push(<h4 key={description}>{description}</h4>);
        }
        var coverImage = require('../images/portfolio/'+ portfolioItem.cover_image_name);

        const content = this.state.portfolioContent;

        return (
            <div className="portfolio-item-page" id="top-of-page">
                <div className="portfolio-item-page-header" style={{backgroundImage: `url(${coverImage})`}}>
                    <div class="portfolio-item-page-header-layer"></div>
                    <div class="portfolio-item-page-header-content">
                        <h1>{title}</h1>
                        {descriptionsHTML}
                    </div>
                </div>
                <div className="portfolio-item-page-body">
                    <div className="portfolio-item-page-content">
                        <ReactMarkdown source={content} />
                    </div>

                    <div className="portfolio-item-page-intro">
                            <div className="portfolio-item-page-intro-item">
                                <h4 className="portfolio-item-page-intro-item-title" style={{fontWeight: 700}}>Location</h4>
                                <h4 style={{fontWeight: 300}}>{location}</h4>
                            </div>

                            <div className="portfolio-item-page-intro-item">
                                <h4 className="portfolio-item-page-intro-item-title" style={{fontWeight: 700}}>Skills Used</h4>
                                <h4 style={{fontWeight: 300}}>{skills}</h4>
                            </div>
                            
                            {website && <div className="portfolio-item-page-intro-item">
                                            <h4 className="portfolio-item-page-intro-item-title" style={{fontWeight: 700}}>Website</h4>
                                            <a href={website} target="_blank"><h4 style={{fontWeight: 300}}>{website}</h4></a>
                                        </div>}
                            
                            <div className="portfolio-item-page-intro-item">
                                <h4 className="portfolio-item-page-intro-item-title" style={{fontWeight: 700}}>Date</h4>
                                <h4 style={{fontWeight: 300}}>{periodOfTime}</h4>
                            </div>
                    </div>
                </div>
                

                <div className="portfolio-item-tool">
                    <Link to="/portfolio">
                        <Button type="primary">Back to portfolio</Button>
                    </Link>
                    <Scrollchor to="#top-of-page" className="pull-right">
                        <Button type="primary">Back to top</Button>
                    </Scrollchor>
                </div>
            </div>
        );
    }
}

export default PortfolioItemPage;