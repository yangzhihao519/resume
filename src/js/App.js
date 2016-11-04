import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import '../css/App.css';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <Row style={{marginLeft:0, marginRight:0}}>
            <Col xs={0} sm={1} md={2} ld={3}></Col>
            <Col xs={12} sm={10} md={8} ld={6}>
              {this.props.children}
            </Col>
            <Col xs={0} sm={1} md={2} ld={3}></Col>
          </Row>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
      );
  }
}

export default App;
