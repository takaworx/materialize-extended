export default class {
  static create(options, name) {
    let selectUl = document.createElement('ul')

    selectUl.className = "input-field-select-options"

    for (let option of options) {
      let radio = document.createElement('input')

      radio.type = "radio"
      radio.name = name
      radio.value = option.value
      radio.className = "with-gap"

      let span = document.createElement('span')
      span.innerHTML = option.innerHTML

      let label = document.createElement('label')

      label.appendChild(radio)
      label.appendChild(span)

      // create list element that contains the anchor tag
      let li = document.createElement('li')
      li.appendChild(label)

      // append list element to ul
      selectUl.appendChild(li)
    }

    return selectUl
  }
}