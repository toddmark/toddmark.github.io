const node = document.createElement('div');

const stage = d3.select(node).append('svg');
stage
  .attr('width', '1000').attr('height', '750').attr("transform", "translate(20,20)")
  .style('background', '#eee')

module.exports = {
  node
};
