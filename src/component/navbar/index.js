// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
import { Link, NavLink } from "react-router-dom";

export default class Nav extends Component{
  componentWillMount() {
  }
  render() {
    return(
      <div>
        <nav style={{zIndex: 9}} className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-brand">
                <img style={{width: 20}} src={require("../img/witcher.jpeg")} alt=""/>
              </div>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="">
                  <a href="index.html">Home</a>
                </li>
                <li className="">
                  {/* <a href="/index.html#/hello">Hello</a> */}
                  <NavLink to="/hello" activeStyle={{color: "#fff", background: "#777"}}>Hello</NavLink>
                </li>
                <li>
                  <NavLink to="/game" activeStyle={{color: "#fff", background: "#777"}}>Game</NavLink>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sandbox <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><Link to="/sandbox">Index</Link></li>
                    <li><Link to="/sandbox/binarytree">binarytree</Link></li>
                    <li><Link to="/sandbox/randomSelect">randomSelect</Link></li>
                    <li className="divider"></li>
                    <li><a href="#">Separated Link</a></li>
                    <li className="divider"></li>
                    <li><a href="/redux-demo">Redux-demo</a></li>
                  </ul>
                </li>
                <li className="">
                  <NavLink to="/about" activeStyle={{color: "#fff", background: "#777"}}>About</NavLink>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">d3.js Demo <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="/d3.html">Home</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    );
  }
}
