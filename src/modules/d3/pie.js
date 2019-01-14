import * as d3 from 'd3'
import tooltip from '@/modules/d3/tooltip.js'
import helper from '@/modules/d3/helper.js'

const pie = {
  draw(element, data) {
    const width = window.innerWidth / 4

    const chart = d3.select(`#${element}`)

    chart
      .append('div')
      .classed('tooltip', true)
      .style('opacity', 0)
      .append('h4')

    chart
      .append('svg')
      .attr('width', width)
      .attr('height', width)
      .append('g')
      .classed('parent', true)
      .attr('transform', `translate(${width / 2}, ${width / 2})`)

    this.update(element, data)
  },

  update(element, data) {
    const color = helper.color(data)
    const width = window.innerWidth / 4
    d3.select(`#${element}`)
      .attr('width', width)
      .attr('height', width)
    d3.select(`#${element} svg`)
      .attr('width', width)
      .attr('height', width)
    d3.select(`#${element} .parent`).attr(
      'transform',
      `translate(${width / 2}, ${width / 2})`
    )
    const radius = width / 2

    /*
		=== Start source ===
		arc and pie functions to correctly configure pie charts
		From an example by Chuck Grimmett
		via http://www.cagrimmett.com/til/2016/08/19/d3-pie-chart.html
		*/
    const arc = d3
      .arc()
      .outerRadius(radius)
      .innerRadius(0)

    const pie = d3
      .pie()
      .sort(null)
      .value(d => d.value)
    /* === End source === */

    const chart = d3.select(`#${element} .parent`)

    const path = chart.selectAll('path').data(pie(data), (d, i) => 'path' + i)

    path
      .enter()
      .append('path')
      .attr('title', (d, i) => d.name)
      .on('mouseover', d => tooltip.show(element, `${d.value}`))
      .on('mouseout', () => tooltip.hide(element))
      .style('fill', (d, i) => color(i))
      /* Saves initial arc value, by example from Mike Bostock (https://bl.ocks.org/mbostock/1346410) */
      .each((d, i, all) => (all[i]._current = d))
      .transition()
      .duration(500)
      .attrTween('d', enterTween)

    path
      .transition()
      .style('fill', (d, i) => color(i))
      .duration(500)
      .attrTween('d', arcTween)

    path
      .exit()
      .transition()
      .duration(500)
      .attrTween('d', leaveTween)
      .remove()

    // same as next function but still don't know how to work with next function to go from 0 on enter
    function enterTween(d) {
      const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d)
      return t => arc(i(t))
    }
    function leaveTween(d) {
      const i = d3.interpolate(d, { startAngle: 0, endAngle: 0 })
      return t => arc(i(t))
    }
    /*
		=== Start source ===
		Interpolate between previous endpoint of datapoint arc and new endpoint
		From an example by Mike Bostock
		via https://bl.ocks.org/mbostock/1346410
		*/
    function arcTween(d) {
      const i = d3.interpolate(this._current, d)
      this._current = i(0)
      return t => arc(i(t))
    }
    /* === End source === */
  }
}

export default pie
