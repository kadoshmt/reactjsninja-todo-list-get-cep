'use strict'

import React from 'react'
import Form from 'components/form'
import TodosList from './components/todos-list'
import Filter from 'components/filter'
import 'milligram'
import SearchCepContainer from './components/search-cep'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: 30 }}>
    <div style={{ flex: 1, padding: 30 }}>
      <Form />
      <TodosList />
      <Filter />
    </div>
    <div style={{ flex: 2, padding: 30 }}>
      <SearchCepContainer />
    </div>
  </div>
)

export default App
