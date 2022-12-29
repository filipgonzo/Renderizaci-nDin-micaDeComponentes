import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({lstColaboradores, setLstColaboradores}) => {
    
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')

    const agregarColaborador = (e) =>{
        e.preventDefault();
        setLstColaboradores([...lstColaboradores, { nombre: nombre, correo: email}]);
    }

  return (
    <Form onSubmit={agregarColaborador}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa nombre del colaborador" onChange={ (e) => setNombre(e.target.value)}/>        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>correo</Form.Label>
        <Form.Control type="email" placeholder="Ingresa correo del colaborador" onChange={ (e) => setEmail(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
       Agregar colaborador
      </Button>
    </Form>
  );

 
}

export default Formulario;
