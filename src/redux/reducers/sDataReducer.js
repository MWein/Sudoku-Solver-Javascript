import { combineReducers } from 'redux'
import { constants as sDataConstants } from '../actions/sDataActions'

const defaultData = require('../../initialSData.json')
const defaultPencilMarks = require('../../initialPencilMarks.json')

const data = (state = defaultData, action = {}) => {
  switch (action.type) {
    case sDataConstants.SET_DATA: return action.payload
    default: return state
  }
}

const pencilMarks = (state = defaultPencilMarks, action = {}) => {
  switch (action.type) {
    case sDataConstants.SET_PENCIL_MARKS: return action.payload
    default: return state
  }
}

const reducer = combineReducers({
  data,
  pencilMarks,
})

export default reducer
