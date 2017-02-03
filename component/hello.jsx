require('./hello.less')

import {TweenMax,TimelineLite, TimelineMax} from 'gsap'
import ScrollMagic from 'scrollmagic'
import IScroll from 'iscroll/build/iscroll-probe.js'
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')

import React, {Component} from 'react';
import Nav from './navbar';

export default class Hello extends Component{

  constructor(props) {
    super(props);
    this.title = 'Hi, welcome Lily & Todd Mark\'s honey home.';
  }

  componentDidMount() {
    const self = this;
    this.controller = new ScrollMagic.Controller({container: '#scrollContainer'});
    // create a scene
    const spanArray = document.getElementById('stick').getElementsByTagName('span');
    var laola = new TimelineMax()
      .add(TweenMax.staggerTo(spanArray, 0.5, {y: -20, x: -15, scale: 1.2, color: '#ff4468' }, 0.2))
      .add(TweenMax.staggerTo(spanArray, 0.5, {y: 0, x: 0, scale: 1, color: '#ff4468'}, 0.2), 0.5);
    new ScrollMagic.Scene({
        duration: 1000,  // the scene should last for a scroll distance of 100px
      })
      .setPin("#stick") // pins the element for the the scene's duration
      .setTween(laola)
      .addTo(this.controller);
    // this.initIScroll();
  }

  initIScroll() {
    const self = this;
    var willScroll = new IScroll('#scrollContainer', {
      // don't scroll horizontal
      scrollX: false,
      // but do scroll vertical
      scrollY: true,
      // show scrollbars
      scrollbars: true,
      // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
      // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
      useTransform: false,
      // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
      useTransition: false,
      // set to highest probing level to get scroll events even during momentum and bounce
      // requires inclusion of iscroll-probe.js
      probeType: 3,
      // pass through clicks inside scroll container
      click: true
    });
    this.controller.scrollPos(function () {
      return -willScroll.y;
    });
    willScroll.on("scroll", function () {
      self.controller.update();
    });
  }

  render() {
    return (
      <div id="scrollContainer" style={{height: '100vh', overflow: 'auto'}}>
        <div id="wrapper" style={{height: 2000}}>
          <Nav />
          <h5 style={{padding: 10, color: '#ccc'}}>please scroll down to the bottom page.</h5>
          <h3 id="stick" style={{padding: 10}}>{this.title.split('').map((item, key)=>{
            return (<span style={{display: 'inline-block'}} key={key}>{item}</span>);
          })}</h3>
          <h1 className={"text-info"} style={{textAlign: 'center'}}>End</h1>
        </div>
      </div>
    )
  }
}
