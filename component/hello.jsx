require('./hello.less')

import React, {Component} from 'react';
import Nav from './navbar/index.jsx';

class Hello extends Component{

  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}
export default Hello;
