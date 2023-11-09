import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CardPelicula from '../components/CardPelicula';

//Estilos
import "../styles/estilosTW.css";

const ContainerGetBuscador = () => {

    //VARIABLE DE ESTADO
    const [cadenaBuscada, setCadenaBuscada] = useState('');
    const [peliculas, setPeliculas] = useState([]); //peliculas es un array

    /////////////////////// Manejador del submit ///////////////////////
    const handleSubmit = async (event) => {
        event.preventDefault(); //evitamos el comportamiento por defecto del botón

        // Guardamos el token en una variable
        const tokenUsuActual = sessionStorage.getItem('token');
        console.log("Token actual: " + tokenUsuActual)

        // Definimos los datos que queremos enviar en el cuerpo de la solicitud
        const datos = {};

        // Configuramos las cabeceras de la solicitud
        const config = {
            headers: {
                'Authorization': tokenUsuActual,
                'Accept': 'application/json'
            }
        };

        //EFECTO PARA ESTABLECER LA VARIABLE DE ESTADO
        //useEffect(() => {
        const promesa = axios.get('http://localhost:8000/buscar_pelicula/' + cadenaBuscada, config);
        promesa.then((peliculas) => {           // cines es la respuesta que es un array de objetos
            console.log("Se ha recibido la respuesta");
            console.log(peliculas.data);        //devuelve el array de objetos cada objeto tiene los campos de cada cine
            setPeliculas(peliculas.data);
        })
        //}, []) //HOOK DE EFECTO
    }

    return (
        <div className="caja-links-cines">
            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Buscador de películas</h3>
            </div>
            <form className='campos campoBusqueda' onSubmit={handleSubmit}>
                <fieldset className="fieldset-flex">
                    <label htmlFor="nombre" id="fornombre">Introduzca letra, secuencia de letras o palabras incluidas en el título:</label>
                    <input type="text" id="nombre" className="largo" value={cadenaBuscada} onChange={(event) => setCadenaBuscada(event.target.value)} />
                    <button className="btn-entrar-registrar medio" type="submit">Enviar</button>
                </fieldset>
            </form>
            {/*<div className="container-peliculas">*/}
                {/*Código JS entre llaves*/}
                {peliculas.slice(1).map((pelicula, i) => {
                    //map ejecuta esta función sobre cada objeto pelicula del array respuesta y devuelve CardPelicula cumplimentado
                    return (
                        <CardPelicula key={i} proppelicula={pelicula} />
                    )
                })}
            {/*</div>*/}


        </div>
    )
}

export default ContainerGetBuscador;