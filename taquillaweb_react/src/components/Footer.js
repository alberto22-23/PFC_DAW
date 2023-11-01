//Librerías
import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";
import logo_TW from "../figuras/logoTW.jpg";
import facebook_icon from "../figuras/facebook.png";
import twitter_icon from "../figuras/gorjeo.png";
import instagram_icon from "../figuras/instagram.png";
import pinterest_icon from "../figuras/pinterest.png";


function Footer(props) {
    return (
        <div className="footer">

            <div className='footer-politicas'>
                <a href="">Aviso legal</a><br></br>
                <a href="">Configuración de cookie</a><br></br>
                <a href="">Política de privacidad</a><br></br>
                <a href="">Política de cookies</a>
            </div>
            <div className="footer-div-logo">
            <Link to="/" >
                        <img src={logo_TW} alt="logo" title="Taquilla web" className="footer-imagen-logo" />
                    </Link>
                <div>Autor: José Alberto Fernández Conde</div>
            </div>
            <div className="footer-redes-1">
                <div><h3>¡Síguenos!</h3></div>
                <div className="footer-redes-2">
                    <Link to="https://www.facebook.com/" >
                        <img src={facebook_icon} alt="logo" title="Facebook" className="imagen-redes" />
                    </Link>
                    <Link to="https://twitter.com" >
                        <img src={twitter_icon} alt="logo" title="X" className="imagen-redes" />
                    </Link>
                    <Link to="https://www.instagram.com/" >
                        <img src={instagram_icon} alt="logo" title="Instagram" className="imagen-redes" />
                    </Link>
                    <Link to="https://www.pinterest.es/" >
                        <img src={pinterest_icon} alt="logo" title="Pinterest" className="imagen-redes" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;