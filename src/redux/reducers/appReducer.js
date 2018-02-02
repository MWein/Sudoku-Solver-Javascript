import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'


const enabled = (state = true, action = {}) => {
  switch (action.type) {
    case appConstants.SET_ENABLED: return action.payload
    default: return state
  }
}

const puzzleState = (state = 'Empty Cells', action = {}) => {
  switch (action.type) {
    case appConstants.SET_PUZZLE_STATE: return action.payload
    default: return state
  }
}

const focusCell = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_FOCUS_CELL: return action.payload
    case appConstants.CLEAR_FOCUS: return ''
    default: return state
  }
}

const focusType = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_FOCUS_TYPE: return action.payload
    case appConstants.CLEAR_FOCUS: return ''
    default: return state
  }
}

const reducer = combineReducers({
  enabled,
  puzzleState,
  focusCell,
  focusType,
})

export default reducer
