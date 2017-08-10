import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Router, Route, hashHistory } from "react-router";

import Hello from "../component/hello.jsx";
import About from "../component/about.jsx";
import Sandbox from "../component/sandbox/index.jsx";
import BinaryTree from "../component/sandbox/binaryTree";
import Index from "../component/index.jsx";
import game from "../component/game.jsx";

class Root extends Component{
  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={Index} />
        <Route path="/hello" component={Hello} />
        <Route path="/game" component={game} />
        <Route path="/about" component={About}></Route>
        <Route path="/sandbox" component={Sandbox}>
          <Route path="binaryTree" component={BinaryTree}/>
        </Route>
      </Router>
    );
  }
}

export default Root;