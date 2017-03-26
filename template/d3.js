import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import Minecraft from '../component/d3/mincraft'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={Minecraft} >
      <IndexRoute component={Minecraft}/>
    </Route>
  </Router>
  ), document.getElementById('app')
);

