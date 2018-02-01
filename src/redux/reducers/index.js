import app from './appReducer'
import { combineReducers } from 'redux'
import sData from './sDataReducer'
import solver from './solverEngineReducer'

export default combineReducers({
  app,
  sData,
  solver,
})
