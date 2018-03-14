import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { ifProp } from 'styled-tools'

// import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'
import { Button, Input } from 'components'

const Wrapper = styled.div`
  position: relative;
  padding: 1vmax;
`

const MsgItem = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: minmax(100px, auto) 1fr;
`

const Who = styled.div`
`

const Msg = styled.div`
  word-break: break-all;
`

const ChatWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0.5rem;
  right: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 150px;
  grid-gap: 0.5rem;
`

const MsgWrapper = styled.div`
  overflow-y: auto;
`

const UserListWrapper = styled.div`
  overflow-y: auto;
`

const UserItem = styled.div`
`

const COLORS = [
  '#e21400', '#91580f', '#f8a700', '#f78b00',
  '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
  '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
]

// Gets the color of a username through our hash function
function getUsernameColor(username) {
  // Compute hash function
  let hash = 7
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + (hash << 5) - hash
  }
  // Calculate color
  let index = Math.abs(hash % COLORS.length)
  return COLORS[index]
}

const ChatMessageContainer = ({ messages, className, location: { state: { allUsers, username } } }) => {
  allUsers[username] = {}
  return (
    <Wrapper className={className}>
      <ChatWrapper>
        <MsgWrapper>
          {messages.map((row, index) => (
            <MsgItem key={index}>
              <Who style={{ color: getUsernameColor(row.username) }}>{row.username}{row.username}{row.username}{row.username}</Who>
              <Msg style={{ color: getUsernameColor(row.username)}}>{row.message}</Msg>
            </MsgItem>
          ))}
        </MsgWrapper>
        <UserListWrapper>
          {Object.keys(allUsers).map((row, index) => (
            <UserItem style={{ color: getUsernameColor(row) }}>{row}</UserItem>
          ))}
        </UserListWrapper>
      </ChatWrapper>
    </Wrapper>
  )
}

ChatMessageContainer.prototype = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })),
  className: PropTypes.string,
}

export default ChatMessageContainer
