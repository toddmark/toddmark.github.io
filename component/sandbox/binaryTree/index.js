import React, { Component } from 'react';
import d3 from "d3";
import rd3 from 'react-d3-library';
import { node, regenerate } from './binaryTreeNode.js';
import './binaryTree.less'
import Nav from '../../navbar';

export default class BinaryTree extends Component{

  constructor(props) {
    super(props);
    this.state = {
      d3: '',
      distance: 0
    }
    this.timer = null;
  }

  componentDidMount() {
    this.setState({d3: node});
    this.progressAnimate();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progressAnimate() {
    const time = 1;
    const speed = 100 / time;
    const step = 500;
    const self = this;
    let distance = 0;
    this.timer = setInterval(function() {
      distance += 10;
      if (distance > 100) {
        console.log(distance)
        regenerate();
        distance = 0;
        // clearInterval(timer);
      }
      self.setState({
        distance: distance
      })
    }, step)
  }

  render() {
    let RD3Component = rd3.Component;
    return (
      <div>
        <div className="progress">
          <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.state.distance}%`}}>
            {this.state.distance}%
          </div>
        </div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
}
