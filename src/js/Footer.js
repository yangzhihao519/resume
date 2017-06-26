import React, { Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import '../css/Footer.css'

class Footer extends Component{
    render(){
        return  (
            <div className="footer">
                <Row style={{marginLeft:0, marginRight:0}}>
                    <Col xs={0} sm={1} md={2} lg={3}></Col>
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <h4>© 2017 Hand-crafted by <span style={{fontWeight: 700}}>Zhihao Yang</span>.&nbsp; All Rights Reserved.</h4>
                    </Col>
                    <Col xs={0} sm={1} md={2} lg={3}></Col>
                </Row>
            </div>
        );
    }
}

export default Footer;