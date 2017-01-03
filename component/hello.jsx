require('./hello.less')

import React, {Component} from 'react';
import Nav from './navbar/index.jsx';

class Hello extends Component{

  render() {
    return (
      <div>Boot Strap
        <Nav />
        <p className="">
          <img src={require('./witcher.jpeg')} alt=""/>
        </p>
      </div>
    )
  }
}
export default Hello;
