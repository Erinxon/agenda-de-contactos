import React, { useState } from 'react';

const EditarContacto = ({ name, saveName, lastName, saveLastName, phone, savePhone, getContactos, setContactos, id, setId }) => {

    const [error, guardarError] = useState(false);

    const datosContactoEditar = {
        nombre: name,
        apellido: lastName,
        telefono: phone
    }

    const guardarDatos = (e) => {
        e.preventDefault()
        if (name === '' || lastName === '' || phone === '') {
            guardarError(true)
            return;
        } else {
            guardarError(false)
            let cont = 0;
            let contactosEditar = getContactos
            contactosEditar.forEach((datosContacto) => {
                if (id === datosContacto.id) {
                    contactosEditar[cont].nombre = name
                    contactosEditar[cont].apellido = lastName
                    contactosEditar[cont].telefono = phone
                }
                cont++;
            });

            let listaContactos = []
            for (let i = 0; i < contactosEditar.length; i++) {
                listaContactos = Array.from([...contactosEditar])
            }     
            setContactos([...listaContactos])
        }
    }

    const limpiar = () => {
        document.getElementById('nombre').value = ''
        document.getElementById('apellido').value = ''
        document.getElementById('telefono').value = ''
        saveName('')
        saveLastName('')
        savePhone('')
        setId(undefined)
    }

    return (
        <div className="col-lg-12">
            <div className="modal fade" id="abrir-modal-editar" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Editar Contacto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={limpiar}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={guardarDatos}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre-edi"
                                            value={datosContactoEditar.nombre}
                                            placeholder="Nombre"
                                            onChange={e => saveName(e.target.value)}
                                        />

                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="apellido-edi"
                                            value={datosContactoEditar.apellido}
                                            placeholder="Apellido"
                                            onChange={e => saveLastName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="telefono-edi"
                                            value={datosContactoEditar.telefono}
                                            placeholder="Telefono"
                                            onChange={e => savePhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-12 mt-3 modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={limpiar}>Cancelar</button>
                                        <button type="submit" className="btn btn-primary editar">Editar Contacto</button>
                                    </div>
                                    {(error) ?
                                        <div className="col-lg-12 mt-3">
                                            <div className="alert alert-danger">
                                                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                                <strong>Error!</strong> Todos los campos son obligatorios
                                            </div>
                                        </div>
                                    : ''}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditarContacto;