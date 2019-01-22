import * as d3 from 'd3'
import tooltip from '@/modules/d3/tooltip.js'
import helper from '@/modules/d3/helper.js'

const bar = {
  margin: { top: 20, right: 25, bottom: 40, left: 175 },

  draw(element, data, factor, perc) {
    const bounds = this.bounds(factor, perc)
    const width = bounds.width
    const height = bounds.height

    const chart = d3.select(`#${element}`)

    chart
      .append('div')
      .classed('tooltip', true)
      .style('opacity', 0)
      .append('h4')

    const svg = chart
      .append('svg')
      .attr('width', width)
      .attr('height', height)

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
    // axis
    //   .append('text')
    //   .attr(
    //     'transform',
    //     `rotate(90) translate(${width - this.margin.bottom / 2}, ${0 -
    //       width})`
    //   )
    //   .attr('dy', '0.75em')
    //   .style('text-anchor', 'middle')
    //
    // axis
    //   .append('text')
    //   .attr(
    //     'transform',
    //     `rotate(-90) translate(${0 -
    //       width / 2 +
    //       this.margin.bottom / 2}, ${10})`
    //   )
    //   .attr('dy', '0.75em')
    //   .style('text-anchor', 'middle')
    /* == End source == */

    svg.append('g').classed('parent', true)

    this.update(element, data, factor, perc)
  },

  update(element, data, factor, perc) {
    if (!data || data.length === 0) {
      return
    }
    const bounds = this.bounds(factor, perc)
    const width = bounds.width
    const height = bounds.height


    const color = helper.color(data.values, data.colors)

    const svg = d3.select(`#${element} svg`)

    d3.select(`#${element}`)
      .attr('width', width)
      .attr('height', height)
    svg.attr('width', width).attr('height', height)

    /*
		=== Start source ===
		Bar chart x scale, y scale, x axis and y axis
		From an example by Mike Bostock
		via https://beta.observablehq.com/@mbostock/d3-bar-chart
		Small edits by me to work with my visualisation
		*/

    const y = d3
      .scaleBand()
      .domain(data.domain)
      .padding(0.6)
      .range([height - this.margin.bottom, this.margin.top])


    const x = d3
      .scaleLinear()
      .domain([0, 100])
      .nice()
      .range([this.margin.left, width - this.margin.right])

    const xAxis = g =>
      g
        .attr('transform', `translate(0,${height - this.margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        // .call(g => g.select('.domain').remove())
        .selectAll('text')
        .attr('y', 20)
        .attr('x', 0)
        .attr('dy', '.35em')
        // .attr('transform', 'rotate(90)')
        .style('text-anchor', 'middle')

    const yAxis = g =>
      g
        .attr('transform', `translate(${this.margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select('.domain').remove())

    svg.select('.xAxis').call(xAxis)

    svg.select('.yAxis').call(yAxis)
    /* === End source === */

    const chart = d3.select(`#${element} .parent`)

    const rect = chart.selectAll('rect').data(data.values)

    const text = chart.selectAll('text').data(data.values)


    text
      .enter()
      .append('text')
      .text(d => `${d.value}%`)
      .attr('x', d => x(d.value) + 10)
      .attr('y', d => y(d.name) + y.bandwidth() - 2)
      .merge(text)
      .transition()
      .duration(500)
      // .delay((d, i, all) => i * (Math.round(100 / all.length) + 1))
      .attr('x', d => x(d.value) + 10)
      .attr('y', d => y(d.name) + y.bandwidth() - 2)
      .text(d => `${d.value}%`)

    text
      .exit()
      .transition()
      .duration(500)
      .attr('x', x(0))
      .remove()

    rect
      .enter()
      .append('rect')
      .attr('title', (d, i) => d.name)
      .on('mouseover', d => tooltip.show(element, `${d.name}: ${d.value}`))
      .on('mouseout', () => tooltip.hide(element))
      /* merge function learned from this great video by Curran Kelleher: https://www.youtube.com/watch?v=IyIAR65G-GQ */
      .attr('height', y.bandwidth())
      .attr('width', 0)
      .attr('y', d => y(d.name))
      .attr('x', d => x(0))
      .style('fill', (d, i) => color(i))
      .merge(rect)
      .transition()
      .duration(500)
      // .delay((d, i, all) => i * (Math.round(100 / all.length) + 1))
      .attr('y', d => y(d.name))
      .attr('width', d => x(d.value) - this.margin.left)
      .attr('height', y.bandwidth())

    rect
      .exit()
      .transition()
      .duration(500)
      .attr('width', 0)
      .remove()
  },
  bounds(factor, perc) {
    const scrwidth = document.querySelector('#landing .container').offsetWidth
    let width = scrwidth * perc
    return {width, height: width * factor}
  }
}

export default bar
