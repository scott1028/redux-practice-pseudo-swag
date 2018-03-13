import React from 'react'
import { reduxForm } from 'redux-form'
import { resourceCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'store/actions'

import { PostForm } from 'components'

const PostFormContainer = props => <PostForm {...props} />

const onSubmit = (data, dispatch, props) =>
  dispatch(resourceCreateRequest('login', data))
    .then(() => {
      // props.setOwner(data.username)
      props.history.push('dashboard', {
        ...data
      })
    })
    .catch(() => console.log('fail'))

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

// const mapStateToProps = state => ({
//   owner: state.chat.owner,
// })

// const mapDispatchToProps = dispatch => ({
//   setOwner: (username) => dispatch(actions.createChatAction({ type: actions.SET_USERNAME, payload: username })),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(({ history, setOwner }) => (
//   <ReduxForm history={history} setOwner={setOwner} />
// )))

export default withRouter(({ history }) => (
  <ReduxForm history={history} />
))
