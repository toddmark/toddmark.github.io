require('../assets/less/index.less')

import React, {Component} from 'react';

class Hello extends Component{

  render() {
    return (
      <div>Boot Strap
        <p className="">
          <img src={require('./witcher.jpeg')} alt=""/>
        </p>
      </div>
    )
  }
}
export default Hello;
