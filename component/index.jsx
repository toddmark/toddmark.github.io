// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';  
import Particles from 'react-particles-js';
import { Link } from 'react-router';
import particlesProps from './particleProps.js';
import './index.less';
import Unsplash from 'unsplash-js';

// utility
import Carousel from './utility/carousel.jsx';

const unsplash = new Unsplash({
  applicationId: 'f8b303ea98159bfa3b94f81308eec8dc020f89bcd898f8502f41e6b1bbabd40d',
  secret: '532d6e0f6979bdd3d8c875ad55d2300280b94f3edc27b74ac311eb44f6b414bc',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
});

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr: []
    };
  }
  componentDidMount() {
    this.getImage();
  }
  getImage() {
    const width = 600;
    const height = 600;
    let imgLength = 3;
    let imgArr = [];
    do {
      const imgSrc = `https://unsplash.it/${width}/${height}/?random`;
      imgArr.push(imgSrc);
      imgLength--;
    }
    while (imgLength > 0);
    this.setState({
      imgArr
    });
  }
  render() {
    return (
      <div>
        <div className="btn btn-default">
          <a href="/blog">Story</a>
        </div>
        <div className="btn btn-default">
          <Link to="/hello">Mill</Link>
        </div>
        <div className="flex-parent">
          <Carousel imgArr={this.state.imgArr} />  
        </div>
        <Particles
          style={{ position: 'absolute', left: 0, top: 0, zIndex: -2 }}
          width='100%'
          height='100%'
          params={particlesProps}
        />
      </div>
    );
  }
}
