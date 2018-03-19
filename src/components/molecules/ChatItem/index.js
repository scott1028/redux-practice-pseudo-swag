import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { withRouter } from 'react-router-dom'
// import { apiUrl } from 'config'
// import { ifProp } from 'styled-tools'

// import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 8fr 1fr 1fr;
  padding: 1rem;
  box-sizing: border-box;
`

const ImageDiv = styled.div`
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Label = styled.label`
  background-color: ${palette('primary', 4)}
`

const OwnerLabel = styled.label`
  background-color: ${palette('primary', 0)}
`

const enterChat = ({
  id: chatId, username, allUsers, numUsers, history,
}) => {
  return () => {
    console.log(chatId, username)
    history.push(`/chats/${chatId}`, {
      chatId, username, allUsers, numUsers,
    })
  }
}

const ChatItem = (props) => {
  return (
    // <Wrapper onClick={enterChat(props.id, props.username, props.history.push)}>
    <Wrapper onClick={enterChat(props)}>
      <ImageDiv><Image src={props.avatar} /></ImageDiv>
      <OwnerLabel>{props.id}</OwnerLabel>
      <Label>{props.numUsers}</Label>
    </Wrapper>)
}

ChatItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  numUsers: PropTypes.number,
}

export default withRouter(props => (
  <ChatItem {...props} />
))
