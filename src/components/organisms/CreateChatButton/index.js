import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

import { Icon, Button } from 'components'

const Gap = styled.div`
  width: 2vw;
  display: block;
  height: 1px;
`

const ButtonBox = styled.div`
  flex: 1;
  & button {
    font-size: 0.8rem;
  }
`

const CreateChatButton = styled(({ className, onCreateChat, onLogout }) => (
  <ButtonBox>
    <Button className={className} type="button" onClick={onLogout}>Log-out</Button>
    <Gap className={className} />
    <Button className={className} type="button" onClick={onCreateChat}>Create</Button>
  </ButtonBox>))`
  float: right;
`

export default CreateChatButton
