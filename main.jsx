import AppContainer from './src/containers/AppContainer.jsx'
import { Provider } from 'react-redux'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import makeStore from './src/redux'
import { render } from 'react-dom'


function startup() {
  const store = makeStore()

  global.store = store

  render(
    <Provider store={store}>
      <Router>
        <AppContainer />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

startup()
