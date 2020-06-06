'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'reducers'
import thunk from 'redux-thunk'

export default (initialState = {}) => {
  const enhancer = compose(applyMiddleware(thunk), logger())
  // const store = createStore(reducer, applyMiddleware(middleware))
  // const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk))
  const store = createStore(rootReducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept('reducers', () => {
      const NextReducer = require('reducers').default
      store.replaceReducer(NextReducer)
    })
  }
  return store
}

/**
const middleware = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      return next(action)
    }
  }
}
*/

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x

// função de middleware otimizada
/* const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.group(`LOGGER->${action.type}`)
  console.log('LOGGER::will dispatch: ', action)
  const nextAction = next(action)
  console.log('state:', getState())
  console.log('LOGGER::next action: ', nextAction)
  console.groupEnd(`LOGGER->${action.type}`)
  return nextAction
} */

/* const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
} */
