import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardCine from '../components/CardCine';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";
//import BarraSesion from '../components/BarraSesion';

const ContainerGetCines = () => {

    //////// Ocultar - Visibilizar botones ////////
    //var regVisibilidad = true;
    //var abrirVisibilidad = true;
    var cerrarVisibilidad = true;
    var estadoSesion = "Abra sesión con sus datos de usuario.";

    // Guardamos el token en una variable
    const tokenUsuActual = sessionStorage.getItem('token');
    console.log('Token actual:', tokenUsuActual);

    if (tokenUsuActual != "Cerrada") {
        //regVisibilidad = false;
        //abrirVisibilidad = false;
        estadoSesion = "Sesión iniciada."
    }
    //////// Ocultar - Visibilizar botones ////////

    //VARIABLES DE ESTADO
    const [cines, setCines] = useState([]); //cines es un array
    const [primeraSesion, setPrimeraSesion] = useState("");
    const [segundaSesion, setSegundaSesion] = useState("");
    const [terceraSesion, setTerceraSesion] = useState("");

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
            const sesiones_todos_cines = cines.data[0]; // es un objeto js
            console.log("Sesiones de los cines: " + sesiones_todos_cines);

            const sesion_1 = sesiones_todos_cines["sesion_1"];
            const sesion_2 = sesiones_todos_cines["sesion_2"];
            const sesion_3 = sesiones_todos_cines["sesion_3"];
            console.log("Sesión 1: " + sesion_1 + "; " + "Sesión 2: " + sesion_2 + "; " + "Sesión 3: " + sesion_3);

            setPrimeraSesion(sesion_1);
            setSegundaSesion(sesion_2);
            setTerceraSesion(sesion_3);
        })
    }, []) //HOOK DE EFECTO

    return (
        <div className="caja-links-cines">

            {/****************************** Inicio Barra de Sesión ******************************/}
            <div className="caja-sesion">
                
                {/*<Link to="/registro" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: regVisibilidad ? '' : 'none' }}>Registro nuevo usuario</Link>*/}

                <div style={{ color: 'firebrick', fontWeight: 'bold' }}><div style={{marginLeft: 20}}>{estadoSesion}</div></div>

                <div className='div-abrir-cerrar'>
                    {/*<Link to="/abrir" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: abrirVisibilidad ? '' : 'none' }}>Abrir sesión</Link>*/}
                    {/**/}
                    <Link to="/cerrar" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: cerrarVisibilidad ? '' : 'none' }}>Cerrar sesión</Link>
                </div>
            </div>
            {/****************************** Fin Barra de Sesión ******************************/}

            {/*Indicaciones*/}
            <div className="caja-indicaciones">
                <h3 className="h3-indicaciones apartado">Revisa la cartelera y compra las entradas.</h3>
                <p className='p-ticket'>
                    Puedes examinar la cartelera de un vistazo, ver solo las películas en estreno o hacer una búsqueda personalizada.<br></br>
                    ·················<br></br>
                    Después elige un cine y compra tus entradas.
                </p>
            </div>

            <div className="caja-links">
                {/* Link a todas las películas */}
                <Link to="/peliculas" className="enlace enlace-a-pelis-estrenos">Ver todas las películas</Link>
                {/* Link a los estrenos */}
                <Link to="/estrenos" className="enlace enlace-a-pelis-estrenos">Ver estrenos</Link>
                {/* Link a los estrenos */}
                <Link to="/buscador" className="enlace enlace-a-pelis-estrenos">Buscador</Link>
            </div>
            
            <div className="container-cines">
                {/*sesiones_string*/}
                {/*Código JS entre llaves azules*/}
                {cines.slice(1).map((cine, i) => {
                    //map ejecuta esta función sobre cada objeto cine del array respuesta y devuelve CardCine cumplimentado
                    return (
                        <CardCine key={i} propcine={cine} />
                    )
                })}
            </div>

            <div className="caja-indicaciones">
                
            <h4 className="h3-indicaciones apartado">Sesiones para todos los cines:</h4>
                <p className='p-ticket'>
                1ª: {primeraSesion} · · · 2ª: {segundaSesion} · · · 3ª: {terceraSesion}
                </p>
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