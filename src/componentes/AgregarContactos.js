import React, { useState } from 'react';

const AgregarContactos = ({name, saveName, lastName, saveLastName, phone, savePhone, getContactos, setContactos }) => {

    const [error, guardarError] = useState(false);

    const guardarDatos = (e) => {
        e.preventDefault()
        if (name === '' || lastName === '' || phone === '') {
            guardarError(true)
            return;
        }else{
            guardarError(false)
            let lista = []
            for(let i=0;i<getContactos.length;i++){
                lista = Array.from([...getContactos])
            }
            setContactos([...lista,{id: getContactos.length + 1, nombre: name, apellido: lastName, telefono: phone }])
            limpiarInput()
            
        }
        
    }

    function limpiarInput(){
        document.getElementById('nombre').value = ''
        document.getElementById('apellido').value = ''
        document.getElementById('telefono').value = ''
        saveName('')
        saveLastName('')
        savePhone('')
    }

    return (
        <div className="col-lg-12">
            <div className="modal fade" id="abrir-modal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Agregar Nuevo Contacto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                            id="nombre"
                                            placeholder="Nombre"
                                            onChange={e => saveName(e.target.value)}
                                        />

                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="apellido"
                                            placeholder="Apellido"
                                            onChange={e => saveLastName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="telefono"
                                            placeholder="Numero de telefono"
                                            onChange={e => savePhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-12 mt-3 modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="submit" className="btn btn-primary">Guardar Contacto</button>
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

export default AgregarContactos;