import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('engine', {
  setCellStack: 'SET_CELL_STACK',
  setConflictCells: 'SET_CONFLICT_CELLS',
  setInitialPassComplete: 'SET_INITIAL_PASS_COMPLETE',
  setInstantMode: 'SET_INSTANT_MODE',
})
