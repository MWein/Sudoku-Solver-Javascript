import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('app', {
  setEnabled: 'SET_ENABLED',
  setDisabled: 'SET_DISABLED',
  setFocusCell: 'SET_FOCUS_CELL',
  setFocusType: 'SET_FOCUS_TYPE',
})
