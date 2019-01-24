import TweenLite from 'gsap/TweenLite'
import 'gsap/ScrollToPlugin'

const scroll = href => {
  const link = href.split('/')
  console.log(link, link[link.length - 1])
  const section = document.querySelector(link[link.length - 1])
  const page = document.querySelector('#main')
  TweenLite.to(page, 1.2, { scrollTo: { x: 0, y: section.offsetTop } })
}
export default { scroll }
