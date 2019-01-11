import * as d3 from 'd3'

const format = file =>
  d3.csv(file).then(raw => {
    // const dsv = d3.dsvFormat(';')
    // const data = dsv.parse(raw)
    return raw
  })

export default { format }
