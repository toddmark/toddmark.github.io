import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'

import Nav from '../navbar/index.jsx';
import BinaryTree from './binaryTree.jsx';

export default class Sandbox extends Component{

  render() {
    return (
      <div>
        <Nav />
        {this.props.children || "Welcome to your Sandbox"}
      </div>
    )
  }
}
