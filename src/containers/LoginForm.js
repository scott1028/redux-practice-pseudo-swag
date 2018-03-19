import React from 'react'
import { LoginForm } from 'components'
import { withRouter } from 'react-router-dom'

const LoginFormContainer = props => < LoginForm {...props }
/>

export default withRouter(({ history }) => ( <
    LoginFormContainer history = { history }
    />
))