import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import Minecraft from '../component/d3/mincraft'


class D3 extends Component{
  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={Minecraft}></Route>
      </Router>
    )
  }
}

export default D3;