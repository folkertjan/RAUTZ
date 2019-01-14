import * as d3 from 'd3'

const data = file =>
  d3.csv(file).then(raw => {
    // const dsv = d3.dsvFormat(';')
    // const data = dsv.parse(raw)
    return raw
  })

// hh_income_perc_cocoa
// hh_income_perc_othercrops
// hh_income_perc_smallbusiness
// hh_income_perc_livestock
// hh_income_perc_ etc
const income = data => {
  const reform = [
    {
      name: 'cocoa',
      value: Math.round(
        d3.mean(data.map(farmer => Number(farmer.hh_income_perc_cocoa))) * 100
      )
    },
    {
      name: 'othercrops',
      value: Math.round(
        d3.mean(data.map(farmer => Number(farmer.hh_income_perc_othercrops))) *
          100
      )
    },
    {
      name: 'livestock',
      value: Math.round(
        d3.mean(data.map(farmer => Number(farmer.hh_income_perc_livestock))) *
          100
      )
    },
    {
      name: 'smallbusiness',
      value: Math.round(
        d3.mean(
          data.map(farmer => Number(farmer.hh_income_perc_smallbusiness))
        ) * 100
      )
    }
  ]
  const rest =
    reform[0].value + reform[1].value + reform[2].value + reform[3].value
  reform.push({
    name: 'other',
    value: 100 - rest
  })
  return reform.map(
    obj => (isNaN(obj.value) ? { name: obj.name, value: 0 } : obj)
  )
}

export default { data, income }
