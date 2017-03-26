import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'

import Nav from '../navbar';
import BinaryTree from './binaryTree';

class Sandbox extends Component{

  render() {
    return (
      <div>
        <Nav />
        {this.props.children || "Welcome to your Sandbox"}
      </div>
    )
  }
}


export default Sandbox