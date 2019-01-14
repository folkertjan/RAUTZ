import * as d3 from 'd3'

const show = (element, text) =>
  d3
    .select(`#${element} .tooltip`)
    .style(
      'left',
      `${d3.event.pageX}px`
    ) /* d3.event learned from denniswegereef (https://github.com/denniswegereef) */
    .style(
      'top',
      `${d3.event.pageY - 30}px`
    ) /* d3.event learned from denniswegereef (https://github.com/denniswegereef) */
    .transition()
    .duration(300)
    .style('opacity', 0.8)
    .select('h4')
    .text(text)
const hide = element =>
  d3
    .select(`#${element} .tooltip`)
    .transition()
    .duration(300)
    .style('opacity', 0)

export default { show, hide }
