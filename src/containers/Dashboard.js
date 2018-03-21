import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { ChatItem, ChatRoomItem, ChatListContainer } from 'components'
import api from 'services/api'
import { apiUrl } from 'config'

const Dashboard = props => ( <
        ChatListContainer > {
            props.chats.map(row => < ChatRoomItem key = { row.id } {...row }
                username = { props.history.location.state.username }
                />)
            } <
            /ChatListContainer>)

            export default withRouter(({ history, ...props }) => ( <
                Dashboard history = { history } {...props }
                />
            ))