import * as d3 from 'd3'
/*
=== Start source ===
Make range of colors to use when rendering items in a bar chart or pie chart
Based on examples by Jerome Cukier and the d3 documentation
via https://github.com/d3/d3-scale#continuous-scales
via http://www.jeromecukier.net/2011/08/11/d3-scales-and-color/
	*/
const color = (data, colors = false) =>
  d3
    .scaleLinear()
    .domain([0, data.length])
    .range(colors)
/* === End source === */

const legend = {
  createOn: (chart) => {
    chart
      .append('g')
      .classed('legend', true)
  },
  update: (chart, data, color, width, height, margin) => {
    const group = chart
      .selectAll('.legend')
      .attr('style', `transform: translate(${width - margin.right + 20}px, ${height - margin.bottom - 20}px)`)
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('data-y', (d, i) => -25 * i)
      .attr('title', d => d['key'])
      .attr('fill', (d,i) => color(i))

    group
      .append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('y', function() {return this.parentNode.getAttribute('data-y')})

    group
      .append('text')
      .attr('dy', '0.8em')
      .attr('x', 30)
      .attr('y', function(){return this.parentNode.getAttribute('data-y')})
      .text(function(){return this.parentNode.getAttribute('title')})


  }
}
export default { color, legend }
