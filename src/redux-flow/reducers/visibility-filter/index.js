'use strict'

import { SET_VISIBILITY_FILTER, SHOW_ALL } from './actions'
import createReducer from '../create-reducer'

const initialState = SHOW_ALL

const visibilityFilter = createReducer(initialState, {
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter
})

/* const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
  }
  return state
} */

export default visibilityFilter
