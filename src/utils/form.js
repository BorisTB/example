import { is, isNil, not, forEach } from 'ramda'

export const processFormSubmit = e => {
  if (isNil(e) || not(is(Function, e.preventDefault))) {
    throw new Error('Form submit event is not valid.')
  }

  e.preventDefault()

  const formValues = {}
  const addToFormValues = ({ name, value }) => {
    if (name) {
      formValues[name] = value
    }
  }
  forEach(addToFormValues, e.target.elements)

  return formValues
}