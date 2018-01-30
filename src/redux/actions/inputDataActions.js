import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('data', {
  setData: 'SET_DATA',
})
