import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import Home from './js/Home'
import Resume from './js/Resume'
import Portfolio from './js/Portfolio'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { Router, Route, hashHistory, IndexRoute  } from 'react-router'

ReactDOM.render(
  (<Router history={hashHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Home} />
         <Route path="home" component={Home} />
         <Route path="resume" component={Resume} />
         <Route path="portfolio" component={Portfolio} />
      </Route>
   </Router>),
  document.getElementById('root')
);
