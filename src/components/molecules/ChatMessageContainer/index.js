import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { ifProp } from 'styled-tools'

// import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'
// import { Button, Input } from 'components'

const Wrapper = styled.div`
  position: relative;
  padding: 1vmax;
	background: white;
`

const MsgItem = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: minmax(10vw, auto) 1fr;
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
  grid-template-columns: 1fr minmax(10vw, auto);
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
  '#12fff7', '#f0c27b', '#4b1248', '#53346d',
  '#ffafbd', '#c9ffbf', '#606c88', '3f4c6b',
  '#649173', '#dbd5a4', '#8ca6db', '#3a7bd5',
]

// Gets the color of a username through our hash function
function getUsernameColor(username) {
  // Compute hash function
  let hash = 7
  for (let i = 0; i < username.length; i++) { // eslint-disable-line
    hash = username.charCodeAt(i) + (hash << 5) - hash // eslint-disable-line
  }
  // Calculate color
  let index = Math.abs(hash % COLORS.length) // eslint-disable-line
  return COLORS[index]
}
/* eslint-disable react/no-array-index-key */
const ChatMessageContainer = ({
  messages,
  className,
  location: { state: { username } }, allUsers, onSetToWho,
}) => {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  allUsers[username] = {}
  return (
    <Wrapper className={className}>
      <ChatWrapper>
        <MsgWrapper>
          {messages.map((row, index) => (
            <MsgItem key={index}>
              <Who style={{ color: getUsernameColor(row.username) }}>{ (row.private) ? '>> ' : '' } {row.username}:</Who>
              <Msg style={{ color: getUsernameColor(row.username) }}>{row.message}</Msg>
            </MsgItem>
          ))}
        </MsgWrapper>
        <UserListWrapper>
          {Object.keys(allUsers).map((row, index) => (
            <UserItem
              key={index}
              style={{ color: getUsernameColor(row) }}
              onClick={() => onSetToWho(row)}
            >
              {row}
            </UserItem>
          ))}
        </UserListWrapper>
      </ChatWrapper>
    </Wrapper>
  )
}

ChatMessageContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    private: PropTypes.bool,
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  allUsers: PropTypes.object.isRequired,
  onSetToWho: PropTypes.func.isRequired,
}

export default ChatMessageContainer
