import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('app', {
  setEnabled: 'SET_ENABLED',
  setDisabled: 'SET_DISABLED',
})
