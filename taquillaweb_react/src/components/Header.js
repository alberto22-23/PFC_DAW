//Librerías
import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";
import logo_TW from "../figuras/logoTW_1000x500.jpg"


/*
    Componente para mostrar la cabecera de la página
*/
const Header = () => {
    return (
        <div className="header">
                {/* /xxx: Posible memoria descriptiva */}
                <Link to="/descriptiva" className="enlace ancho250x40px">Descripción del código</Link>
            
                <Link to="/" >
                    <img src={logo_TW} alt="logo" title="Inicio TaquillaWeb" className="imagen-logo" />
                </Link>
            
                {/* /xxx: Página para posible extra */}
                <Link to="/extra" className="enlace ancho250x40px">Extra Posible
                </Link>
        </div>
    );
}
export default Header;
