import M from 'materialize-css'
import Stepper from './components/stepper'
import Select from './components/form/select/select'

M.Stepper = (el, options) => {
  return new Stepper(el, options)
}

M.Select = (el, options) => {
  return new Select(el)
}

export default M;

export {
  Stepper,
  Select,
}