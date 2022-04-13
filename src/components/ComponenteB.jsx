import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'

const ComponenteB = ({conect}) => {
  return (
    <div>
        <h2>Nombre: { conect.Nombre }</h2>
        <h3>Apellido: { conect.Apellido }</h3>
        <h4>Email: { conect.Email }</h4>
        <h5>Contacto esta:  { conect.Conectado ? 'En linea' : 'No disponible' }</h5>
    </div>
  )
}

ComponenteB.propTypes = {
    conect: PropTypes.instanceOf(Contacto)
}

export default ComponenteB