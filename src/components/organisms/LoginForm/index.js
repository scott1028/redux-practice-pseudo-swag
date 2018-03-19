import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContainerLogin = styled.div `
	width: 100%;
	min-height: 100vh;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-image: url('images/bg1.jpg');
`


const LoginFormContainer = styled.form`
	width: 500px;
	text-align: center;
	top: 35%;
	position: absolute;
`

const LoginFormTitle = styled.div`
	font-size: 36px;
	color: #fff;
	line-height: 1.2;
	width: 100%;
	display: block;
	text-align: center;
	font-family: Poppins-Bold;
	padding-bottom: 50px;
`

const LoginInput = styled.input`
	width: 100%;
	height:100%;
	font-size: 24px;
	background: transparent;
	border: none;
	color: white;
	display: block;
	text-align: center;
	height: 50px;
	border-bottom: 1.5px solid #cccccc;
	&:focus {
		outline: none;
		border-bottom: 1.5px solid white;
		transition: 1s;
		input-placeholder: '';
	}
	&::placeholder {
		color: #e5e5e5;
	}
`



const LoginForm = () => {
    return (
			<ContainerLogin>
				<LoginFormContainer>
					<LoginFormTitle>Welcome to Chat Room</LoginFormTitle>
					<LoginInput placeholder='Type Your Username'/> 
				</LoginFormContainer>
			</ContainerLogin>
    )
}

export default LoginForm
