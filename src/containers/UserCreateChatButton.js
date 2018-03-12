import React from 'react'
import { connect } from 'react-redux'
// import { connect } from 'react-redux'
// import { fromSocial } from 'store/selectors'
// import { modalShow, socialLogout } from 'store/actions'

import { CreateChatButton } from 'components'


// const UserCreateChatButton = props => <CreateChatButton {...props} />

const UserCreateChatButton = props => <CreateChatButton {...props} />
//   render() {
//     return <CreateChatButton {...this.props} />
//   }
// }

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch({
    type: 'CREATE_CHAT_START',
    url: '/api/chats',
    payload: {},
    meta: {
      thunk: true,
    },
  }).then(function(detail){
    // debugger;
    console.log(detail);
  }),
})

// export default UserCreateChatButton
export default connect(null, mapDispatchToProps)(UserCreateChatButton)
