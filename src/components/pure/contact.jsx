import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'
import { LEVELS } from '../../models/conect'

import '../../styles/contact.scss';

const ContactComponent = ({ contact, estado, remove }) => {

  useEffect(() => {
    console.log('Tarea Creada')
  
    return () => {
      console.log(`Contacts: ${contact.name} is going to unMount`)
    }
  },[contact])

  /**
   * Function that returns a badge
   */
  function contactLevelBadge(){
    switch (contact.level) {
      case LEVELS.Conectado:
        
        return(
          <h6 className='mb-0'>
              <span className='badge bg-primary'>
                  {contact.level}
              </span>
          </h6>
        )

      case LEVELS.Desconectado:
        
        return(
          <h6 className='mb-0'>
              <span className='badge bg-warning'>
                  {contact.level}
              </span>
          </h6>
        )
    
      default:
        break;
    }
  }

  /**
   * 
   * @returns function return icon completed
   */
  function contactEstadoIcon(){
    if (contact.conectado) {
      return (<i onClick={() => estado(contact)} className='bi-toggle-on contact-action' style={{color:'green', fontWeight:'bold'}}></i>)
    } else {
      return (<i onClick={() => estado(contact)} className='bi-toggle-off contact-action' style={{color:'grey'}}></i>)
    }
  }



  return (
      <tr className='fw-normal'>
        <th>
          <span className='ms-2'>{contact.name}</span>
        </th>
        <td className='align-middle'>
          <span>{contact.email}</span>
        </td>
        <td className='align-middle'>
          {contactLevelBadge()}
        </td>
        <td className='align-middle'>
          {contactEstadoIcon()}
          <i onClick={() => remove(contact)} className='bi-trash contact-action' style={{color: 'tomato'}}></i>
        </td>
      </tr>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacto).isRequired,
    estado: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent
