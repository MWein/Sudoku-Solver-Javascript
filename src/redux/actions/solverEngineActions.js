import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('engine', {
  setRepeat: 'SET_REPEAT',
  setCellStack: 'SET_CELL_STACK',
  setConflictCells: 'SET_CONFLICT_CELLS',
})
