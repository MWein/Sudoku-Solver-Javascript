import app from './appReducer'
import { combineReducers } from 'redux'
import sData from './sDataReducer'

export default combineReducers({
  app,
  sData,
})
