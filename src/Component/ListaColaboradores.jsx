import React from 'react'



const ListaColaboradores = ({ lstColaboradores }) => {

  return (
    <div>
        <h2 className='mt-4'>Lista de Colaboradores</h2>
        <ol>
            {lstColaboradores.map( (c) => <li key={c.id}> {c.nombre} - {c.correo}</li>)}
        </ol>
    </div>
  )
}

export default ListaColaboradores;