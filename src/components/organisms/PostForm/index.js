import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { ReduxField, Heading, Button } from 'components'

const borderColor = ({ paletteCls }) => palette(paletteCls, 1)

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const Gap = styled.div`
  height: 2vh;
  display: block;
`

const commonStyle = `font-size: 1.5rem;`;

const StyledField = styled(Field)`
  ${commonStyle}
`

const StyledButton = styled(Button)`
  ${commonStyle}
  width: 100%;
`

const StyledHeading = styled(Heading)`
  ${commonStyle}
`

const PostForm = ({ handleSubmit, submitting, reset, ...props }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <StyledHeading level={2}>Please enter your name here!</StyledHeading>
      <StyledField name="username" label="Your Name" type="text" required={true} component={ReduxField} />
      <Gap />
      <Gap />
      <StyledButton type="submit" disabled={submitting}>Enter</StyledButton>
      <Gap />
      <StyledButton type="button" disabled={submitting} onClick={() => reset()}>Clear</StyledButton>
    </Form>
  )
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // handleClean: PropTypes.func,
  submitting: PropTypes.bool,
}

export default PostForm
