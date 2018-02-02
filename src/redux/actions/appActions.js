import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('app', {
  setComplete: 'SET_COMPLETE',
  setEnabled: 'SET_ENABLED',
  setDisabled: 'SET_DISABLED',
  setFocusCell: 'SET_FOCUS_CELL',
  setFocusType: 'SET_FOCUS_TYPE',
  clearFocus: 'CLEAR_FOCUS',
})
