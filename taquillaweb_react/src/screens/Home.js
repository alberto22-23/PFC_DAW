//ok
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

//Estilos
import "../styles/estilosTW.css";
//Imágenes
import esquema from "../figuras/esquema_relacional.jpg"
//import logoTW from "../figuras/logoTW_1000x500.jpg"

const Home = (props) => {

    const [regVisibilidad, setRegVisibilidad] = useState(true);
    const [abrirVisibilidad, setAbrirVisibilidad] = useState(true);
    const [cerrarVisibilidad, setCerrarVisibilidad] = useState(false);
    const [linkoperable, setLinkoperable] = useState(false);
    const [estadoSesion, setEstadoSesion] = useState("Abra sesión con sus datos de usuario.");
    ;
    // Guardamos el token en una variable
    const tokenUsuActual = sessionStorage.getItem('token');
    console.log('Token actual en home: ' + tokenUsuActual);

    //EFECTO PARA ESTABLECER LA VARIABLE DE ESTADO
    useEffect(() => {
        if (tokenUsuActual !== "Cerrada" && tokenUsuActual !== null) { // Al abrir Home en una pestaña nueva tockenUsuActual vale null
            // Cuando cerramos sesión y volvemos a abrirla en la misma pestaña el valor de tokenUsuActual es "Cerrada"
            setRegVisibilidad(false);         //el botón de registro no se ve
            setAbrirVisibilidad(false);       //el botón de abrir sesión no se ve
            setCerrarVisibilidad(true);       //el botón de cerrar se ve
            setLinkoperable(true);            //el botón de Explorar se ve
            setEstadoSesion("Sesión iniciada.");
        }
        console.log(regVisibilidad, abrirVisibilidad, linkoperable);

    }, []) //HOOK DE EFECTO se ejecuta solo cuando se carga la página por primera vez.

    //////// Final Ocultar - Visibilizar botones ////////

    return <div className="caja-links-cines">

        {/****************************** Inicio Barra de Sesión ******************************/}
        <div className="caja-sesion">
            <Link to="/registro" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: regVisibilidad ? '' : 'none' }}>Registro nuevo usuario</Link>

            <div style={{ color: 'firebrick', fontWeight: 'bold' }}>{estadoSesion}</div>

            <div className='div-abrir-cerrar'>
                <Link to="/abrir" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: abrirVisibilidad ? '' : 'none' }}>Abrir sesión</Link>
                {/**/}
                <Link to="/cerrar" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: cerrarVisibilidad ? '' : 'none' }}>Cerrar sesión</Link>
            </div>
        </div>
        {/****************************** Fin Barra de Sesión ******************************/}

        {/*Título*/}
        <div className='caja-logo-descripcion'>
            <h3>Presentación.</h3>
        </div>

         {/*Contenidos*/}
        <div className="presentacion">

             {/*Bienvenida*/}
            <div className="p-bienvenida" style={{ display: linkoperable ? '' : 'none' }}>
                <p  style={{ display: linkoperable ? '' : 'none' }}>¡Bienvenid@! ¡Explore TaquillaWeb y consiga sus entradas!</p>
                <Link to="/cines-pelis-estrenos" className="btn-explorar" style={{ display: linkoperable ? '' : 'none' }}>Explorar</Link>
            </div>

            {/*Textos, imágenes, etc.*/}
            <h3 className='apartado'>1. Finalidad y funcionamiento de TaquillaWeb</h3>

            <p>Esta práctica final de ciclo consiste en la realización del frontend para la aplicación <strong>TaquillaWeb</strong>.<br></br>
                El backend que le da soporte está previamente realizado y para la entrega de este ejercicio solo se han modificado algunas respuestas del servidor con el fin de permitir una mejor manipulación de las mismas en la parte cliente.<br></br>
                <br></br>
                El fin de <strong>TaquillaWeb</strong> es permitirle al usuario inspeccionar la cartelera que ofrecen los cines que hacen uso de la aplicación y, si lo desea, comprar las entradas para la película y el cine elegidos.<br></br>
                <br></br>

                Se permite el acceso libre a las páginas <strong>Presentación</strong> y <strong>Descripción del código</strong>. El acceso al resto de funcionalidades solo está permitido con el registro previo del usuario.<br></br>
            </p>

            <h3 className='apartado'>2. Parte cliente</h3>

            <p>La parte cliente de la aplicación está hecha con <strong>React JS</strong> y consta de las siguientes páginas:</p>

            <h4 className='apartado'>2.1. Páginas de acceso libre:</h4>
            
        </div>

    </div>
}

export default Home;