'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './redux-flow/configure-store'

const initialState = {
  todos: [
    { text: 'Tarefa 1', id: '123', completed: false },
    { text: 'Tarefa 2', id: '456', completed: true }
  ],

  address: {
    address: 'Avenida Santos Dumont - até 978',
    code: '60150-160',
    district: 'Centro',
    city: 'Fortaleza',
    state: 'CE',
    status: 200
  }
}

const store = configureStore(initialState)

store.dispatch(lazyAction())
function lazyAction () {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: 'todos:ADD_TODO',
        payload: {
          text: 'Lazy Action',
          id: '234'
        }
      })
    }, 3000)
  }
}

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
