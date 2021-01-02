/**
 * @property {SpotlightItem[]} matchedItems
 * @property {SpotlightItem} href
 */
import { SpotlightItem } from '/components/SpotlightItem'

export default class Spotlight extends HTMLElement {
  constructor () {
    super()
    this.shortcutHandler = this.shortcutHandler.bind(this)
    this.hide = this.hide.bind(this)
    this.oninput = this.onInput.bind(this)
    this.inputShortCutHandler = this.inputShortCutHandler.bind(this)
  }

  connectedCallback () {
    this.classList.add('spotlight')
    this.innerHTML = `
<div class="spotlight-bar">

    <input type="text" />
    <ul class="spotlight-suggestions" hidden>

</ul>
</div>`
    this.input = this.querySelector('input')
    this.input.addEventListener('blur', this.hide)
    this.suggestions = this.querySelector('.spotlight-suggestions')
    this.items = Array.from(
      document.querySelectorAll(this.getAttribute('target'))
    )
      .map(a => {
        const title = a.innerText.trim()
        if (title === '') {
          return null
        }
        const item = new SpotlightItem(title, a.getAttribute('href'))
        this.suggestions.appendChild(item.element)
        return item
      })
      .filter(i => i !== null)
    window.addEventListener('keydown', this.shortcutHandler)
    this.input.addEventListener('input', this.oninput)
    this.input.addEventListener('keydown', this.inputShortCutHandler)
  }

  disconnectedCallback () {
    window.removeEventListener('keydown', this.shortcutHandler)
  }

  shortcutHandler (e) {
    if (e.key === 'k' && e.ctrlKey === true) {
      e.preventDefault()
      this.classList.add('active')
      this.input.value = ''
      this.onInput()
      this.input.focus()
    }
  }

  hide () {
    this.classList.remove('active')
  }

  onInput () {
    const search = this.input.value.trim()
    if (search === '') {
      this.items.forEach(item => item.hide())
      this.matchedItem = []
      this.suggestions.setAttribute('hidden', 'hidden')
      return
    }
    let regexp = '^(.*)'
    for (const i in search) {
      regexp += `(${search[i]})(.*)`
    }

    regexp += '$'
    regexp = new RegExp(regexp, 'i')
    this.matchedItem = this.items.filter(item => item.match(regexp))
    if (this.matchedItem.length > 0) {
      this.suggestions.removeAttribute('hidden')
      this.setActiveIndex(0)
    } else {
      this.suggestions.setAttribute('hidden', 'hidden')
    }
  }

  setActiveIndex (n) {
    if (this.activeItem) {
      this.activeItem.removeActive()
    }
    if (n >= this.matchedItem.length) {
      n = 0
    }
    if (n < 0) {
      n = this.matchedItem.length - 1
    }
    this.matchedItem[n].active()
    this.activeItem = this.matchedItem[n]
  }

  /**
   *
   * @param {KeyboardEvent} e
   */
  inputShortCutHandler (e) {
    if (e.key === 'Escape') {
      this.input.blur()
    } else if (e.key === 'ArrowDown') {
      const index = this.matchedItem.findIndex(
        element => element === this.activeItem
      )
      this.setActiveIndex(index + 1)
    } else if (e.key === 'ArrowUp') {
      const index = this.matchedItem.findIndex(
        element => element === this.activeItem
      )
      this.setActiveIndex(index - 1)
    } else if (e.key === 'Enter') {
      this.activeItem.follow()
      console.log(this.activeItem.follow())
    }
  }
}
