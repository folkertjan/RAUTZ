import * as d3 from 'd3'
import tooltip from '@/modules/d3/tooltip.js'
import helper from '@/modules/d3/helper.js'

const bar = {
  margin: { top: 20, right: 25, bottom: 100, left: 25 },

  draw(element, data) {
    const chart = d3.select(`#${element}`)

    chart
      .append('div')
      .classed('tooltip', true)
      .style('opacity', 0)
      .append('h4')

    const svg = chart
      .append('svg')
      .attr('width', this.width())
      .attr('height', this.height())

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
        `rotate(90) translate(${this.height() - this.margin.bottom / 2}, ${0 -
          this.width()})`
      )
      .attr('dy', '0.75em')
      .style('text-anchor', 'middle')
      .style('font-family', 'Montserrat')

    axis
      .append('text')
      .attr(
        'transform',
        `rotate(-90) translate(${0 -
          this.height() / 2 +
          this.margin.bottom / 2}, ${10})`
      )
      .attr('dy', '0.75em')
      .style('font-family', 'Montserrat')
      .style('text-anchor', 'middle')
    /* == End source == */

    svg.append('g').classed('parent', true)

    this.update(element, data)
  },

  update(element, data) {
    const color = helper.color(data)

    const svg = d3.select(`#${element} svg`)

    d3.select(`#${element}`)
      .attr('width', this.width())
      .attr('height', this.height())
    svg.attr('width', this.width()).attr('height', this.height())

    /*
		=== Start source ===
		Bar chart x scale, y scale, x axis and y axis
		From an example by Mike Bostock
		via https://beta.observablehq.com/@mbostock/d3-bar-chart
		Small edits by me to work with my visualisation
		*/
    const x = d3
      .scaleBand()
      .domain(data.map(d => d.name))
      .range([this.margin.left, this.width() - this.margin.right])
      .padding(0.1)

    const y = d3
      .scaleLinear()
      .domain([0, 100]) //d3.max(data, d => d.value)
      .nice()
      .range([this.height() - this.margin.bottom, this.margin.top])

    const xAxis = g =>
      g
        .attr('transform', `translate(0,${this.height() - this.margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll('text')
        .attr('y', 0)
        .attr('x', 10)
        .attr('dy', '.35em')
        .attr('transform', 'rotate(90)')
        .style('text-anchor', 'start')

    const yAxis = g =>
      g
        .attr('transform', `translate(${this.margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select('.domain').remove())

    svg.select('.xAxis').call(xAxis)

    svg.select('.yAxis').call(yAxis)
    /* === End source === */

    const chart = d3.select(`#${element} .parent`)

    const rect = chart.selectAll('rect').data(data)

    rect
      .enter()
      .append('rect')
      .attr('title', (d, i) => d.name)
      .on('mouseover', d => tooltip.show(element, `${d.name}: ${d.value}`))
      .on('mouseout', () => tooltip.hide(element))
      /* merge function learned from this great video by Curran Kelleher: https://www.youtube.com/watch?v=IyIAR65G-GQ */
      .attr('width', x.bandwidth())
      .attr('height', 0)
      .attr('x', d => x(d.name))
      .attr('y', d => this.height() - this.margin.bottom)
      .attr('width', x.bandwidth())
      .style('fill', (d, i) => color(i))
      .merge(rect)
      .transition()
      .duration(500)
      .delay((d, i, all) => i * (Math.round(100 / all.length) + 1))
      .attr('y', d => y(d.value))
      .attr('height', d => y(0) - y(d.value))

    rect
      .exit()
      .transition()
      .duration(500)
      .attr('height', 0)
      .attr('y', d => this.height() - this.margin.bottom)
      .remove()
  },

  height() {
    return this.width() * 1.25
  },

  width() {
    return window.innerWidth / 3 > 500 ? 500 : window.innerWidth / 3
  }
}

export default bar
