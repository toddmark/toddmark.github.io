import React, {Component} from 'react';
import d3 from 'd3';
import rd3 from 'react-d3-library';
import {node} from './mincraftNode.js';

const RD3Component = rd3.Component;

class Mincraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d3: ''
    }
  }

  componentDidMount() {
    this.setState({d3: node});
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
}

export default Mincraft;