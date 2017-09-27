import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import Hello from "../component/hello.jsx";
import About from "../component/about.jsx";

// sandbox
import Sandbox from "../component/sandbox/index.jsx";
// import BinaryTree from "../component/sandbox/binaryTree";
// import RandomSelect from "../component/sandbox/randomSelect";

import Index from "../component/index.jsx";
import game from "../component/game/game.jsx";

class Root extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/hello" component={Hello} />
            <Route path="/game" component={game} />
            <Route path="/about" component={About} />
          </Switch>
          <Route path="/sandbox">
            <Route exact path="/" component={Sandbox} />
            {/* <Route path="binaryTree" component={BinaryTree}/> */}
            {/* <Route path="randomSelect" component={RandomSelect} /> */}
          </Route>
        </Router>
      </div>
    );
  }
}

export default Root;