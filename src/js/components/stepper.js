import Helper from '../helper'

class Stepper {
  constructor(el, options) {
    this.el = el
    this.on = this.on
    this.options = options
    this.children = this.el.children
    this.collapsible = this.initialize()
  }

  on(e, handler) {
    this.el.addEventListener(e, handler);
  }

  open(index) {
    let openEvent = new CustomEvent('open', {
      detail: {
        index,
      },
      cancelable: true,
    })

    this.el.dispatchEvent(openEvent)

    if (openEvent.defaultPrevented) {
      return false;
    }

    Helper(this.children[index]).removeClass('completed')
    this.collapsible.open(index)
  }

  close(index) {
    this.collapsible.close(index)
  }

  complete(index) {
    Helper(this.children[index]).removeClass('error')
    Helper(this.children[index]).addClass('completed')
    
    let nextIndex = index + 1;

    if (nextIndex < this.children.length) {
      this.open(nextIndex)
    } else {
      this.close(index)
    }
  }

  error(index) {
    Helper(this.children[index]).removeClass('completed').addClass('error')
  }

  initialize() {
    let headers = this.el.querySelectorAll('.stepper-title')
    let contents = this.el.querySelectorAll('.stepper-content')
  
    for (var i = 0; i < headers.length; i++) {
      headers[i].dataset.stepperIndex = i;

      headers[i].addEventListener('click', (e) => {
        this.open(e.currentTarget.getAttribute('data-stepper-index'))
      })
  
      Helper(headers[i]).addClass('collapsible-header', 'waves-effect')
    }
  
    for (var i = 0; i < contents.length; i++) {
      Helper(contents[i]).addClass('collapsible-body')
    }
  
    let collapsible = M.Collapsible.init(this.el, {})
  
    return collapsible
  }
}

export default Stepper;