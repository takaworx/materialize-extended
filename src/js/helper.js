function addClass(el, ...names) {
  let classes = el.className ? el.className.split(" ") : []

  for (let val of names[0]) {
    if (classes.indexOf(val) >= 0) {
      continue
    }

    classes.push(val)
  }

  el.className = classes.join(" ")
}

function removeClass(el, ...names) {
  let classes = el.className ? el.className.split(" ") : []

  for (let val of names[0]) {
    let index = classes.indexOf(val)
    
    if (index < 0) {
      continue
    }

    classes.splice(index, 1)
  }

  el.className = classes.join(" ")
}

export default (el) => {
  this.el = el

  this.addClass = (...names) => {
    addClass(this.el, names)
    return this
  }

  this.removeClass = (...names) => {
    removeClass(this.el, names)
    return this
  }

  return this
}