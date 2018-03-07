import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { ifProp } from 'styled-tools'

// import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`
const ChatItem = () => {
  return (
    <Wrapper>
      <div>321</div>
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

export default ChatItem
