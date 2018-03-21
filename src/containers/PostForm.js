import React from 'react'
import { reduxForm } from 'redux-form'
import { resourceCreateRequest } from 'store/actions'
// import { createValidator, required } from 'services/validation'
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

const ReduxForm = reduxForm({
  form: 'PostForm',
  destroyOnUnmount: false,
  onSubmit,
})(PostFormContainer)

export default withRouter(({ history }) => (
  <ReduxForm history={history} />
))
