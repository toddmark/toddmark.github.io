require('./hello.less')

import React, {Component} from 'react';
import Nav from './navbar';

export default class Hello extends Component{

  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}
