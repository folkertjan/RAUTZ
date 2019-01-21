import store from '@/store.js'

const update = e => store.commit({
    type: 'updateFilters',
    value: e.target.value,
    operator: e.target.dataset.operator,
    steps: e.target.dataset.steps,
    name: e.target.name,
    element: e.target.type
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
      if (Number(value) != NaN && Number(obj[key] != NaN)) {
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

export default { update, all }
