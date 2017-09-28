require("./hello.less");

import {TweenMax, TimelineMax} from "gsap";
import ScrollMagic from "scrollmagic";
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
import Nav from "./navbar";

export default class Hello extends Component {

  constructor(props) {
    super(props);
    this.title = "JavaScript was initially created to make webpages alive. The programs in this language are called scripts. They can be written right in the HTML and execute automatically as the page loads. Scripts are provided and executed as a plain text. They don’t need a special preparation or a compilation to run.";
  }

  componentDidMount() {
    const self = this;
    this.controller = new ScrollMagic.Controller();
    // create a scene
    const spanArray = document.getElementById("stick").getElementsByTagName("span");
    new TimelineMax()
      .add(TweenMax.staggerTo(spanArray, 0.25, {y: -20, x: -15, scale: 1.2, color: "#667" }, 0.1))
      .add(TweenMax.staggerTo(spanArray, 0.25, {y: 0, x: 0, scale: 1, color: "#667"}, 0.1), 0.25);
    new ScrollMagic.Scene({
      duration: 2000,  // the scene should last for a scroll distance of 100px
    })
      .setPin("#stick") // pins the element for the the scene's duration
      .setTween(spanArray, 0.5, {y: 30, opacity: 0.5})
      .addTo(this.controller);
  }

  render() {
    return (
      <div id="wrapper" style={{ height: 2000 }}>
        <Nav />
        <h3 id="stick" style={{padding: 10}}>{this.title.split("").map((item, key)=>{
          item = item === " " ? "\u00A0" : item;
          return (<span style={{display: "inline-block"}} key={key}>{item}</span>);
        })}</h3>
      </div>
    );
  }
}
