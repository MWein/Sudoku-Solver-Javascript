import { combineReducers } from 'redux'
import { constants as sDataConstants } from '../actions/sDataActions'

const defaultData = require('../../initialSData.json')

const data = (state = defaultData, action = {}) => {
  switch (action.type) {
    case sDataConstants.SET_DATA: return action.payload
    default: return state
  }
}

const reducer = combineReducers({
  data,
})

export default reducer
