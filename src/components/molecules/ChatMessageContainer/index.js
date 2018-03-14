import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { ifProp } from 'styled-tools'

// import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'
import { Button, Input } from 'components'

const Wrapper = styled.div`
  position: relative;
  padding: 1vmax;
  // overflow-y: scroll;
  // bottom: 0px;
`

const MsgBox = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr) 5fr 150px;
  grid-gap: 0.5rem;
  @media screen and (max-width: 425px) {
    grid-template-columns: minmax(auto, 1fr) 7fr;
  }
`

const Who = styled.div`
`

const Msg = styled.div`
  word-break: break-all;
`

const UserListWrapper = styled.div`
  width: calc(100% - 1rem);
  top: 0px;
  bottom: 0px;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 150px;
  grid-gap: 0.5rem;
  overflow-y: scroll;
  z-index: -1;
`

const UserList = styled.div`
  grid-column-start: 2;
  z-index: 2;
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

const ChatMessageContainer = ({ messages, className }) => {
  return (
    <Wrapper className={className}>
      {messages.map((row, index) => (
        <MsgBox key={index}>
          <Who style={{ color: getUsernameColor(row.username)}}>{row.username}</Who>
          <Msg style={{ color: getUsernameColor(row.username)}}>{row.message}</Msg>
        </MsgBox>
      ))}
      <UserListWrapper>
        <UserList>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456</UserItem>
          <UserItem>1456e</UserItem>
        </UserList>
      </UserListWrapper>
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
