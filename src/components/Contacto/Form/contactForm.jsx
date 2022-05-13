import React, {useRef} from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/conect';
import { Contacto } from '../../../models/contacto.class';

const ContactForm = ({ add }) => {


  const nameRef = useRef('');
  const emailRef = useRef('');
  const conectRef = useRef(LEVELS.Desconectado);

  function addContact(e){
    e.preventDefault();
    const newContact = new Contacto(
      nameRef.current.value,
      emailRef.current.value,
      false,
    )
    add(newContact);
  }



  return (
    <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='Name' required autoFocus />
        <input ref={emailRef} id='email' type='email' placeholder='Email' className='form-control form-control-lg' required />
        <label htmlFor='selectLevel' className='sr-only'>Estado</label>
        <select ref={conectRef} defaultValue={LEVELS.Desconectado} id='selectLevel'>
          <option value={LEVELS.Conectado}>
            Conectad@
          </option>
          <option value={LEVELS.Desconectado}>
            Desconectad@
          </option>
        </select>
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-3'>
        Add Contact
      </button>
    </form>
  )
}

ContactForm.protoTypes = {
  add: PropTypes.func.isRequired
}

export default ContactForm;