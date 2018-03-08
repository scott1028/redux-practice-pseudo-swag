import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { size } from 'styled-theme'

// import { IconLink, PrimaryNavigation, Block } from 'components'
import { IconLink, Block } from 'components'
// import { UserButton } from 'containers'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

// const StyledPrimaryNavigation = styled(PrimaryNavigation)`
//   flex: 1
// `

const BannerWrapper = styled.h2`
  & {
    margin: 0px
  }

  @media screen and (max-width: 1024px) {
    // font-size: 5vw;
  }

  @media screen and (max-width: 768px) {
    // font-size: 5vw;
  }

  @media screen and (max-width: 425px) {
    font-size: 5vw;
  }
`

const Header = ({ title, ...props }) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <IconLink to="/" icon="swag-icon" height={50} />
        <BannerWrapper>{title}</BannerWrapper>
        {/* <StyledPrimaryNavigation reverse /> */}
        {/* <UserButton reverse transparent /> */}
      </InnerWrapper>
    </Wrapper>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
