import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";


const BarraSesion = (props) => {
    return (
        <div className="caja-sesion">
            {/**/}
            <Link to="/registro" className="enlace enlace-a-pelis-estrenos enlace-sesion">Registro nuevo usuario</Link>
            {/**/}
            <div>Usuario: </div>
            <div className='div-abrir-cerrar'>
                <Link to="/abrir" className="enlace enlace-a-pelis-estrenos enlace-sesion">Abrir sesión</Link>
                {/**/}
                <Link to="/cerrar" className="enlace enlace-a-pelis-estrenos enlace-sesion">Cerrar sesión</Link>
            </div>
        </div>

    );
}

export default BarraSesion;