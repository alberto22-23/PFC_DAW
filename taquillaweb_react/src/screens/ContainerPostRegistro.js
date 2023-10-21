import { ReactDOM } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

//Estilos
import "../styles/estilosTW.css";


const ContainerPostRegistro = () => {

    //useEffect(() => {
    // Definimos los datos que queremos enviar en el cuerpo de la solicitud

    //}, []); // El array vacío como segundo argumento asegura que useEffect se ejecute una sola vez al montar el componente.

    return (
        <div className='container-registro'>
            <div className='campos'>
                <div className="form-titulo">
                    <h3><strong>Registro nuevo usuario</strong></h3>
                </div>
                <fieldset className="fieldset-flex">
                    <label for="nombre" id="fornombre">Nombre de usuario</label>
                    <input type="text" id="nombre" className="largo" />

                    <label for="email" id="foremail">Email</label>
                    <input type="text" id="email" className="largo" />

                    <label for="password" id="forpassword">Contraseña</label>
                    <input type="text" id="password" className="largo" />

                    <label for="confirm" id="forconfirm">Confirmar contraseña</label>
                    <input type="text" id="confirm" className="largo" />

                    <button className="btn-entrar-registrar medio">Registrar</button>

                    <Link to="/abrir" className="enlace-reg-log">Link a Inicio sesión</Link>
                </fieldset>
            </div>
        </div>
    );
}


export default ContainerPostRegistro;