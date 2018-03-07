import React from 'react'
import { reduxForm } from 'redux-form'
import { resourceCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'
import { withRouter } from 'react-router-dom'

import { PostForm } from 'components'

const PostFormContainer = props => <PostForm {...props} />

const onSubmit = (data, dispatch, props) =>
  dispatch(resourceCreateRequest('login', data))
    .catch(() => props.history.push('dashboard'))

const validate = createValidator({
  title: [required],
  body: [required],
})

const ReduxForm = reduxForm({
  form: 'PostForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
})(PostFormContainer)

export default withRouter(({ history }) => (
  <ReduxForm history={history} />
))
