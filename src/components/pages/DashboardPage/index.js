import React, { Component } from 'react'
import { PageTemplate, Header, Footer, Heading } from 'components'
import { Dashboard, UserCreateChatButton } from 'containers'
import { connect } from 'react-redux'

import { apiUrl } from 'config'

import socketIOClient from 'socket.io-client'

// const DashboardPage = () => {
class DashboardPage extends Component {
  constructor(props) {
    super(props)
    var self = this;
    this.state = {
      username: self.props.history.location.state.username,
      chats: [],
      date: new Date()
    }
    self.createChat = self.createChat.bind(self)
  }
  componentDidMount() {
    const self = this
    const io = socketIOClient(apiUrl)
    self.io = io
    io.on('connect', () => io.emit('getChats', null))
    io.on('getChats', (data) => {
      let chats = []
      for (let k in data) {
        chats.push({
          id: k,
          avatar: '/avatar.jpg',
          numUsers: 0,
          ...data[k]
        })
      }
      self.setState({
        chats: chats
      })
    })
  }
  componentWillUnmount() {
    this.io.disconnect()
  }
  createChat(){
    var self = this;
    self.props.history.push(`/chats/${self.props.location.state.username}`, {
      create: true,
      chatId: self.props.location.state.username,
      username: self.props.location.state.username,
      allUsers: [],
      numUsers: 1,
    })
  }
  render(){
    var self = this;
    return (
      <PageTemplate header={<Header title="Dashboard" sideRightMenu={<UserCreateChatButton onCreateChat={self.createChat} onLogout={function(){location.href = '/';}} />} />} footer={<Footer />}>
        <Dashboard chats={self.state.chats} />
      </PageTemplate>
    )
  }
}

export default DashboardPage
