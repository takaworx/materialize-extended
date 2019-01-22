import { Modal } from 'materialize-css'

class SelectModal extends Modal {
  constructor (el) {
    super(el)

    // set cancel button click handler
    let cancelBtn = el.querySelector('.modal-header-action.cancel')
    this.setCancelButtonOnClickHandler(cancelBtn)

    // set confirm button click handler
    let confirmBtn = el.querySelector('.modal-header-action.confirm')
    this.setConfirmButtonOnClickHandler(confirmBtn)
  }

  static create(selectOptions, title) {
    let modalHeaderCancelButton = this.createCancelButton()
    let modalHeaderConfirmButton = this.createConfirmButton()
    let modalHeader = this.createHeader(modalHeaderCancelButton, modalHeaderConfirmButton, title)
    let modalContent = this.createContent(modalHeader, selectOptions)
    let modal = this.createModal(modalContent)
    
    return modal
  }

  static createCancelButton() {
    let cancelButton = document.createElement('a')
    cancelButton.innerText = "Cancel"
    cancelButton.className = "modal-header-action cancel"
    cancelButton.href = "#"
    return cancelButton
  }

  static createConfirmButton() {
    let confirmButton = document.createElement('a')
    confirmButton.innerText = "Confirm"
    confirmButton.className = "modal-header-action confirm"
    confirmButton.href = "#"
    return confirmButton
  }

  static createHeader(modalHeaderCancelButton, modalHeaderConfirmButton, title) {
    let modalHeader = document.createElement('div')
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = title

    modalHeader.appendChild(modalHeaderCancelButton)
    modalHeader.appendChild(modalHeaderConfirmButton)

    return modalHeader
  }

  static createContent(modalHeader, selectOptions) {
    let modalContent = document.createElement('div')
    modalContent.className = "modal-content"

    modalContent.appendChild(modalHeader)
    modalContent.appendChild(selectOptions)

    return modalContent
  }

  static createModal(modalContent) {
    let modal = document.createElement('div')
    modal.className = "modal bottom-sheet input-field-select-modal"

    modal.appendChild(modalContent)
    
    return modal
  }

  setCancelButtonOnClickHandler(button) {
    button.addEventListener('click', e => {
      this.close()
    })
  }

  setConfirmButtonOnClickHandler(button) {
    button.addEventListener('click', e => {
      this.close()
    })
  }
}

export default SelectModal