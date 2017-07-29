import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router'


export default class Nav extends Component{
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
                <img style={{width: 20}} src={require('../img/witcher.jpeg')} alt=""/>
              </div>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sandbox <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><Link to="/sandbox">Index</Link></li>
                    <li><Link to="/sandbox/binarytree">binarytree</Link></li>
                    <li className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li className="divider"></li>
                    <li><a href="/redux-demo">Redux-demo</a></li>
                  </ul>
                </li>
                <li className="">
                  <Link to="/about">About</Link>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">d3.js Demo <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="./d3.html">Home</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}
