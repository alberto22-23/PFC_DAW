import { ReactDOM } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

//Estilos
import "../styles/estilosTW.css";
//Imágenes
import esquema from "../figuras/patio_butacas_antiguo.jpg"

///////////////////////// FUNCIONA CORRECTAMENTE /////////////////////////////////
const ContainerCerrar = () => {

    //Comprobamos valor actual del token:
    var tokenUsuActual = sessionStorage.getItem('token');
    console.log('Token actual en cerrar 1: ' + tokenUsuActual);

    sessionStorage.setItem('token', "Cerrada"); //con null no funciona

    tokenUsuActual = sessionStorage.getItem('token');
    console.log('Token actual en cerrar 2: ' + tokenUsuActual);

    return (
        <div className='container-cerrar'>
                <h3><strong>Se ha cerrado la sesión.</strong></h3>
                <h3 className='h3-indicaciones'><strong>¡Hasta la próxima!</strong></h3>
                <br></br>
                <Link to="/" className="enlace-reg-log">Link a Inicio</Link>
                <img src={esquema} alt="logo" title="Cine Capitol" className="imagen-esquema-relacional" />
                <br></br>
        </div>
    );
}

export default ContainerCerrar;
