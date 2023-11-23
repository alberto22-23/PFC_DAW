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

            <div style={{ color: 'firebrick', fontWeight: 'bold' }}><div style={{marginLeft: 20}}>{estadoSesion}</div></div>

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
                <p style={{ display: linkoperable ? '' : 'none' }}>¡Bienvenid@! ¡Explora TaquillaWeb.com y consigue tus entradas!</p>
                <Link to="/cines-pelis-estrenos" className="btn-explorar" style={{ display: linkoperable ? '' : 'none' }}>Explorar</Link>
            </div>

            {/*Indicaciones*/}
            <div className="caja-indicaciones">
                <h3 className="h3-indicaciones apartado">Elige TaquillaWeb.com y disfruta del cine a lo grande.</h3>
                <br></br>
                <p className='p-ticket'>
                Haz de <strong>TaquillaWeb</strong> tu aplicación favorita para la compra de entradas en tus cines preferidos.<br></br>
                Aprovecha las ventajas de revisar la cartelera conjuntamente con independencia de la distribuidora.<br></br>
                <br></br>
                Desde nuestro sitio web puedes acceder cómodamente a la oferta de varias cadenas de distribución con las últimas novedades de la cartelera.<br></br>
                <br></br>
                Crea una cuenta de usuario en <strong>TaquillaWeb.com</strong> y aprovecha nuestras ofertas y promociones. Puedes comprar tus entradas con una antelación de hasta 7 días.<br></br>
                <br></br>
                <strong className='apartado'>¡Te esperamos!</strong><br></br>
                </p>
            </div>

        </div>

    </div>
}

export default Home;