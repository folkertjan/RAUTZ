import TweenLite from 'gsap/TweenLite'
import 'gsap/ScrollToPlugin'

const scroll = (href) => {
  // const nav = document.querySelector('header nav')
  // const menuButton = document.querySelector('#menu-button')
  // nav.classList.remove('menu-visible')
  // body.classList.remove('no-scroll')
  // menuButton.innerText = 'menu'
  const link = href.split('/')
  console.log(link, link[link.length - 1])
  const section = document.querySelector(link[link.length - 1])
  const page = document.querySelector('body')
  TweenLite.to(page, 1.2, {scrollTo: section})
}

export default { scroll }
