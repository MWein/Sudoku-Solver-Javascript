import { combineReducers } from 'redux'
import { constants as solverConstants } from '../actions/solverEngineActions'

const cellStack = (state = [], action = {}) => {
  switch (action.type) {
    case solverConstants.SET_CELL_STACK: return action.payload
    default: return state
  }
}

const repeat = (state = false, action = {}) => {
  switch (action.type) {
    case solverConstants.SET_REPEAT: return action.payload
    default: return state
  }
}

const reducer = combineReducers({
  cellStack,
  repeat,
})

export default reducer
