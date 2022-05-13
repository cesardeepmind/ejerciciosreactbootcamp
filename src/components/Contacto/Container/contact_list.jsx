import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../../models/conect'
import { Contacto } from '../../../models/contacto.class'
import ContactComponent from '../../pure/contact';
import ContactForm from '../Form/contactForm';


import '../../../styles/contact.scss'



const ContactListComponent = () => {

  const defaultContacto = new Contacto('Example', 'email@email.com', true, LEVELS.Conectado);
  const defaultContacto2 = new Contacto('Example2', 'email2@email.com', false, LEVELS.Desconectado);
  const defaultContacto3 = new Contacto('Example3', 'email3@email.com', false, LEVELS.Desconectado);



  const [contacts, setcontacts] = useState([defaultContacto, defaultContacto2, defaultContacto3]);
  const [loading, setLoading] = useState(true);

  //control del ciclo de vida del compone
  useEffect(() => {
    console.log('Modificacion de Contacto');
    setLoading(false);
    return () => {
      console.log('Listado de contacto component');
    }
  }, [contacts])


  function estadoContact(contc){
    
    const index = contacts.indexOf(contc);
    const tempContact = [...contacts];
    tempContact[index].conectado = !tempContact[index].conectado;
    //we update the state of the component the new list of contact and it will update the iteration of the task
    // in order to show the contact update
    setcontacts(tempContact)
  }

  function deleteContact(contc){
    
    const index = contacts.indexOf(contc);
    const tempContac = [...contacts];
    tempContac.splice(index,1);
    setcontacts(tempContac);
  }

  function addContact(contc){

    const tempContact = [...contacts];
    tempContact.push(contc);
    setcontacts(tempContact);
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* Card header */}
          <div className='card-header p-3'>
            <h5>Your Contacts:</h5>
          </div>
          {/* Card body */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Estado</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  contacts.map((contact, index) => {
                    return (
                      <ContactComponent
                        key={index}
                        contact={contact} 
                        estado={estadoContact}
                        remove={deleteContact}
                      />
                    )
                  })
                }
                
              </tbody>
            </table>
          </div>
        </div>
          <ContactForm add={addContact}/>
      </div>
      {/* Aplicar un map para renderizar la lista de tareas */}
      
    </div>
  )
}



export default ContactListComponent