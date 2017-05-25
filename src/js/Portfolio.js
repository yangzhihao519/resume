import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'
import { Row, Col } from 'react-bootstrap'
import { PortfolioItem } from './PortfolioItem'

var portfolioItems = require('../data/PortfolioItems.json');

class Portfolio extends Component {
    render() {
        var PortfolioItemsHTML = [];
        for(var i=0; i<portfolioItems.length; i++){
            var portfolioItem = portfolioItems[i]
            PortfolioItemsHTML.push( <Col xs={12} sm={6} md={6} lg={6} key={portfolioItem.id}>
                                        <PortfolioItem id={portfolioItem.id}
                                                       title={portfolioItem.title}
                                                       descriptions={portfolioItem.descriptions} 
                                                       cover_image_name={portfolioItem.cover_image_name}/>
                                    </Col>);
        }
        
        return (
            <div className="Portfolio">
                <div className="section-title">
                    
                </div>
                <Row>
                    {PortfolioItemsHTML}
                </Row>
            </div>
        );
    }
}

export default Portfolio;