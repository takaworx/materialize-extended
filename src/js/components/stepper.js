let Stepper = (elem, options) => {
  let headers = elem.querySelectorAll('.stepper-title')
  let contents = elem.querySelectorAll('.stepper-content')

  let classes = elem.className ? elem.className.split(" ") : []

  if (classes.indexOf('collapsible') < 0) {
    classes.push('collapsible')
    elem.className = classes.join(" ")
  }

  for (var i = 0; i < headers.length; i++) {
    let classes = headers[i].className ? headers[i].className.split(" ") : []

    if (classes.indexOf('collapsible-header') >= 0) {
      continue
    }

    classes.push('collapsible-header')
    headers[i].className = classes.join(" ")
  }

  for (var i = 0; i < contents.length; i++) {
    let classes = contents[i].className ? contents[i].className.split(" ") : []

    if (classes.indexOf('collapsible-body') >= 0) {
      continue
    }

    classes.push('collapsible-body')
    contents[i].className = classes.join(" ")
  }

  let collapsible = M.Collapsible.init(elem, {})

  return collapsible
}

export default Stepper;