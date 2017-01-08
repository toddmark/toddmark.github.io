import React, {Component} from 'react';
import Nav from '../navbar/index.jsx';

import * as d3 from "d3";
import rd3 from 'react-d3-library';



var node = document.createElement('div');

var branches = [];
var seed = {i: 0, x: 420, y: 600, a: 0, l: 130, d:0}; // a = angle, l = length, d = depth
var da = 0.5; // Angle delta
var dl = 0.8; // Length delta (factor)
var ar = 0.65; // Randomness
var maxDepth = 8;


// Tree creation functions
function branch(b) {
  var end = endPt(b), daR, newB;

  branches.push(b);

  if (b.d === maxDepth)
    return;

  // Left branch
  daR = ar * Math.random() - ar * 0.5;
  newB = {
    i: branches.length,
    x: end.x,
    y: end.y,
    a: b.a - da + daR,
    l: b.l * dl,
    d: b.d + 1,
    parent: b.i
  };
  branch(newB);

  // Right branch
  daR = ar * Math.random() - ar * 0.5;
  newB = {
    i: branches.length,
    x: end.x, 
    y: end.y, 
    a: b.a + da + daR, 
    l: b.l * dl, 
    d: b.d + 1,
    parent: b.i
  };
  branch(newB);
}

function regenerate(initialise) {
  branches = [];
  branch(seed);
  initialise ? create() : update();
}

function endPt(b) {
  // Return endpoint of branch
  var x = b.x + b.l * Math.sin( b.a );
  var y = b.y - b.l * Math.cos( b.a );
  return {x: x, y: y};
}


// D3 functions
function x1(d) {return d.x;}
function y1(d) {return d.y;}
function x2(d) {return endPt(d).x;}
function y2(d) {return endPt(d).y;}
function highlightParents(d) {
  var colour = d3.event.type === 'mouseover' ? 'green' : '#777';
  var depth = d.d;
  for(var i = 0; i <= depth; i++) {
    d3.select('#id-'+parseInt(d.i)).style('stroke', colour);
    d = branches[d.parent];
  } 
}

function create() {
  d3.select(node).append('svg')
    .attr('height', 650)
    .attr('width', 960)
    .selectAll('line')
    .data(branches)
    .enter()
    .append('line')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .style('stroke-width', function(d) {return parseInt(maxDepth + 1 - d.d) + 'px';})
    .attr('id', function(d) {return 'id-'+d.i;})
    .on('mouseover', highlightParents)
    .on('mouseout', highlightParents);
}

function update() {
  d3.select('svg')
    .selectAll('line')
    .data(branches)
    .transition()
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2);
}

regenerate(true);

d3.select(node).select('svg').on('click', regenerate);

export default class BinaryTree extends Component{
  //  getInitialState: function() {
  //   return {d3: ''}
  // },
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
    let RD3Component = rd3.Component;
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
}
