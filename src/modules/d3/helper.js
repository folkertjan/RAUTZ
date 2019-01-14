import * as d3 from 'd3'
/*
=== Start source ===
Make range of colors to use when rendering items in a bar chart or pie chart
Based on examples by Jerome Cukier and the d3 documentation
via https://github.com/d3/d3-scale#continuous-scales
via http://www.jeromecukier.net/2011/08/11/d3-scales-and-color/
	*/
const color = data =>
  d3
    .scaleLinear()
    .domain([0, Math.round(data.length / 2), data.length])
    .range(['#618058', '#b5e2e1', '#e68577'])
/* === End source === */

export default { color }
