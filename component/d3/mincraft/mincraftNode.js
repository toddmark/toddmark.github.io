const node = document.createElement('div');

const width = 1000;
const height = 750;
const rectSize = 50;
const x = width / rectSize;
const y = height / rectSize;
const stage = d3.select(node).append('svg');
stage.attr('width', width).attr('height', 750).style('background', '#eee')
stage.selectAll('rect').data(d3.range( x * y))
  .enter().append('rect').attr('transform', translate).attr('width', rectSize).attr('height', rectSize).style('stroke', '#000').style('fill', '#fff')

function translate(d) {
  return `translate(${ d % x * rectSize },${ Math.floor(d / x) * rectSize })`
}

module.exports = {
  node
};
