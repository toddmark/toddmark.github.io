require('./hello.less')

import {TweenMax,TimelineLite} from 'gsap'
import ScrollMagic from 'scrollmagic'
// require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')

import React, {Component} from 'react';
import Nav from './navbar';

export default class Hello extends Component{

  componentDidMount() {
    var controller = new ScrollMagic.Controller();
    // create a scene
    new ScrollMagic.Scene({
          duration: 1000,  // the scene should last for a scroll distance of 100px
      })
      .setPin("#stick") // pins the element for the the scene's duration
      // .setTween(TweenMax.to("#stick", 1, {y: 100, color: '#69a'}))
      .addTo(controller);
    TweenMax.to("#stick", 1, {y: 100, yoyo: true, repeat: -1, color: '#69a'});
  }

  render() {
    return (
      <div style={{height: 2000}}>
        <Nav />
        <h3 id="stick" style={{padding: 10}}>Hi, Lily & Todd Mark. <br/> It's your honey home.</h3>
      </div>
    )
  }
}
