import * as d3 from 'd3'

const data = file =>
  d3.text(file).then(raw => {
    const dsv = d3.dsvFormat(';')
    const data = dsv.parse(raw)
    return data
  })

// hh_income_perc_cocoa
// hh_income_perc_othercrops
// hh_income_perc_smallbusiness
// hh_income_perc_livestock
// hh_income_perc_ etc

const checkValues = (objArr, value = false) => {
  if (!value) {
    objArr.map(obj => {
      const keys = Object.keys(obj)
      keys.forEach(key => {
        obj[key] = isNaN(obj[key]) ? 0 : obj[key]
      })
      return obj
    })
  } else {
    objArr.map(obj => {
      obj.value = isNaN(obj.value) ? 0 : obj.value
      return obj
    })
  }

  return objArr
}
const landsize = (data, mean = false) => {
  let land;
  if (mean) {
    land = d3.mean(data.map(farmer => Number(farmer.all_land_owned_ha.split(',').join('.'))))
  } else {
    land = d3.median(data.map(farmer => Number(farmer.all_land_owned_ha.split(',').join('.'))))
  }
  return land
}

const ppi = (data, mean = false) => {
  let ppi
  if (mean) {
    ppi = {
      d190: Math.round(d3.mean(data.map(farmer => Number(farmer.PPI_190dollar_day.split(',').join('.'))))),
      d310: Math.round(d3.mean(data.map(farmer => Number(farmer.PPI_310dollar_day.split(',').join('.')))))
    }
  } else {
    ppi = 0
    ppi = {
      d190: Math.round(d3.median(data.map(farmer => Number(farmer.PPI_190dollar_day.split(',').join('.'))))),
      d310: Math.round(d3.median(data.map(farmer => Number(farmer.PPI_310dollar_day.split(',').join('.')))))
    }
  }
  const result = [{name: 'Below $1.90 a day', value: ppi.d190}, {name: 'Below $3.10 a day', value: ppi.d310}, {name: 'Over $3.10 a day', value: 100 - ppi.d310}]
  return {values: result, domain: result.map(d => d.name), colors: ['#e0b730', '#e0b730'] }
}

const income = (data, mean = false) => {
  const filtered = data.filter(farmer => {
    const cocoa_income = farmer.cocoa_marketing_income_usd.split(',').join('.')
    return Number(cocoa_income) > 0
  })
  let income, memsize;
  if (mean) {
    income = d3.mean(
      filtered.map(
        farmer => {
          const cocoa_income = farmer.cocoa_marketing_income_usd.split(',').join('.')
          return Number(cocoa_income) / Number(farmer.hh_income_perc_cocoa.split(',').join('.'))
        }
      )
    )
    memsize = d3.mean(
      filtered.map(
        farmer => Number(farmer.hhmem_number.split(',').join('.'))
      )
    )
  } else {
    income = d3.median(
      filtered.map(
        farmer => {
          const cocoa_income = farmer.cocoa_marketing_income_usd.split(',').join('.')
          return Number(cocoa_income) / Number(farmer.hh_income_perc_cocoa.split(',').join('.'))
        }
      )
    )
    memsize = d3.median(
      filtered.map(
        farmer => Number(farmer.hhmem_number.split(',').join('.'))
      )
    )
  }
  return {
    filtered: filtered,
    total: filtered.length,
    income: Math.round(income),
    memsize: Math.round(memsize)
  }
}

const nutrients = data => {
  let reform = [
    {
      name: 'Granular fertilizer',
      value: Math.round(
        data.filter(farmer => farmer.cocoa_gfert_yn == 1).length / data.length * 100
      )
    },
    {
      name: 'Liquid fertilizer',
      value: Math.round(
        data.filter(farmer => farmer.cocoa_lfert_yn == 1).length / data.length * 100
      )
    },
    {
      name: 'Fungicides',
      value: Math.round(
        data.filter(farmer => farmer.cocoa_fung_yn == 1).length / data.length * 100
      )
    },
    {
      name: 'Herbicides',
      value: Math.round(
        data.filter(farmer => farmer.cocoa_herb_yn == 1).length / data.length * 100
      )
    },
    {
      name: 'Pesticides',
      value: Math.round(
        data.filter(farmer => farmer.cocoa_pest_yn == 1).length / data.length * 100
      )
    },
  ]
  reform = checkValues(reform, true)
  reform.sort((a,b) => a.value - b.value)
  const result = {values: reform, domain: reform.map(d => d.name), colors: ['#e0b730', '#e0b730'] }
  return result
}

const incomeStack = (data, mean = false) => {
  let reform;
  if (mean){
    reform = {
      cocoa: Math.round(d3.mean(data.map(farmer => Number(farmer.hh_income_perc_cocoa.split(',').join('.')))) * 100),
      othercrops: Math.round(d3.mean(data.map(farmer => Number(farmer.hh_income_perc_othercrops.split(',').join('.')))) * 100),
      livestock: Math.round(d3.mean(data.map(farmer => Number(farmer.hh_income_perc_livestock.split(',').join('.')))) * 100),
      smallbusiness: Math.round(d3.mean(data.map(farmer => Number(farmer.hh_income_perc_smallbusiness.split(',').join('.')))) * 100),
      total: 100
    }
  } else {
    reform = {
      cocoa: Math.round(d3.median(data.map(farmer => Number(farmer.hh_income_perc_cocoa.split(',').join('.')))) * 100),
      othercrops: Math.round(d3.median(data.map(farmer => Number(farmer.hh_income_perc_othercrops.split(',').join('.')))) * 100),
      livestock: Math.round(d3.median(data.map(farmer => Number(farmer.hh_income_perc_livestock.split(',').join('.')))) * 100),
      smallbusiness: Math.round(d3.median(data.map(farmer => Number(farmer.hh_income_perc_smallbusiness.split(',').join('.')))) * 100),
      total: 100
    }
  }

  const rest = reform['cocoa'] + reform['othercrops'] + reform['livestock'] + reform['smallbusiness']
  reform['other'] = 100 - rest
  reform = checkValues([reform])
  return {values: reform, domain: ['Income'], colors: ['#618058', '#dbeed5'] }
}

const foodsecStack = data => {
  const reform = []
  for (let i = 0; i < 12; i++){
    reform.push({
      one: Math.round(data.filter(farmer => farmer['foodsec' + (i + 1)] == 1).length / data.length * 100),
      two: Math.round(data.filter(farmer => farmer['foodsec' + (i + 1)] == 2).length / data.length * 100),
      three: Math.round(data.filter(farmer => farmer['foodsec' + (i + 1)] == 3).length / data.length * 100),
      total: 100
    })
  }
  return {values: reform, domain: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'], colors: ['#e68577', '#b5e2e1']}
}

export default { data, landsize, ppi, income, nutrients, incomeStack, foodsecStack}
