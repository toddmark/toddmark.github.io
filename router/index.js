import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hello from '../component/hello.jsx';
import About from '../component/about.jsx';
import Sandbox from '../component/sandbox/index.jsx';
import BinaryTree from '../component/sandbox/binaryTree';

const Index = [{
  path: '/',
  component: Hello
},{
  path: 'about',
  component: About
},{
  path: '/sandbox',
  component: Sandbox
},{
  path: '/sandbox/binaryTree',
  component: BinaryTree
}]
export default Index