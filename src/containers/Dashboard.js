import React, { Component } from 'react'
// import { reduxForm } from 'redux-form'
// import { resourceCreateRequest } from 'store/actions'
// import { createValidator, required } from 'services/validation'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { ChatItem, ChatListContainer } from 'components'
import api from 'services/api'
import { apiUrl } from 'config'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    var self = this;
    this.state = {
      chats: [],
      date: new Date()
    }
    props.loadChats().then(function(data){
      self.setState({
        chats: data
      })
    })
  }
  render() {
    const self = this
    return (
      <ChatListContainer>
        {
          self.state.chats.map(row => <ChatItem key={row.id} {...row} />)
        }
      </ChatListContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadChats: () => dispatch({
    type: 'REQUEST_CHAT_LIST',
    url: '/api/chats',
    payload: {},
    meta: {
      thunk: true,
    },
  }),
})

export default connect(null, mapDispatchToProps)(withRouter(({ history, ...props }) => (
  <Dashboard history={history} {...props} />
)))
