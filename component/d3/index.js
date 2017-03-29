import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import Minecraft from './mincraft'

const routes = {
  path: '/',
  component: Minecraft
}

const D3 = () => {
  return (
    <div>
      <Router history={hashHistory} routes={routes} />
    </div>
  )
}

export default D3;