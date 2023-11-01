import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";


const CardPelicula = ({ proppelicula }) => {
    //const id_cine_ruta = proppelicula.id_pelicula
    //const enlace_pelis_cine = "/cine/" + id_cine_ruta
    return (
        <div className="cardpelicula">
            {/*<div className='div-id-cine'>{proppelicula.id_pelicula}</div>*/}
            <img src={proppelicula.cartel_pelicula} alt="película" className="img-pelicula" />
            <div className='datos-pelicula'>
                <div className='div-nombre-pelicula'>{proppelicula.titulo_pelicula.toUpperCase()}</div>
                <div className='div-sinopsis-pelicula'>
                    <p>
                        {proppelicula.sinopsis_pelicula}
                    </p>
                </div>
                <div className='div-precio-pelicula'>Precio: {proppelicula.precio_pelicula}0 €</div>
                {/*<div className='div-link'>*/}
                {/*<Link to={enlace_pelis_cine} className="enlace ancho97x100">Ver Películas</Link>*/}
            </div>
        </div >
    );
}

export default CardPelicula;

/*
<div className='div-sinopsis-pelicula'>
    <p>
        <strong>Sinopsis:</strong><br></br><br></br>{proppelicula.sinopsis_pelicula}
    </p>
</div>
*/