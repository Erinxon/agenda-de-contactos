import React, { Fragment, useState } from 'react';

import Header from './componentes/Header'
import BuscarContactos from './componentes/BuscarContactos'
import BtnContactos from './componentes/BtnContactos'
import AgregarContactos from './componentes/AgregarContactos'
import EditarContacto from './componentes/EditarContacto'

const contactos = [
  { id: 1, nombre: 'Erinxon', apellido: 'Santana', telefono: '8253633' },
  { id: 2, nombre: 'Ariel', apellido: 'Santana', telefono: '8253633' },
  { id: 3, nombre: 'Maria', apellido: 'Santana', telefono: '8253633' },
  { id: 4, nombre: 'Pedro', apellido: 'Santana', telefono: '8253633' },
  { id: 5, nombre: 'Danilo', apellido: 'Santana', telefono: '8253633' },
  { id: 6, nombre: 'Gonzalo', apellido: 'Santana', telefono: '8253633' },
]

function App() {

  const [name, saveName] = useState('')
  const [lastName, saveLastName] = useState('')
  const [phone, savePhone] = useState('')

  const [getId, setId] = useState()
  const [getContactos, setContactos] = useState(contactos)

  const [getBusqueda, setBusqueda] = useState('')

  let eliminar = (contacto) => {
    let cont = 0;
    let arreglo = getContactos
    arreglo.forEach((registro) => {
      if (contacto.id === registro.id) {
        arreglo.splice(cont, 1);
      }
      cont++;
    });

    let lista = []
    for (let i = 0; i < arreglo.length; i++) {
      lista = Array.from([...arreglo])
    }

    setContactos([...lista])

  }

  let editar = (id) => {
    setId(id)
    let cont = 0;
    let arreglo = getContactos
    arreglo.forEach((registro) => {
      if (id === registro.id) {
        saveName(arreglo[cont].nombre)
        saveLastName(arreglo[cont].apellido)
        savePhone(arreglo[cont].telefono)
      }
      cont++;
    });

  }

  function mostrarContactos() {
    if (getBusqueda.length > 0) {
        const resultBusqueda = getContactos.filter(busqueda => {
            if(busqueda.nombre === getBusqueda || (busqueda.nombre + ' ' + busqueda.apellido) === getBusqueda 
              || busqueda.telefono === getBusqueda || busqueda.id == getBusqueda){
                return busqueda
            }
        });

        return resultBusqueda.map(contacto => (
          <tr key={contacto.id}>
            <th scope="row">{contacto.id}</th>
            <td>{contacto.nombre}</td>
            <td>{contacto.apellido}</td>
            <td>{contacto.telefono}</td>
            <td>
              <a href="" class="btn-editar" id="editar" onClick={(e) => {
                e.preventDefault()
                editar(contacto.id)
              }} data-toggle="modal" data-target="#abrir-modal-editar">
                <i className="far fa-edit mr-1"></i>Editar</a>
            </td>
            <td>
              <a href="" class="btn-eliminar" id="eliminar" onClick={(e) => {
                e.preventDefault()
                eliminar(contacto)
              }}>
                <i className="fas fa-trash-alt mr-1"></i>Eliminar</a>
            </td>
          </tr>
        ))
    } else 
    {
      return getContactos.map(contacto => (
        <tr key={contacto.id}>
          <th scope="row">{contacto.id}</th>
          <td>{contacto.nombre}</td>
          <td>{contacto.apellido}</td>
          <td>{contacto.telefono}</td>
          <td>
            <a href="" class="btn-editar" id="editar" onClick={(e) => {
              e.preventDefault()
              editar(contacto.id)
            }} data-toggle="modal" data-target="#abrir-modal-editar">
              <i className="far fa-edit mr-1"></i>Editar</a>
          </td>
          <td>
            <a href="" class="btn-eliminar" id="eliminar" onClick={(e) => {
              e.preventDefault()
              eliminar(contacto)
            }}>
              <i className="fas fa-trash-alt mr-1"></i>Eliminar</a>
          </td>
        </tr>
      ))
    }

  }


  return (
    <Fragment>
      <Header />
      <section className="container mt-4">
        <div className="row justify-content-between mt-4">
          <BuscarContactos
            getBusqueda={getBusqueda}
            setBusqueda={setBusqueda}
          />
          <BtnContactos />
          <div className="col-lg-12 mt-3 mb-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {getContactos.length > 0 ? mostrarContactos() : ''}
              </tbody>
            </table>
          </div>
          <AgregarContactos
            name={name}
            saveName={saveName}
            lastName={lastName}
            saveLastName={saveLastName}
            phone={phone}
            savePhone={savePhone}
            getContactos={getContactos}
            setContactos={setContactos}
          />
        </div>
        <EditarContacto
          name={name}
          saveName={saveName}
          lastName={lastName}
          saveLastName={saveLastName}
          phone={phone}
          savePhone={savePhone}
          getContactos={getContactos}
          setContactos={setContactos}
          id={getId}
          setId={setId}
        />
      </section>
    </Fragment>
  );
}

export default App;
