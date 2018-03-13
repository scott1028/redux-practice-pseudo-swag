import React, { Component } from 'react'
import { Chat, ChatTemplate, Header } from 'components'

import { apiUrl } from 'config'

import socketIOClient from 'socket.io-client'

class ChatPage extends Component {
    constructor(props) {
        super(props)
        console.log(props.location.state)
        console.log(socketIOClient)

        this.state = {
            // username: self.props.history.location.state.username,
            // chats: [],
            // date: new Date()
            currentMsg: '',
            // messages: [{ username: 'scott', message: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello' }],
            messages: [],
        }
        this.onSendMsg = this.onSendMsg.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        // this.socketIoFactory = this.socketIoFactory.bind(this);
    }
    // socketIoFactory(){
    // }
    componentDidMount(){
        var self = this;
        var io = self.io = socketIOClient(apiUrl)
        // var io = self.io = socketIOClient('http://10.1.101.79:3000/')
        // debugger;
        io.on('connect', function() {
            io.emit('add user', self.props.location.state.username, self.props.location.state.chatId)
        })
        io.on('new room chat', function(data) {
            console.log([data]);
            var nextMsg = Object.assign([] ,self.state.messages);
            nextMsg.push(data);
            self.setState({
                messages: nextMsg
            })
        })
        io.on('disconnect', function() {
            console.log('io disconnect');
        })
    }
    componentWillUnmount(){
        this.io.disconnect()
    }
    onSendMsg(){
        this.io.emit('room chat', this.state.currentMsg);
    }
    onInputChange(msg){
        this.setState({
            currentMsg: msg
        })
    }
    render(){
        var self = this
        return (
            <ChatTemplate header={<Header title="Chat" icon="left-arrow" iconLink={history.back} />}>
                <Chat {...self.props} onSendMsg={self.onSendMsg} onInputChange={self.onInputChange} messages={self.state.messages}></Chat>
            </ChatTemplate>
        )
    }
}

export default ChatPage
