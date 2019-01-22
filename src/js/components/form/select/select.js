import SelectModal from './selectModal'
import SelectOptions from './selectOptions'

export default class {

  constructor(el) {
    // original select element
    this.el = el
    // name of the select
    this.name = el.name
    // select title
    this.title = null
    // parent of select (usually div.input-field)
    this.parent = el.parentElement
    // the generated element to display the input
    this.inputFieldSelect = null
    // the bottom sheet modal instance
    this.modal = null

    this.initialize()
  }

  initialize() {
    this.getSelectTitle()
    this.createInputFieldSelect()
    this.createBottomSheet(this.createOptions())
    this.setClickEventHandler()
  }

  getSelectTitle() {
    let label = this.parent.querySelector('label')
    this.title = label.innerText
  }

  createInputFieldSelect() {
    let elInputFieldSelect = document.createElement('div')

    elInputFieldSelect.className = "input-field-select"

    this.inputFieldSelect = elInputFieldSelect

    this.parent.prepend(elInputFieldSelect)
  }

  createBottomSheet(elOptionsUl) {
    // Create a modal element
    let modalElement = SelectModal.create(elOptionsUl, this.title)
    // Append modal element to body
    document.body.appendChild(modalElement)
    // Initialize the modal element into a materialize modal class
    this.modal = new SelectModal(modalElement)
  }

  createOptions() {
    return SelectOptions.create(this.el.children, this.name)
  }

  setClickEventHandler() {
    this.inputFieldSelect.addEventListener("click", e => {
      this.modal.open()
    })
  }
}