import React from 'react'
import { Contacto } from '../models/contacto.class';
import ComponenteB from './ComponenteB';


const ComponenteA = () => {

    const defaultContac = new Contacto('Cesar', 'Torres', 'cesar@gmail.com', false);



  return (
    <div>
        <h1>Usuarios</h1>
        <ComponenteB conect={defaultContac} />
    </div>
  )
}



export default ComponenteA