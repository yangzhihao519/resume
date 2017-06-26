import React, { Component } from 'react';
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
            {this.props.children}
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
