import M from 'materialize-css'
import Stepper from './components/stepper'

M.Stepper = (el, options) => {
  return new Stepper(el, options)
}

export default M;