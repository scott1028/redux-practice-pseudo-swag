import React from 'react'

const ChatPage = props => {
    return (
        <div>
            Generic Page {props.match.params.id}
        </div>
    )
}

export default ChatPage
