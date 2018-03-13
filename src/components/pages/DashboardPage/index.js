import React, { Component } from 'react'
import { PageTemplate, Header, Footer, Heading } from 'components'
import { Dashboard, UserCreateChatButton } from 'containers'
import { connect } from 'react-redux'

// const DashboardPage = () => {
class DashboardPage extends Component {
  constructor(props) {
    super(props)
    var self = this;
    this.state = {
      username: self.props.history.location.state.username,
      chats: [],
      date: new Date()
    }
    self.reloadChat = self.reloadChat.bind(self)
    self.createChat = self.createChat.bind(self)
    self.reloadChat()
  }
  reloadChat(){
    var self = this;
    self.props.loadChats().then(function (data) {
      self.setState({
        chats: data
      })
    })
  }
  createChat(){
    var self = this;
    self.props.createChat({
      username: self.state.username,
      avatar: "/avatar.jpg",
      /*
        "avatar": "/avatar.jpg",
        "username": "test"
      */
    }).then(function(data){
      self.reloadChat()
    })
  }
  render(){
    var self = this;
    return (
      <PageTemplate header={<Header title="Dashboard" sideRightMenu={<UserCreateChatButton onClick={self.createChat} />} />} footer={<Footer />}>
        <Dashboard chats={self.state.chats} />
      </PageTemplate>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadChats: () => dispatch({
    type: 'REQUEST_CHAT_LIST',
    url: '/getRoomData',
    payload: {},
    meta: {
      thunk: true,
    },
  }),
  createChat: (data) => dispatch({
    type: 'CREATE_CHAT_START',
    url: '/createroom',
    payload: {
      //...data
      roomName: {
        ...data,
      },
    },
    meta: {
      thunk: true,
    },
  }),
})

export default connect(null, mapDispatchToProps)(DashboardPage)
