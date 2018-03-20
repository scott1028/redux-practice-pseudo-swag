import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Paragraph, Link, Icon } from 'components'

const Wrapper = styled.div`
  background-color: transparent;
  padding: 2rem;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
	color: white;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
      	Copyright © 2018 Change Healthcare Inc. All rights reserved.
			</Credits>
    </Wrapper>
  )
}

export default Footer
