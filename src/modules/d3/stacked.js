import * as d3 from 'd3'
import tooltip from '@/modules/d3/tooltip.js'
import helper from '@/modules/d3/helper.js'

const bar = {
  margin: { top: 20, right: 200, bottom: 100, left: 80 },

  draw(element, data, factor, perc, axisTitles) {
    const chart = d3.select(`#${element}`)
    const bounds = this.bounds(factor, perc)
    const width = bounds.width
    const height = bounds.height

    chart
      .append('div')
      .classed('tooltip', true)
      .style('opacity', 0)
      .append('h4')

    const svg = chart
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    helper.legend.createOn(svg)

    const axis = svg.append('g').classed('axis', true)

    axis.append('g').classed('xAxis', true)

    axis.append('g').classed('yAxis', true)

    /*
		== Start source ==
		Appending text to use as axis titles.
		From an example by d3noob:
		https://bl.ocks.org/d3noob/23e42c8f67210ac6c678db2cd07a747e
		Small tweaks to work with my visualisation
		*/

    axis
      .append('text')
      .attr(
        'transform',
        `rotate(-90) translate(${0 -
          height / 2 +
          this.margin.bottom / 2}, ${0})`
      )
      .attr('dy', '0.75em')
      .style('text-anchor', 'middle')
      .text(axisTitles[0])

    axis
      .append('text')
      .attr(
        'transform',
        `rotate(90) translate(${height - this.margin.bottom / 2}, ${0 -
          width})`
      )
      .attr('dy', '0.75em')
      .style('text-anchor', 'middle')
      .text(axisTitles[1])

    /* == End source == */

    svg.append('g')
      .classed('parent', true)
      // .attr('transform', `translate(${this.margin.left * 2},0)`)

    this.update(element, data, factor, perc)
  },

  update(element, data, factor, perc) {
    if (!data || !data.values || data.values.length === 0) {
      return
    }
    const bounds = this.bounds(factor, perc)
    const width = bounds.width
    const height = bounds.height

    const keys = Object.keys(data.values[0])
    const index = keys.indexOf('total')
    if (index !== -1) keys.splice(index, 1)

    const stack = d3.stack()
      .keys(keys)

    const stacked = stack(data.values)

    const color = helper.color(stacked, data.colors)

    /*
		=== Start source ===
		Bar chart x scale, y scale, x axis and y axis
		From an example by Mike Bostock
		via https://beta.observablehq.com/@mbostock/d3-bar-chart
		Small edits by me to work with my visualisation
		*/


    const x = d3
      .scaleBand()
      .domain(data.domain)
      .range([this.margin.left, width - this.margin.right])
      .padding(0.1)

    const y = d3
      .scaleLinear()
      .domain([0, data.values[0].total]) //d3.max(data, d => d.value)
      .nice()
      .range([height - this.margin.bottom, this.margin.top])

    const xAxis = g =>
      g
        .attr('transform', `translate(0,${height - this.margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll('text')
        .attr('y', 20)
        .attr('x', 0)
        .attr('dy', '.35em')
        // .attr('transform', 'rotate(90)')
        .style('text-anchor', 'center')

    const yAxis = g =>
      g
        .attr('transform', `translate(${this.margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select('.domain').remove())

    const svg = d3.select(`#${element} svg`)

    helper.legend.update(svg, stacked, color, width, height, this.margin)


    svg.select('.xAxis').call(xAxis)

    svg.select('.yAxis').call(yAxis)
    /* === End source === */

    const chart = d3.select(`#${element} .parent`)

    const group = chart
      .selectAll('g')
      .data(stacked)

    const groupEnter = group
      .enter()
      .append('g')
      .attr('title', d => d['key'])
      .style('fill', (d, i) => color(i))

    const rect = groupEnter
      .merge(group)
      .selectAll('rect')
      .data(d=>d)

    const enterRect = rect
      .enter()
      .append('rect')
      .on('mouseover', (d, i, all) => tooltip.show(element, `${all[i].parentNode.getAttribute('title')}: ${d[1] - d[0]}`))
      .on('mouseout', () => tooltip.hide(element))
      .attr('height', d => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth())
      .attr('x', (d, i) => x(data.domain[i]))
      .attr('y', d => y(d[1]))


    rect
      .exit()
      .transition()
      .duration(500)
      .style('opacity', 0)
      .remove()

    enterRect
      .merge(rect)
      .transition()
      .duration(500)
      .attr('height', d => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth())
      .attr('x', (d, i) => x(data.domain[i]))
      .attr('y', d => y(d[1]))


  },
  bounds(factor, perc) {
    const scrwidth = document.querySelector('#landing .container').offsetWidth
    let width = scrwidth * perc
    return {width, height: width * factor}

  }
}

export default bar
