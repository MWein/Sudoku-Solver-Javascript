import { combineReducers } from 'redux'
import { constants as solverConstants } from '../actions/solverEngineActions'

const cellStack = (state = [], action = {}) => {
  switch (action.type) {
    case solverConstants.SET_CELL_STACK: return action.payload
    default: return state
  }
}

const initialPassComplete = (state = false, action = {}) => {
  switch (action.type) {
    case solverConstants.SET_INITIAL_PASS_COMPLETE: return action.payload
    default: return state
  }
}

const conflictCells = (state = [], action = {}) => {
  switch (action.type) {
    case solverConstants.SET_CONFLICT_CELLS: return action.payload
    default: return state
  }
}

const reducer = combineReducers({
  cellStack,
  initialPassComplete,
  conflictCells,
})

export default reducer
