import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'
import { Row, Col } from 'react-bootstrap'
import { PortfolioItemPageSection } from './PortfolioItemPageSection'
import Scrollchor from 'react-scrollchor';
import {useParams} from 'react-router-dom';

var portfolioItems = require('../data/PortfolioItems.json');

class PortfolioItemPage extends Component {
    componentDidMount() {
        // from the path `/inbox/messages/:id`
        // const id = this.props.params.id
    }

    render() {
        const id = this.props.match.params.id;
        const portfolioItem = portfolioItems[id - 1];
        const title = portfolioItem.title;
        const coverImageName = portfolioItem.cover_image_name;
        const periodOfTime = portfolioItem.period_of_time;
        const location = portfolioItem.location;
        const skills = portfolioItem.skills;
        const website = portfolioItem.website;
        var columnNumber = 3;
        if(website === "" ) {
            columnNumber = 4;
        }else{
            // do nothing
        }

        var descriptionsHTML = [];
        var descriptions = portfolioItem.descriptions;
        for (var i = 0; i < descriptions.length; i++) {
            var description = descriptions[i];
            descriptionsHTML.push(<h4 key={description}>{description}</h4>);
        }

        const problem = portfolioItem.problem;
        const solution = portfolioItem.solution;
        const process = portfolioItem.process;
        const result = portfolioItem.result

        return (
            <div className="portfolio-item-page" id="top-of-page">
                <div className="portfolio-item-page-header">
                    <h1>{title}</h1>
                    {descriptionsHTML}
                </div>
                <div className="portfolio-item-page-intro">
                    <Row style={{marginLeft:0, marginRight:0}}>
                        <Col xs={12} sm={6} md={columnNumber} lg={columnNumber}>
                            <h4 style={{fontWeight: 700}}>Location</h4>
                            <hr/>
                            <h4 style={{fontWeight: 300}}>{location}</h4>
                        </Col>
                        <Col xs={12} sm={6} md={columnNumber} lg={columnNumber}>
                            <h4 style={{fontWeight: 700}}>Skills Used</h4>
                            <hr/>
                            <h4 style={{fontWeight: 300}}>{skills}</h4>
                        </Col>
                    {website === "" ? "" :
                        <Col xs={12} sm={6} md={columnNumber} lg={columnNumber}>
                            <h4 style={{fontWeight: 700}}>Website</h4>
                            <hr/>
                            <a href={website} target="_blank"><h4 style={{fontWeight: 300}}>{website}</h4></a>
                        </Col>}
                        
                        <Col xs={12} sm={6} md={columnNumber} lg={columnNumber}>
                            <h4 style={{fontWeight: 700}}>Date</h4>
                            <hr/>
                            <h4 style={{fontWeight: 300}}>{periodOfTime}</h4>
                        </Col>
                    </Row>
                </div>
                <Row style={{marginLeft:0, marginRight:0}}>
                    <Col xs={0} sm={1} md={1} lg={1}></Col>
                    <Col xs={12} sm={10} md={10} lg={10}>
                        {
                            (problem === "" && solution === "" && process === "" && result === "") ? <div /> :
                                (<div>
                                    <div className="section-title">
                                        <h1>The Story</h1>
                                    </div>
                                    <div id="portfolio-item-page-story">
                                        {problem === "" ? "" : <PortfolioItemPageSection title={"Problem"} content={problem} />}
                                        {solution === "" ? "" : <PortfolioItemPageSection title={"Solution"} content={solution} />}
                                        {process === "" ? "" : <PortfolioItemPageSection title={"Process"} content={process} />}
                                        {result === "" ? "" : <PortfolioItemPageSection title={"Result"} content={result} />}
                                    </div>
                                </div>)
                        }
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <a href="#/portfolio">
                                    <div className="back-to-portfolio-button">
                                        <h5><span className="glyphicon glyphicon-chevron-left" />Back to portfolio</h5>
                                    </div>
                                </a>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <Scrollchor to="#top-of-page" className="pull-right">
                                    <div className="back-to-top-button">
                                        <h5>Back to Top<span className="glyphicon glyphicon-arrow-up" /></h5>
                                    </div>
                                </Scrollchor>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PortfolioItemPage;