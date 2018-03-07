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

const Gap = styled.span`
  width: 10px;
  display: inline-block;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-item: center;
`

const PostForm = ({ handleSubmit, submitting, reset, ...props }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={2}>Please enter your name here!</Heading>
      <Field name="username" label="Your Name" type="text" component={ReduxField} />
      <ButtonGroup>
        <Button type="submit" disabled={submitting}>Enter</Button>
        <Gap />
        <Button type="button" disabled={submitting} onClick={() => reset()}>Clear</Button>
      </ButtonGroup>
    </Form>
  )
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // handleClean: PropTypes.func,
  submitting: PropTypes.bool,
}

export default PostForm
