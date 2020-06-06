'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { SUCCESS, FETCHING } from './actions'

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    code: '',
    district: '',
    city: '',
    state: '',
    status: 0,
    isFetching: false
  })
  const action = deepFreeze({
    type: SUCCESS,
    payload: { 
      address: 'Avenida E-3',
      code: '78050-267',
      district: 'Jardim Aclimação',
      city: 'Cuiabá',
      state: 'MT',
      status: 200
     }
  })
  const after = {
    address: 'Avenida E-3',
    code: '78050-267',
    district: 'Jardim Aclimação',
    city: 'Cuiabá',
    state: 'MT',
    status: 200,
    isFetching: false
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
