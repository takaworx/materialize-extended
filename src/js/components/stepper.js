import Helper from '../helper'

class Stepper {
  constructor(el, options) {
    this.el = el
    this.on = this.on
    this.options = options
    this.children = this.el.children
    this.collapsible = this.initialize()
  }

  open(index) {
    let openEvent = this.broadcastEvent('open', { index })

    if (openEvent.defaultPrevented) {
      return false;
    }

    Helper(this.children[index]).removeClass('completed')
    this.collapsible.open(index)
  }

  close(index) {
    let closeEvent = this.broadcastEvent('close', { index })

    if (closeEvent.defaultPrevented) {
      return false;
    }

    this.collapsible.close(index)
  }

  complete(index) {
    let complete = this.broadcastEvent('complete', { index })

    if (complete.defaultPrevented) {
      return false;
    }

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

  on(e, handler) {
    this.el.addEventListener(e, handler);
  }

  expand(index) {
    let expandEvent = this.broadcastEvent('expand', { index })

    if (expandEvent.defaultPrevented) {
      return false;
    }

    this.open(index)
  }

  broadcastEvent(name, detail) {
    let newEvent = new CustomEvent(name, {
      detail,
      cancelable: true,
    })

    this.el.dispatchEvent(newEvent)

    return newEvent
  }

  current() {
    let current = 0;

    for (let key in this.children) {
      if (Helper(this.children[key]).hasClass('active')) {
        current = key
        break
      }
    }

    return current
  }

  initialize() {
    let headers = this.el.querySelectorAll('.stepper-title')
    let contents = this.el.querySelectorAll('.stepper-content')
  
    for (var i = 0; i < headers.length; i++) {
      headers[i].dataset.stepperIndex = i;

      headers[i].addEventListener('click', (e) => {
        this.expand(e.currentTarget.getAttribute('data-stepper-index'))
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