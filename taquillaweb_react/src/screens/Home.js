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
        <div className="caja-sesion">
            {/**/}
            <Link to="/registro" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: regVisibilidad ? '' : 'none' }}>Registro nuevo usuario</Link>
            {/**/}

            <div style={{ color: 'firebrick', fontWeight: 'bold' }}>{estadoSesion}</div>

            <div className='div-abrir-cerrar'>
                <Link to="/abrir" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: abrirVisibilidad ? '' : 'none' }}>Abrir sesión</Link>
                {/**/}
                <Link to="/cerrar" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: cerrarVisibilidad ? '' : 'none' }}>Cerrar sesión</Link>
            </div>
        </div>
        <div className='caja-logo-descripcion'>
            <h3>Presentación.</h3>
        </div>



        <div className="presentacion">

            <p className="p-bienvenida" style={{ display: linkoperable ? '' : 'none' }}>¡Bienvenid@! ¡Explore TaquillaWeb y consiga sus entradas!</p>
            <Link to="/cines-pelis-estrenos" className="btn-explorar" style={{ display: linkoperable ? '' : 'none' }}>Explorar</Link>

            <p>
                <h3>1. Finalidad y funcionamiento de TaquillaWeb</h3>

                Esta práctica final de ciclo consiste en la realización del frontend para la aplicación <strong>TaquillaWeb</strong>.<br></br>
                El backend que le da soporte está previamente realizado y para la entrega de este ejercicio solo se han modificado algunas respuestas del servidor con el fin de permitir una mejor manipulación de las mismas en la parte cliente.<br></br>
                <br></br>
                El fin de <strong>TaquillaWeb</strong> es permitirle al usuario inspeccionar la cartelera que ofrecen los cines que hacen uso de la aplicación y, si lo desea, comprar las entradas para la película y el cine elegidos.<br></br>
                <br></br>

                Se permite el acceso libre a las páginas <strong>Presentación</strong> y <strong>Descripción del código</strong>. El acceso al resto de funcionalidades solo está permitido con el registro previo del usuario.<br></br>
                <br></br>

                <h3>2. Parte cliente</h3>

                La parte cliente de la aplicación está hecha con <strong>React JS</strong> y consta de las siguientes páginas:<br></br>
                <br></br>

                <h4 style={{color:'royalblue'}}>2.1. Páginas de acceso libre:</h4>
                <ul>
                    <li>Presentación (Inicio)</li>
                    <li>Descripción del código</li>
                    <li>Registro nuevo usuario</li>
                    <li>Abrir sesión</li>
                </ul>

                <h4 style={{color:'royalblue'}}>2.1. Páginas de acceso limitado a usuarios registrados:</h4>
                <ol>
                    <li>Presentación (como usuario registrado)</li>
                    <li>Página de Exploración, con enlaces a las siguientes:</li>
                    <ul>
                        <li>Todas las películas</li>
                        <li>Estrenos</li>
                        <li>Buscador</li>
                        <li>Películas por cine, con enlace a:</li>
                        <ul><li>Compra de entradas</li></ul>
                    </ul>
                    <li>Cerrar sesión</li>
                </ol>

                <h3>3. Parte servidor</h3>

                La aplicación hace uso de un servidor local <strong>Django</strong> en <strong>http://localhost:8000</strong> donde se gestionan las peticiones a los diferentes endpoints.<br></br>
                En este servidor se encuentra la base de datos en MariaDB <strong>taquillawebbd.sql</strong> obtenida a partir de la importación de <strong>bdtaquillaweb.sql</strong> original, realizada usando phpMyAdmin<br></br>
                <br></br>

                <h4 style={{color:'royalblue'}}>3.1. Base de datos</h4>

                La base de datos consta de 5 tablas:
                <ul>
                    <li>tusuarios</li>
                    <li>tcines</li>
                    <li>tsalas</li>
                    <li>tpeliculas</li>
                    <li>tentradas</li>
                </ul>
                Esquema relacional de la base de datos:
                <img src={esquema} alt="logo" title="Esquema relacional" className="imagen-esquema-relacional" />

                <h4 style={{color:'royalblue'}}>3.2. Reseña de los endpoints</h4>

                <strong>| Funcionalidad | Nº endpoint y tipo | Endpoint |</strong><br></br>

                <p>| Registro nuevo usuario | Endpoint 1 (POST /users)                 | <strong>http://localhost:8000/users/</strong> |</p>
                <p>| Login de usuario       | Endpoint 2 (POST /sessions)              | <strong>http://localhost:8000/sessions/</strong> |</p>
                <p>| Todos los cines        | Endpoint 3 (GET /cines/)                 | <strong>http://localhost:8000/cines/</strong> |</p>
                <p>| Todas las películas    | Endpoint 4 (GET /peliculas/)             | <strong>http://localhost:8000/peliculas/</strong> |</p>
                <p>| Película por su id     | Endpoint 5 (GET /peliculas/&lt;id&gt;)         | <strong>http://localhost:8000/peliculas/&lt;id&gt;</strong> |</p>
                <p>| Películas por cine     | Endpoint 6 (GET cines/&lt;id&gt;/peliculas)    | <strong>http://localhost:8000/cine/3/peliculas/</strong> |</p>
                <p>| Películas en estreno   | Endpoint 7 (GET /peliculas/estrenos)     | <strong>http://localhost:8000/peliculas/estrenos/</strong> |</p>
                <p>| Comprar entradas       | Endpoint 8 (POST /entradas/)             | <strong>http://localhost:8000/entradas/</strong> |</p>
                <p>| Buscador               | Endpoint 9 (GET /buscar_pelicula/&lt;cadena_solicitada&gt;/) | <strong>http://localhost:8000/buscar_pelicula/&lt;cadena_solicitada&gt;</strong>/ </p>

            </p>
        </div>

    </div>
}

export default Home;