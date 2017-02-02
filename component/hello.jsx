require('./hello.less')

import {TweenMax,TimelineLite, TimelineMax} from 'gsap'
import ScrollMagic from 'scrollmagic'
import IScroll from 'iscroll'
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')

import React, {Component} from 'react';
import Nav from './navbar';

export default class Hello extends Component{

  constructor(props) {
    super(props);
    this.title = 'Hi, welcome Lily & Todd Mark\'s honey home.';
  }

  componentDidMount() {
    new IScroll('#wrapper')
    var controller = new ScrollMagic.Controller();
    // create a scene
    const spanArray = document.getElementById('stick').getElementsByTagName('span');
    var laola = new TimelineMax()
      .add(TweenMax.staggerTo(spanArray, 0.5, {y: -20, x: -15, scale: 1.2, color: '#ff4468' }, 0.2))
      .add(TweenMax.staggerTo(spanArray, 0.5, {y: 0, x: 0, scale: 1, color: '#ccc'}, 0.2), 0.5);
    new ScrollMagic.Scene({
        duration: 1000,  // the scene should last for a scroll distance of 100px
      })
      .setPin("#stick") // pins the element for the the scene's duration
      // .setTween(TweenMax.to("#stick", 1, {y: 100, color: '#69a'}))
      .setTween(laola)
      .addTo(controller);
  }

  render() {
    return (
      <div id="wrapper" style={{height: 2000}}>
        <Nav />
        <h5 style={{padding: 10, color: '#ccc'}}>please scroll down to the bottom page.</h5>
        <h3 id="stick" style={{padding: 10}}>{this.title.split('').map((item, key)=>{
          return (<span style={{display: 'inline-block'}} key={key}>{item}</span>);
        })}</h3>
        <h1 className={"text-info"} style={{textAlign: 'center'}}>End</h1>
      </div>
    )
  }
}
