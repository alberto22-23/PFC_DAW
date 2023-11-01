import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";


const CardCine = ({ propcine }) => {
    const id_cine_actual = propcine.id_cine;
    const nombre_cine_actual = propcine.nombre_cine;
    const enlace_pelis_cine = "/cine/" + id_cine_actual + "/" + nombre_cine_actual; // Ruta en la aplicación React
    /*los valores de los parámetros se recuperan en ContainerGetPelisCine y desde ahí se pasan a 
    CardPeliculaPorCine, el nombre del cine mediante variable normal y el objeto pelicula mediante props*/
    console.log(enlace_pelis_cine);
    return (
        <div className="cardcine">
            {/*<div className='div-id-cine'>{propcine.id_cine}</div>*/}
            <div className='div-nombre-cine'>{propcine.nombre_cine.toUpperCase()}</div>
            <img src={propcine.logo_cine} alt="cine" className="img-cine ancho97x100" />
            <div className='div-cantsalas-cine'>Número de salas: {propcine.cantidadsalas_cine}</div>
            <div className='div-link'>
                <Link to={enlace_pelis_cine} className="enlace ancho97por100">Ver Películas</Link>
            </div>
        </div >
    );
}

export default CardCine;
