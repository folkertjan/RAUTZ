import store from '@/store.js'

const update = e => store.commit({
    type: 'updateFilters',
    value: e.target.value,
    name: e.target.name
  })

const all = (targetArray, filters) => {
  const filterKeys = Object.keys(filters);
  return targetArray.filter(eachObj => {
    return filterKeys.every(eachKey => {
      if (!filters[eachKey].length) {
        return true
      }
      return filters[eachKey].includes(eachObj[eachKey])
    })
  })
}

export default { update, all }
