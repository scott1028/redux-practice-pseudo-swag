import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { ifProp } from 'styled-tools'

// import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'
import { Button, Input } from 'components'

const Wrapper = styled.div`
  padding: 1vmax;
`

const MsgBox = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr) 7fr;
  grid-gap: 0.5rem;
  // font-size: 3vmax;
`

const Who = styled.div`
`

const Msg = styled.div`
  word-break: break-all;
`

const ChatMessageContainer = ({ messages, className }) => {
  return (
    <Wrapper className={className}>
      {messages.map(row => (
        <MsgBox key={row}>
          <Who>{row.username}</Who>
          <Msg>{row.message}</Msg>
        </MsgBox>
      ))}
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
