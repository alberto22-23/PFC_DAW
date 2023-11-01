import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardPelicula from '../components/CardPelicula';
import { Link, useParams } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";
import CardPeliculaPorCine from '../components/CardPeliculaPorCine';

const ContainerGetPelisCine = () => {

    //VARIABLE DE ESTADO
    const [peliculas_x_cine, setPeliculas_x_cine] = useState([]); //peliculas es un array
    
    const { parametro_id_cine, parametro_nombre_cine} = useParams(""); //Nos llega desde CardCine, a través de la route definida en App.js

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
        console.log(parametro_id_cine);
        const promesa = axios.get('http://localhost:8000/cine/' + parametro_id_cine + '/peliculas/', config);
        promesa.then((peliculas_x_cine) => {           // cines es la respuesta que es un array de objetos
            console.log("Se ha recibido la respuesta");
            console.log(peliculas_x_cine.data);        //devuelve el array de objetos cada objeto tiene los campos de cada cine
            setPeliculas_x_cine(peliculas_x_cine.data);
        })
    }, []) //HOOK DE EFECTO

    return (
        <div className='caja-volver-peliculas'>
            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Películas en {parametro_nombre_cine}</h3>
            </div>
            <div className="container-peliculas-cine">
                {/*Código JS entre llaves*/}
                {peliculas_x_cine.slice(1).map((pelicula, i) => {
                    //map ejecuta esta función sobre cada objeto cine del array respuesta y devuelve CardCine cumplimentado
                    return (
                        <CardPeliculaPorCine key={i} proppelicula={pelicula} />
                    )
                })}
            </div>
            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Películas en {parametro_nombre_cine}</h3>
            </div>
        </div>
    )

}

export default ContainerGetPelisCine;