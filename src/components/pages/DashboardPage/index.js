import React, { Component } from 'react'
import { PageTemplate, Header, Footer, Heading } from 'components'
import { Dashboard, UserCreateChatButton } from 'containers'
import { connect } from 'react-redux'

import { apiUrl } from 'config'

import socketIOClient from 'socket.io-client'


class DashboardPage extends Component {
    constructor(props) {
        super(props)
        var self = this
        if (!self.props.history.location.state) {
            this.state = {
                username: null,
                chats: [],
                date: new Date(),
            }
            return self.props.history.push('/')
        }
        this.state = {
            username: self.props.history.location.state.username,
            chats: [],
            date: new Date(),
        }
        self.createChat = self.createChat.bind(self)
        self.logout = self.logout.bind(self)
    }
    componentDidMount() {
        const self = this
        const io = socketIOClient(apiUrl)
        self.io = io
        io.on('connect', () => io.emit('get chats', null))
        io.on('get chats', (data) => {
            const chats = []
            for (let k in data) {
                let rand = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + 1
                if (Object.prototype.hasOwnProperty.call(data, k)) {
                    chats.push({
                        id: k,
                        avatar: `/images/${rand}.jpeg`,
                        numUsers: 0,
                        ...data[k],
                    })
                }
            }
            self.setState({
                chats,
            })
        })
    }
    componentWillUnmount() {
        this.io.disconnect()
    }
    createChat() {
        var self = this
        self.props.history.push(`/chats/${self.props.location.state.username}`, {
            create: true,
            chatId: self.props.location.state.username,
            username: self.props.location.state.username,
            allUsers: [],
            numUsers: 1,
        })
    }
    logout() {
        let self = this
        fetch(`${apiUrl}/logout`, {
            method: 'POST',
            body: JSON.stringify({
                username: self.props.location.state.username,
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }).then(function(resp) {
            self.props.history.push('/')
        })
    }
    render() {
        var self = this
        return ( <
            PageTemplate header = { < Header title = "Dashboard"
                sideRightMenu = { < UserCreateChatButton onCreateChat = { self.createChat }
                    onLogout = { self.logout }
                    />} / >
                }
                footer = { < Footer / > } >
                <
                Dashboard chats = { self.state.chats }
                /> < /
                PageTemplate >
            )
        }
    }

    export default DashboardPage
