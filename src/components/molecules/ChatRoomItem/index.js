import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-rows: 8fr;
	padding: 1rem;
	box-sizing: border-box;
`
const ImageDiv = styled.div`
	position: relative;
	height: 300px;
	box-sizing: inherit;
	background: no-repeat center center;
	background-size: 150%;
	&:hover {
		opacity: 0.6;
	}
`

const Label = styled.div`
	position: absolute;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	left: 0;
	right: 0;
	color: white;
	margin: 0;
`

const OwnerLabel = styled.h3`
	background-color: rgba(0, 0, 0, 0.3);
	margin: 0;
	padding: 0.76em;
	display: inline-block;
	color: white;
`
const DescLabel = styled.div`
	padding: 0.6em 0.4em;
	font-size: 20px;
	left: 0;
	color: white;
`
const UserLabel = styled.div`
	padding: 0.6em 0.4em;
	left: 0;
	color: white;
`


const enterChat = ({
  id: chatId, username, allUsers, numUsers, history,
}) => {
  return () => {
    console.log(chatId, username)
    history.push(`/chats/${chatId}`, {
      chatId, username, allUsers, numUsers,
    })
  }
}


const ChatRoomItem = (props) => {
	return (
		<Wrapper onClick={enterChat(props)}>
			<ImageDiv style={{backgroundImage:`url(${props.avatar})`}}>
				<OwnerLabel>{props.id}</OwnerLabel>
				<Label>
					<DescLabel>Lorem ipsum dolor sit amet, magna pretium sociosqu lorem turpis</DescLabel>
					<UserLabel>{props.numUsers} People on {props.id}</UserLabel>
				</Label>
			</ImageDiv>
		</Wrapper>
	)
}


export default withRouter(props => (
		<ChatRoomItem {...props}/>
))
