import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('engine', {
  setCellStack: 'SET_CELL_STACK',
})
