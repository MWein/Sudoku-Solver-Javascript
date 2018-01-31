import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('sdata', {
  setData: 'SET_DATA',
})
