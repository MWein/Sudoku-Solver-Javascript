const makeReduxMiddleware = () => {
  const middlewares = [ ]

  //if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger') // eslint-disable-line
  const loggerMiddleware = createLogger({
    collapsed: true,
    duration: true,
    timestamp: true,
    logErrors: true,
  })

  middlewares.push(loggerMiddleware)
  //}


  return middlewares
}

export default makeReduxMiddleware()
