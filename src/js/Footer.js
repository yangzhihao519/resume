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
                    <p>© 2016 Hand-crafted by Zhihao Yang.&nbsp; All Rights Reserved</p>
                    </Col>
                    <Col xs={0} sm={1} md={2} lg={3}></Col>
                </Row>
            </div>
        );
    }
}

export default Footer;