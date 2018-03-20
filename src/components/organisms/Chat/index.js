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
	background-color: transparent;
  & button, & textarea {
    font-size: 1.5rem;
  }
`
const SendButton = styled.button`
	background:transparent;
	color: white;
	border: none;
	font-size: 16px;
	padding: 0.5em;
	border-radius: 8px;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`



const Chat = (props) => {
  return (
    <Wrapper>
      <MessageContainer {...props} />
      <ControlPannel>
        <Div>
          <Input type="select" value={props.toWho} onChange={e => props.onSetToWho(e.target.value)}>
            <option>All</option>
            {Object.keys(props.allUsers).map((row, index) => (
              <option key={index}>{row}</option> // eslint-disable-line react/no-array-index-key
            ))}
          </Input>
        </Div>
        <Div>
          <Input
            type="textarea"
            onChange={e => props.onInputChange(e.target)}
            value={props.value}
          />
        </Div>
        <Div>
          <SendButton style={{ float: 'right' }} onClick={props.onSendMsg} disabled={!props.value}>
            Send
         </SendButton>
        </Div>
      </ControlPannel>
    </Wrapper>
  )
}

Chat.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSendMsg: PropTypes.func.isRequired,
  onSetToWho: PropTypes.func.isRequired,
  allUsers: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  toWho: PropTypes.string.isRequired,
}

Chat.defaultProps = {
  allUsers: {},
}

export default Chat
