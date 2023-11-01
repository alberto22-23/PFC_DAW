import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardCine from '../components/CardCine';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";
import BarraSesion from '../components/BarraSesion';

const ContainerGetCines = () => {

    //////// Ocultar - Visbilizar botones ////////
    var regVisibilidad = true;
    var abrirVisibilidad = true;
    var cerrarVisibilidad = true;
    var estadoSesion = "Abra sesión con sus datos de usuario.";

    // Guardamos el token en una variable
    const tokenUsuActual = sessionStorage.getItem('token');
    console.log('Token actual:', tokenUsuActual);

    if(tokenUsuActual != 'Sesión cerrada'){
        regVisibilidad = false;
        abrirVisibilidad = false;
        estadoSesion = "Sesión iniciada."
    }
    //////// Final Ocultar - Visbilizar botones ////////

    //VARIABLE DE ESTADO
    const [cines, setCines] = useState([]); //cines es un array

    // Guardamos el token en una variable
    //const tokenUsuActual = sessionStorage.getItem('token');

    //const arrayCines = [];

    // Definimos los datos que queremos enviar en el cuerpo de la solicitud
    const datos = {};

    // Configuramos las cabeceras de la solicitud
    const config = {
        headers: {
            'Authorization': tokenUsuActual,
            'Accept': 'application/json'
        }
    };

    //EFECTO PARA ESTABLECER LA VARIABLE DE ESTADO
    useEffect(() => {
        const promesa = axios.get('http://localhost:8000/cines/', config);
        promesa.then((cines) => {           // cines es la respuesta que es un array de objetos
            console.log("Se ha recibido la respuesta");
            console.log(cines.data);        //devuelve el array de objetos cada objeto tiene los campos de cada cine
            setCines(cines.data);
            // Obtención de los horarios, iguales para todos los cines:
            //arrayCines = cines;

        })
    }, []) //HOOK DE EFECTO

    const sesiones_obj_js = cines[0]; // es un objeto js
    
    const sesiones_string = JSON.stringify(sesiones_obj_js);
    
    console.log(sesiones_obj_js);
    console.log(sesiones_string);

    /////////////////////////////// Crear un nuevo objeto Map///////////
    const mapa = new Map();

    // Iterar sobre las propiedades del objeto y añadirlas al mapa
    for (const clave in sesiones_obj_js) {
        if (sesiones_obj_js.hasOwnProperty(clave)) {
            mapa.set(clave, sesiones_obj_js[clave]);
        }
    }

    const mapa_sesiones_obj = mapa["Sesiones para todos los cines"];

    // Ahora 'mapa' es un objeto Map con las mismas claves y valores que 'objetoRegular'
    console.log(mapa);
    console.log(mapa_sesiones_obj);

    const mapa_sesiones = new Map;

    // Iterar sobre las propiedades del objeto y añadirlas al mapa
    for (const clave in mapa_sesiones_obj) {
        if (mapa_sesiones_obj.hasOwnProperty(clave)) {
            mapa_sesiones.set(clave, mapa_sesiones_obj[clave]);
        }
    }

    const sesion1 = mapa_sesiones["sesión 1"];
    console.log(sesion1);
    ///////////////////////////////////////////////////////////////////////////


    return (
        <div className="caja-links-cines">
            <div className="caja-sesion">
                {/**/}
                <Link to="/registro" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: regVisibilidad ? '' : 'none' }}>Registro nuevo usuario</Link>
                {/**/}

                <div style={{color: 'firebrick', fontWeight:'bold'}}>{estadoSesion}</div>

                <div className='div-abrir-cerrar'>
                    <Link to="/abrir" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: abrirVisibilidad ? '' : 'none' }}>Abrir sesión</Link>
                    {/**/}
                    <Link to="/cerrar" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: cerrarVisibilidad ? '' : 'none' }}>Cerrar sesión</Link>
                </div>
            </div>

            <div className="caja-indicaciones">
                <h3 className="h3-indicaciones">Revise la cartelera y compre las entradas.</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, tristique vitae aptent class sem senectus.
                    Volutpat gravida nostra mi ridiculus arcu parturient penatibus nascetur ad fames, venenatis convallis
                    in justo dictum nisi aptent habitant varius accumsan facilisi, netus placerat inceptos ante eu dignissim
                    auctor ut fusce. Libero nisi urna lobortis hendrerit a luctus lacus venenatis faucibus, pellentesque
                    fames curabitur suscipit non cursus nunc litora molestie, senectus diam curae auctor class tempus neque
                    congue.
                </p>
            </div>
            <div className="caja-links">
                {/* Link a todas las películas */}
                <Link to="/peliculas" className="enlace enlace-a-pelis-estrenos">Ver todas las películas</Link>
                {/* Link a los estrenos */}
                <Link to="/estrenos" className="enlace enlace-a-pelis-estrenos">Ver estrenos</Link>
            </div>
            <div className="container-cines">
                {/*sesiones_string*/}
                {/*Código JS entre llaves*/}
                {cines.slice(1).map((cine, i) => {
                    //map ejecuta esta función sobre cada objeto cine del array respuesta y devuelve CardCine cumplimentado
                    return (
                        <CardCine key={i} propcine={cine} />
                    )
                })}
            </div>
        </div>
    )

}

export default ContainerGetCines;

/*
[
{
"Sesiones para todos los cines": 
{
"Sesión 1": "16:30h - 18:30h", 
"Sesión 2": "19:00h - 21:00h", 
"Sesión 3": "21:30h – 23:30h"
}
}, 
{
"id_cine": 1, 
"nombre_cine": "Cines Austin", 
"logo_cine": "../figuras/logos/logo_Austin.jpg", 
"cantidadsalas_cine": 3
}, 
{
"id_cine": 2, 
"nombre_cine": "Cines TMA", 
"logo_cine": "../figuras/logos/logo_TMA.jpg", 
"cantidadsalas_cine": 5
}, 
{"id_cine": 3, 
"nombre_cine": "Cines Mix", 
"logo_cine": "../figuras/logos/logo_Mix.jpg", 
"cantidadsalas_cine": 6
}
]
*/