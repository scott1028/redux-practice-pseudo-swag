import React from 'react'
import { LoginForm } from 'components'
import { withRouter } from 'react-router-dom'
import { apiUrl } from 'config'
import { connect } from 'react-redux'
import * as actions from 'store/actions'


const onSubmit = (data, history) => {
	fetch(`${apiUrl}/login`, {
		method: 'POST',
		body: JSON.stringify({username:data}),
		headers: new Headers({
			'Content-Type': 'application/json'
		}),	
	}).then(resp => {
		if(!resp.ok) {
			resp.json().then((data) => {
				alert(data.message)
			})
			return
		}
		return resp.json()
	})
	.then($data => {
		if(!$data) return
		history.push('dashboard', {
			username:data,
		})
	})
}

const enterEvent = (props) => {
	return function(evt){
		if(evt.key === 'Enter'){
			onSubmit(evt.target.value, props.history)
		}
	}
}

const LoginFormContainer = props => < LoginForm enterEvent={enterEvent(props)} {...props}/>

export default withRouter(({ history }) => ( <
    LoginFormContainer history = { history }
    />
))
