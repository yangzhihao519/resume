import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Footer from './Footer'
import {Route, Switch, HashRouter as Router} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import PortfolioItemPage from './PortfolioItemPage'
import ReactGA from 'react-ga';

const trackingId = "UA-155571823-1";

class App extends Component {
  constructor(props) {
    super(props);
        
    ReactGA.initialize(trackingId);
  }

  render() {
    return (
      (<Router>
        <div className="App">
        <div className="App-header">
          <Header/>
        </div>
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
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
