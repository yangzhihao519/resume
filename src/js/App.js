import React, { Component } from 'react';
import '../css/App.css';
import {Header} from './Header'
import Footer from './Footer'
import { StickyContainer } from 'react-sticky';
import {HashRouter, Route, Switch, BrowserRouter as Router, Link, withRouter} from 'react-router-dom';
import Home from './Home'
import Resume from './Resume'
import Portfolio from './Portfolio'
import PortfolioItemPage from './PortfolioItemPage'

class App extends Component {
  render() {
    // var currentPathName = this.props.location.pathname;
    console.log(this.props)
    return (
      (<Router>
        <div className="App">
        <div className="App-header">
          <Header/>
        </div>
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/resume" component={Resume} />
              <Route path="/portfolio/work/:id" component={PortfolioItemPage} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </div>
          <div className="App-footer">
            <Footer />
          </div>
          </div>
      </Router>)
      );
  }
}

export default App;
