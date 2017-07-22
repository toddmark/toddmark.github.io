const node = document.createElement('div');

const rectSize = 25;
const lines = 32;
const columns = 32;
const defaultColor = '#eee'
const width = columns * rectSize;
const height = lines * rectSize;
const x = width / rectSize;
const y = height / rectSize;

// create rect
function initStage() {
  d3.select(node).append('svg')
    .attr('width', width) .attr('height', height) .style('background', '#000') 
    .selectAll('rect')
      .data(d3.range( x * y))
        .enter()
          .append('rect')
            .attr('transform', translate)
              .attr('width', rectSize)
                .attr('height', rectSize)
                  .style('stroke', '#eff')
                    .style('fill', defaultColor);
}

function update() {
  console.log(d3.select('svg').selectAll('rect'))
  d3.select('svg').selectAll('rect')
      .data(d3.range( x * y))
        .attr('transform', translate)
          .attr('width', rectSize)
            .attr('height', rectSize)
              .style('stroke', '#eff')
                .style('fill', defaultColor);
}

initStage();

d3.select(node).select('svg').selectAll('rect').on('click', function(){
  if (d3.select(this).attr('data-choosed') == 'true') {
    d3.select(this).style('fill', defaultColor).attr('data-choosed', false)
  } else {
    d3.select(this).style('fill', '#000').attr('data-choosed', true)
  }
})

function translate(d) {
  return `translate(${ d % x * rectSize },${ Math.floor(d / x) * rectSize })`
}

module.exports = {
  node,
  update 
};
