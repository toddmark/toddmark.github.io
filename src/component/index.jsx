// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Particles from "react-particles-js";
import particlesProps from "./particleProps.js";
import "./index.less";

// utility
// import Carousel from './utility/carousel.jsx';
import Jumbotron from "./utility/Jumbotron.jsx";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="container flex-parent">
          <Jumbotron content={{ title: "Welcome! Visitors!" }} />
        </div>
        <Particles
          style={{ position: "absolute", left: 0, top: 0, zIndex: -99 }}
          width='100%'
          height='100%'
          params={particlesProps}
        />
      </div>
    );
  }
}
