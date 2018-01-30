import { applyMiddleware, createStore } from 'redux'
import middlewares from './middleware'
import reducers from './reducers'

const makeReduxStore = () => {
  const store = createStore(reducers, applyMiddleware(...middlewares))

  return store
}

export default makeReduxStore
