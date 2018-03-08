import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { ifProp } from 'styled-tools'

// import { Icon, Link, Paragraph, Heading, Badge, PreformattedText } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: 4fr 1fr 1fr;
  // padding: 1rem;
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

// const ImageDiv = styled.div``
// const Image = styled.img`
//   width: 100%;
//   height: 100%;
// `

// const OnwerLabel = styled.label``

// const ChatItem = (props) => {
//     return (
//         <Wrapper>
//             <ImageDiv><Image src={props.avatar} /></ImageDiv>
//             <OnwerLabel>{props.id}</OnwerLabel>
//             {props.owner}
//         </Wrapper>)
// }

// // ChatItem.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   icon: PropTypes.string,
// //   link: PropTypes.string,
// //   soon: PropTypes.bool,
// //   children: PropTypes.any,
// //   code: PropTypes.node,
// // }

export default Wrapper
