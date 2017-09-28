import React, {Component} from 'react';
import rd3 from 'react-d3-library';
import { node, update } from './mincraftNode.js';

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

  resetPaint() {
    update();
  }

  render() {
    return (
      <div className="container">
        <div style={{marginTop: 20}} className="panel panel-info">
          <div className="panel-heading">Tools</div>
          <div className="panel-body">
            <div className="btn-group">
              <button type="button" className="btn btn-danger" onClick={this.resetPaint}>Clean</button>
            </div>
          </div>
        </div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
}

export default Mincraft;