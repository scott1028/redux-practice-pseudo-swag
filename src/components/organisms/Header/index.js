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
	bottom: 30px;
	@media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
	background-color: rgba(0, 4, 6, 0.6);
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

const Header = ({ title, icon, iconLink, sideRightMenu, ...props }) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        {
          (iconLink && (iconLink === history.back))
          ?
          (<IconLink onClick={() => history.back()} icon={icon} height={50} />)
          :
          (<IconLink to={iconLink} icon={icon} height={50} />)
        }
        <BannerWrapper>{title}</BannerWrapper>
        {sideRightMenu}
        {/* <StyledPrimaryNavigation reverse /> */}
        {/* <UserButton reverse transparent /> */}
      </InnerWrapper>
    </Wrapper>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  iconLink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  sideRightMenu: PropTypes.node,
}

Header.defaultProps = {
  icon: 'scp-chat',
  iconLink: undefined,
}

export default Header
