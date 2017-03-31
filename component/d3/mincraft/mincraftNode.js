const node = document.createElement('div');

const width = 1000;
const height = 250;
const rectSize = 50
const x = width / rectSize;
const y = height / rectSize;
const stage = d3.select(node).append('svg');

stage.attr('width', width).attr('height', height).style('background', '#eee')
// create rect
stage.selectAll('rect').data(d3.range( x * y))
  .enter().append('rect').attr('transform', translate).attr('width', rectSize).attr('height', rectSize).style('stroke', '#eff').style('fill', '#eee');

const allRect = stage.selectAll('rect');
allRect.on('click', function(){
  console.log(this);
  d3.select(this).style('fill', '#000');
})

function translate(d) {
  return `translate(${ d % x * rectSize },${ Math.floor(d / x) * rectSize })`
}

module.exports = {
  node
};
