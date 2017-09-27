import "bootstrap/dist/css/bootstrap.min.css";

import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, hashHistory, IndexRoute } from "react-router-dom";

import Minecraft from "../component/d3/mincraft";


class D3 extends Component{
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Minecraft}></Route>
      </BrowserRouter>
    );
  }
}

export default D3;
