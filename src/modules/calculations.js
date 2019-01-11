import store from '@/store.js'

function generate(id, counter) {
  const exists = store.state.ids.includes(id)
  if (exists) {
    if (isNaN(counter)) {
      counter = 0
    }
    console.log('already exists: ', id)
    counter++
    generate(id + counter, counter)
  }
  return id
}

export default { generate }
