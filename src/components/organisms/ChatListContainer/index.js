// import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { ifProp } from 'styled-tools'

// import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'

const ChatListContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
	@media screen and (max-width: 1024px) {
    padding: 0.5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 425px) {
    padding: 0.5rem;
    grid-template-columns: repeat(1, 1fr);
  }
`

export default ChatListContainer
