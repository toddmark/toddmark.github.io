import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Hello from '../component/hello.jsx';
import About from '../component/about.jsx';
import Sandbox from '../component/sandbox/index.jsx';
import BinaryTree from '../component/sandbox/binaryTree';

class Index extends Component{
  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={Hello} />
        <Route path="/about" component={About}></Route>
        <Route path="/sandbox" component={Sandbox}>
          <Route path="binaryTree" component={BinaryTree}/>
        </Route>
      </Router>
    )
  }
}

export default Index;