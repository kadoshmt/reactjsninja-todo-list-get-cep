'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from 'reducers/address/action-creators'

export const SearchCep = ({ address, code, district, city, state, status, handleSubmit, isFetching }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' />
      <button type='submit' disabled={isFetching}>
        { isFetching ? 'Buscando...' : 'Buscar Endereço' }
      </button>
    </form>

    { status === 400 && <div style={{ color: 'red' }}>Cep não encontrado.</div> }

    { status === 200 && (
      <table>
        <thead>
          <tr>
            <th>Cep</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{code}</td>
            <td>{address}</td>
            <td>{district}</td>
            <td>{city}</td>
            <td>{state}</td>
          </tr>
        </tbody>
      </table>
    )}
  </div>
)

const mapStateToProps = (state) => state.address

/* const mapDispatchToProps = (dispatch) => ({
  updateAddress: (data) => dispatch(updateAddress(data))
})
// explicação aula M3#A60
const mapDispatchToProps = { fetchAddress } */

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCep)
