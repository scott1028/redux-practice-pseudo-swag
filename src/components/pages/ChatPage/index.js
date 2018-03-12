import React from 'react'
import { Chat, ChatTemplate, Header } from 'components'

const ChatPage = props => {
    return (
        <ChatTemplate header={<Header title="Chat" icon="left-arrow" iconLink="/dashboard" />}>
            <Chat></Chat>
        </ChatTemplate>
    )
}
// {/* Generic Page {props.match.params.id} */}

export default ChatPage
