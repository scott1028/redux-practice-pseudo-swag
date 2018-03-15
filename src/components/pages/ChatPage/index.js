import React, { Component } from 'react'
import { Chat, ChatTemplate, Header } from 'components'

import { apiUrl } from 'config'

import socketIOClient from 'socket.io-client'

class ChatPage extends Component {
  constructor(props) {
    super(props)
    console.log(props.location.state) // eslint-disable-line
    console.log(socketIOClient)

    this.state = {
      toWho: 'All', // eslint-disable-line
      allUsers: {}, // eslint-disable-line
      textarea: {
        value: '',
      },
      currentMsg: '',
      messages: [], // eslint-disable-line
    }
    this.onSendMsg = this.onSendMsg.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onSetToWho = this.onSetToWho.bind(this)
  }
  componentDidMount() {
    const self = this
    const io = socketIOClient(apiUrl)
    self.io = io
    io.on('connect', () => {
      io.emit(
        'join room',
        self.props.location.state.username,
        self.props.location.state.chatId,
      )
      io.emit('get chats', null)
    })
    io.on('get chats', (data) => {
      const { props: { location: { state: { chatId } } } } = self
      self.setState({
        allUsers: data[chatId].allUsers,
      })
    })
    io.on('room chat', (data) => {
      console.log([data])
      const nextMsg = Object.assign([], self.state.messages)
      nextMsg.push(data)
      self.setState({
        messages: nextMsg,
      })
    })
    io.on('disconnect', () => {
      console.log('io disconnect')
    })
  }
  componentWillUnmount() {
    this.io.disconnect()
  }
  onSetToWho(username) {
    const self = this
    self.setState({
      toWho: username,
    })
  }
  onSendMsg() {
    // this.io.emit('room chat', this.state.currentMsg)
    if (this.state.toWho === 'All') {
      this.io.emit('room chat', { toWho: null, message: this.state.currentMsg })
    } else {
      this.io.emit('room chat', { toWho: this.state.toWho, message: this.state.currentMsg })
    }
    this.state.textarea.value = ''
    this.setState({
      currentMsg: '',
    })
  }
  onInputChange(dom) {
    console.log(dom)
    this.setState({
      textarea: dom,
      currentMsg: dom.value,
    })
  }
  render() {
    const self = this
    return (
      <ChatTemplate
        header={<Header
          title="Chat"
          icon="left-arrow"
          iconLink={history.back} // eslint-disable-line
        />}
      >
        <Chat
          {...self.props}
          toWho={self.state.toWho}
          allUsers={self.state.allUsers}
          value={self.state.textarea.value}
          messages={self.state.messages}
          onSendMsg={self.onSendMsg}
          onInputChange={self.onInputChange}
          onSetToWho={self.onSetToWho}
        />
      </ChatTemplate>
    )
  }
}

export default ChatPage
