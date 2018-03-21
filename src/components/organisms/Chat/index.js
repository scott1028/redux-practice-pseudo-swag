import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
      <MessageContainer {...props} />
      <ControlPannel>
        <Div>
          <Input type="select" value={props.toWho} onChange={e => props.onSetToWho(e.target.value)}>
            <option>All</option>
            {Object.keys(props.allUsers).map((row, index) => {
              if (!(row === props.location.state.username)) {
                return <option key={index}>{row}</option> // eslint-disable-line react/no-array-index-key
              }
              return null
            })}
          </Input>
        </Div>
        <Div>
          <Input
            type="textarea"
            onChange={e => props.onInputChange(e.target)}
            value={props.currentMsg}
          />
        </Div>
        <Div>
          <Button style={{ float: 'right' }} onClick={props.onSendMsg} disabled={!props.currentMsg}>
            Send
          </Button>
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
  currentMsg: PropTypes.string.isRequired,
  toWho: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
}

Chat.defaultProps = {
  allUsers: {},
}

export default Chat
