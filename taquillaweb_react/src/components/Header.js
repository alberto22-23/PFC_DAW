//Librerías
import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";
import logo_TW from "../figuras/logoTW.jpg"


/*
    Componente para mostrar la cabecera de la página
*/
const Header = () => {
    return (
        <div className="header">
            {/*Logo de la página, devuelve a la página de inicio
            <Link to="/" className="tienda_react-logo-link">
                <img src={process.env.PUBLIC_URL + './imagen.png'} alt="imagen" className="imagen-logo" />
            </Link>*}
            {/*Menú, permite acceder a las distintas páginas*/}
            {/*Logo de la página, devuelve a la página de inicio*/}
            <div className='elemHeader'>
                {/* /xxx: Página para posible extra */}
                <Link to="/extra" className="enlace ancho250x40px">Memoria descriptiva</Link>
            </div>
            <div className='elemHeader'>
                <Link to="/" >
                    <img src={logo_TW} alt="logo" title="Inicio Taquilla Web" className="imagen-logo" />
                </Link>
            </div>
            {/*<div className='elemHeader'>
                <Link to="/abrir" className="enlace ancho250">Iniciar sesión</Link>
            </div>*/}
            {/*<div className='elemHeader'>
                <Link to="/cerrar" className="enlace ancho250">Cerrar sesión</Link>
            </div>*/}
            {/*{<div className='elemHeader'>
                <Link to="/registro" className="enlace ancho250">Registro nuevo usuario</Link>
            </div>*/}
            <div className='elemHeader'>
                {/* /xxx: Página para posible extra */}
                <Link to="/extra" className="enlace ancho250x40px">Extra Posible</Link>
            </div>
            {/*<div className='elemHeader'>
                <Link to="/about" className="enlace">Sobre nosotr@s</Link>
            </div>*/}
        </div>
    );
}
export default Header;
