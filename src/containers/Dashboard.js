import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ChatItem, ChatListContainer } from 'components'
import { apiUrl } from 'config'

const Dashboard = props => (
  <ChatListContainer>
    {
        props.chats.map(row => <ChatItem key={row.id} {...row} username={props.history.location.state.username} />)
    }
  </ChatListContainer>)

export default withRouter(({ history, ...props }) => (
  <Dashboard history={history} {...props} />
))
