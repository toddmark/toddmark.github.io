import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import Hello from '../component/hello.jsx';
import About from '../component/about.jsx';
import Sandbox from '../component/sandbox/index.jsx';
import BinaryTree from '../component/sandbox/binaryTree';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Hello} />
    <Route path="/about" component={About}></Route>
    <Route path="/sandbox" component={Sandbox}>
      <Route path="binaryTree" component={BinaryTree}/>
    </Route>
  </Router>
  ), document.getElementById('app')
);
