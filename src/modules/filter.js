import store from '@/store.js'

const update = (e, type = 'updateFilters') => store.commit({
    type: type,
    value: e.target.value,
    operator: e.target.dataset.operator,
    steps: e.target.dataset.steps,
    name: e.target.name,
    element: e.target.type
  })
const updateRange = (e, type = 'updateFilters') => store.commit({
    type: type,
    value: e.value,
    name: e.name,
    element: 'range'
  })

const all = (arr, filters) => {
  const keys = Object.keys(filters)
  return arr.filter(obj => {
    return keys.every(key => {
      if (typeof filters[key] != 'object') {
        // single value
        if (!filters[key].length || filters[key] === 'any') {
          return true
        }
        return filters[key].includes(obj[key])
      } else if (filters[key].length >= 0) {
        // array
        if (filters[key].length === 0) {
          return true
        }
        if (typeof(filters[key][0]) === 'number' && typeof(filters[key][1]) === 'number') {
          const ranges = filters[key].sort((a, b) => a - b)
          let value = obj[key]
          if (obj[key].indexOf(',') > -1) {
            value = Number(obj[key].split(',').join('.'))
          } else {
            value = obj[key]
          }
          return value >= ranges[0] && value <= ranges[1]
        }
        return filters[key].indexOf(obj[key]) > -1
      }
      // object
      let check
      let objVal = obj[key]
      let { operator, value, steps } = filters[key]
      if (!value.length || value === 'any') {
        return true
      }
      if (!objVal.length) {
        return false
      }
      if (!isNaN(Number(value)) && !isNaN(Number(obj[key]))) {
        value = Number(value)
        objVal = Number(objVal)
      }
      return compare(operator, objVal, value, steps)
    })
  })
}

const compare = (operator, key, val, steps) => {
  let check
  if (operator == '>') {
    check = key > val
  }
  if (operator == '<') {
    check = key < val
  }
  if (operator == '>=') {
    check = key >= val
  }
  if (operator == '<=') {
    check = key <= val
  }
  if (operator == '!=') {
    check = key != val
  }
  if (operator == '><') {
    check = key > val - steps && key <= val
  }
  if (!operator) {
    check = key == val
  }
  return check
}

export default { update, updateRange, all }
