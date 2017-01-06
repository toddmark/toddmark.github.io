import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import Hello from './component/hello.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Hello} />
  </Router>
  ), document.getElementById('app')
);
