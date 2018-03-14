import React from 'react'
import { reduxForm } from 'redux-form'
import { resourceCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'store/actions'

import { PostForm } from 'components'

import { apiUrl } from 'config'

const PostFormContainer = props => <PostForm {...props} />

const onSubmit = (data, dispatch, props) => {
  fetch(`${apiUrl}/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  }).then(function(resp){
    if (!resp.ok) {
      resp.json().then(function(data){
        alert(data.message)
      })
      return;
    }
    return resp.json()
  })
  .then(function($data){
    if(!$data) return;
    props.history.push('dashboard', {
      ...data
    })
  })
}
  
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
