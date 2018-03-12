// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
export const CREATE_CHAT_START = 'CREATE_CHAT_START'
export const CREATE_CHAT_SUCCESS = 'CREATE_CHAT_SUCCESS'
export const CREATE_CHAT_FAIL = 'CREATE_CHAT_FAIL'

export const createChatAction = type => ({
  type,
})
