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
      // username: self.props.history.location.state.username,
      // chats: [],
      // date: new Date()
      textarea: {
        value: '',
      },
      currentMsg: '',
      messages: [], // eslint-disable-line
    }
    this.onSendMsg = this.onSendMsg.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    // this.socketIoFactory = this.socketIoFactory.bind(this);
  }
  // socketIoFactory(){
  // }
  componentDidMount() {
    const self = this
    const io = socketIOClient(apiUrl)
    self.io = io
    // var io = self.io = socketIOClient('http://10.1.101.79:3000/')
    io.on('connect', () => {
      io.emit(
        'add user',
        self.props.location.state.username,
        self.props.location.state.chatId
      )
    })
    io.on('new room chat', (data) => {
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
  onSendMsg() {
    this.io.emit('room chat', this.state.currentMsg)
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
          value={self.state.textarea.value}
          onSendMsg={self.onSendMsg}
          onInputChange={self.onInputChange}
          messages={self.state.messages}
        />
      </ChatTemplate>
    )
  }
}

export default ChatPage
