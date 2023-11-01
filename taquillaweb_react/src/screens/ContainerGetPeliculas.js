import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardPelicula from '../components/CardPelicula';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";

const ContainerGetPeliculas = () => {

    //VARIABLE DE ESTADO
    const [peliculas, setPeliculas] = useState([]); //peliculas es un array

    // Guardamos el token en una variable
    const tokenUsuActual = sessionStorage.getItem('token');

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
    useEffect(() => {
        const promesa = axios.get('http://localhost:8000/peliculas/', config);
        promesa.then((peliculas) => {           // cines es la respuesta que es un array de objetos
            console.log("Se ha recibido la respuesta");
            console.log(peliculas.data);        //devuelve el array de objetos cada objeto tiene los campos de cada cine
            setPeliculas(peliculas.data);
        })
    }, []) //HOOK DE EFECTO

    return (
        <div className='caja-volver-peliculas'>
            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Películas en cartelera</h3>
            </div>
            <div className="container-peliculas">
                {/*Código JS entre llaves*/}
                {peliculas.map((pelicula, i) => {
                    //map ejecuta esta función sobre cada objeto pelicula del array respuesta y devuelve CardPelicula cumplimentado
                    return (
                        <CardPelicula key={i} proppelicula={pelicula} />
                    )
                })}
            </div>
            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Películas en cartelera</h3>
            </div>
        </div>
    )

}

export default ContainerGetPeliculas;