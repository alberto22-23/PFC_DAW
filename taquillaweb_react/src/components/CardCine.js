import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";


const CardCine = ({ propcine }) => {
    const id_cine_ruta = propcine.id_cine
    const enlace_pelis_cine = "/cine/" + id_cine_ruta
    return (
        <div className="cardcine">
            <div className='div-id-cine'>{propcine.id_cine}</div>
            <div className='div-nombre-cine'>{propcine.nombre_cine}</div>
            <div className='div-img'><img src={propcine.logo_cine} alt="cine" className="img-cine" /></div>
            <div className='div-cantsalas-cine'>{propcine.cantidadsalas_cine}</div>
            <div className='div-link'>
                <Link to={enlace_pelis_cine} className="enlace">Ver Películas</Link>
            </div>
        </div >
    );
}

export default CardCine;
