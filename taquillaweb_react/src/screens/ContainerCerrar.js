import { ReactDOM } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

//Estilos
import "../styles/estilosTW.css";

/////////////////////// FUNCIONA CORRECTAMENTE /////////////////////////////////
const ContainerCerrar = () => {

    const tokenUsuActual = sessionStorage.getItem('token');
    console.log('Token actual:' + tokenUsuActual);
    sessionStorage.setItem('token', 'Sesión cerrada');

    return (
        <div className='container-cerrar'>

            <div className="form-titulo">
                <h3><strong>Se ha cerrado la sesión.</strong></h3>
                <Link to="/" className="enlace-reg-log">Link a Inicio</Link>
            </div>


        </div>
    );
}

export default ContainerCerrar;
