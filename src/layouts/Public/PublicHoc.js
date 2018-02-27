import { compose, withHandlers } from 'recompose'
import { processFormSubmit } from '../../utils/form'
import { login } from '../../utils/auth'
import Layout from './Public'

const withLogin = withHandlers({
  submitLoginForm: () => e => {
    const formData = processFormSubmit(e)
    login(formData)
  }
})

const enhance = compose(withLogin)

export default enhance(Layout)
