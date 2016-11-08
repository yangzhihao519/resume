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
        return (
            <div>
                id: {id}
                title: {portfolioItems[id].title}
            </div>
        );
    }
}

export default PortfolioItemPage;