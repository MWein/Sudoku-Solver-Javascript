import app from './appReducer'
import { combineReducers } from 'redux'
import inputs from './inputsReducer'


export default combineReducers({
  app,
  inputs,
})
