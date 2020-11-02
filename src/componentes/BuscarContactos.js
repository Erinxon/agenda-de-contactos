import React from 'react';

const BuscarContactos = () => {
    return ( 
        <div class="col-lg-4 mt-3 mb-3">
            <form class="form-search" id="formulario">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Buscar Contacto" id="inputTexto" />
            </form>
        </div>
    );
}
 
export default BuscarContactos;