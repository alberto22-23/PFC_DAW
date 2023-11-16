import React from 'react';

import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";


const CardPeliculaPorCine = ({ proppelicula, propidcine, propnombrecine }) => { //las props se introducen en ContainerGetPelisCine

    const valorEstreno = proppelicula.estreno_pelicula;
    let valorEstrenoVisto = ""; //no puede ser const

    if (valorEstreno === 1) {
        valorEstrenoVisto = "Estreno: Sí";
    } else {
        valorEstrenoVisto = "Estreno: No";
    }

    const id_peli_actual = proppelicula.id_pelicula
    //const enlace_pelis_cine = "/cine/" + id_cine_ruta
    const enlace_compra_entradas = "/compra/" + propidcine + "/" + id_peli_actual + "/" + propnombrecine; // Ruta en la aplicación React
    return (
        <div className="cardpeliculaporcine">
            {/*<div className='div-id-cine'>{proppelicula.id_pelicula}</div>*/}
            <img src={proppelicula.cartel_pelicula} alt="película" className="img-pelicula" />
            <div className='datos-pelicula'>
                <div className='div-nombre-pelicula'>{proppelicula.titulo_pelicula.toUpperCase()}</div>
                <div className='div-sinopsis-pelicula'>
                    <p><strong>{valorEstrenoVisto}</strong></p>
                    {/*<p>En salas: <strong>{ }</strong></p>*/}
                </div>
                {/*<div className='div-salas-pelicula'>En sala/s: </div>*/}
                <div className='div-precio-pelicula'>Precio: {proppelicula.precio_pelicula}0 €</div>
                <div className='div-link'>
                    <Link to={enlace_compra_entradas} className="enlace ancho97x100">Comprar entradas</Link>
                </div>
            </div>
        </div >
    );
}

export default CardPeliculaPorCine;