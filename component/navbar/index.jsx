import React, {Component} from 'react';
export default class Nav extends Component{
  render() {
    return(
      <div>
        <ul className="nav nav-tabs navbar-inverse" role="navigation">
          <li role="presentation" class="active">
            <a href="./index">Home</a>
          </li>
          <li role="presentation">
            <a href="./profile">Profile</a>
          </li>
          <li role="presentation">
            <a href="./about">About</a>
          </li>
        </ul>
      </div>
    )
  }
}
