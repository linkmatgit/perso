export class SpotlightItem {
  constructor (title, href) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.setAttribute('href', href)
    a.innerText = title
    li.appendChild(a)
    li.setAttribute('hidden', 'hidden')
    this.element = li
    this.title = title
    this.href = href
    this.hide()
  }

  match (regexp) {
    const matches = this.title.match(regexp)
    if (matches === null) {
      this.hide()
      return false
    }
    this.element.firstElementChild.innerHTML = matches.reduce(
      (acc, match, index) => {
        if (index === 0) {
          return acc
        }
        return acc + (index % 2 === 0 ? `<mark>${match}</mark>` : match)
      },
      ''
    )
    this.element.removeAttribute('hidden')
    return true
  }

  hide () {
    this.element.setAttribute('hidden', 'hidden')
  }

  active () {
    this.element.classList.add('active')
  }

  removeActive () {
    this.element.classList.remove('active')
  }

  follow () {
    window.location.href = this.href
  }
}
