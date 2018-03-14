import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { ifProp } from 'styled-tools'

// import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'
import { Button, Input, ChatMessageContainer } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`
const Div = styled.div`
  &:not(:first-child) {
    margin-top: 2vmax;
    margin-bottom: 1vmax;
  }
`

const MessageContainer = styled(ChatMessageContainer)`
  font-size: 1.5rem;
  flex: 1;
  overflow-y: visible;
`

const ControlPannel = styled.div`
  padding: 2vmax;
  height: auto;
  & button, & textarea {
    font-size: 1.5rem;
  }
`

const Chat = (props) => {
  return (
    <Wrapper>
      <MessageContainer {...props} messages={props.messages} />
      <ControlPannel>
        <Div><Input type="textarea" onChange={(e) => props.onInputChange(e.target)} value={props.value} /></Div>
        <Div><Button style={{ float: 'right' }} onClick={props.onSendMsg}>Send</Button></Div>
      </ControlPannel>
    </Wrapper>
  )
}

// // ChatItem.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   icon: PropTypes.string,
// //   link: PropTypes.string,
// //   soon: PropTypes.bool,
// //   children: PropTypes.any,
// //   code: PropTypes.node,
// // }

export default Chat
