'use strict'

import axios from 'axios'
import { SUCCESS, FETCHING } from './actions'

export const fetchAddress = (cep) => async (dispatch, getState) => {
  dispatch({ type: FETCHING })

  const response = await axios.get(`https://ws.apicep.com/cep/${cep}.json`)

  dispatch({
    type: SUCCESS,
    payload: response.data
  })
}
