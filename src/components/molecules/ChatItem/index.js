import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { withRouter } from 'react-router-dom'
import { apiUrl } from 'config'
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

const OnwerLabel = styled.label`
  background-color: ${palette('primary', 0)}
`

const enterChat = (chatId, push) => {
  return () => {
    console.log(chatId)
    push(`/chats/${chatId}`)
  }
}

const ChatItem = (props) => {
  return (
    <Wrapper onClick={enterChat(props.id, props.history.push)}>
      <ImageDiv><Image src={props.avatar} /></ImageDiv>
      <OnwerLabel>{props.owner}</OnwerLabel>
      <Label>{props.members}</Label>
    </Wrapper>)
}

// ChatItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string,
//   link: PropTypes.string,
//   soon: PropTypes.bool,
//   children: PropTypes.any,
//   code: PropTypes.node,
// }

export default withRouter(props => (
  <ChatItem {...props} />
))
