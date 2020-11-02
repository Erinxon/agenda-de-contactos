import React from 'react';

const BuscarContactos = ({getBusqueda, setBusqueda}) => {

    const guardarBusqueda = (e) => {
        e.preventDefault()
        setBusqueda(e.target.value)
    }

    return ( 
        <div class="col-lg-4 mt-3 mb-3">
            <form class="form-search" onChange={guardarBusqueda}>
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Buscar Contacto"/>
            </form>
        </div>
    );
}
 
export default BuscarContactos;