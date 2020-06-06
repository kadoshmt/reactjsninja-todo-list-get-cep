'use strict'

// função createReducer que recebe initialState e handleAction
const createReducer = (initialState, handleAction) => {
  // InitialState precisa ser passada
  if (typeof initialState === 'undefined') {
    throw new Error('initialState should not be undefined')
  }

  // O segundo parâmetro passado precisa ser um objeto
  if (Object.prototype.toString.call(handleAction) !== '[object Object]') {
    throw new Error('createReducer expects the second argument as an object representing reducer')
  }

  // que retorna uma nova função que será o reducer
  return (state = initialState, action) =>
    // verifica nas actions passada se action.type é uma propriedade de handleAction
  handleAction.hasOwnProperty(action.type)
    // se for, é uma função, logo, ele executa essa função passando state e a action
    ? handleAction[action.type](state, action)
    : state
}

export default createReducer
