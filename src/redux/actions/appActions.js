import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('app', {
  setPuzzleState: 'SET_PUZZLE_STATE',
  setEnabled: 'SET_ENABLED',
  setFocusCell: 'SET_FOCUS_CELL',
})
