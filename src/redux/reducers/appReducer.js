import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'


const enabled = (state = true, action = {}) => {
  switch (action.type) {
    case appConstants.SET_ENABLED: return true
    case appConstants.SET_DISABLED: return false
    default: return state
  }
}

const reducer = combineReducers({
  enabled,
})

export default reducer
