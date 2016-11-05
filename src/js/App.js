import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import '../css/App.css';
import {Header} from './Header'
import Footer from './Footer'
import { StickyContainer } from 'react-sticky';

class App extends Component {
  render() {
    var currentPathName = this.props.location.pathname;

    return (
      <div className="App">
        <StickyContainer>
          <div className="App-header">
            <Header currentPathName={currentPathName}/>
          </div>
          <div className="App-body">
            <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={2} lg={2}></Col>
              <Col xs={12} sm={10} md={8} lg={8}>
                {this.props.children}
              </Col>
              <Col xs={0} sm={1} md={2} lg={2}></Col>
            </Row>
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </StickyContainer>
      </div>
      );
  }
}

export default App;
