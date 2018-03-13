// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
// import { initialState } from './selectors'
import { SET_USERNAME } from './actions'

export const initialState = {
  owner: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERNAME:
      return {
        ...state,
        owner: payload,
      }
    default:
      return state
  }
}
