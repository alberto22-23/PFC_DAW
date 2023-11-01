import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardPelicula from '../components/CardPelicula';
import { Link } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";

const ContainerGetEstrenos = () => {

    //VARIABLE DE ESTADO
    const [estrenos, setEstrenos] = useState([]); //peliculas es un array

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
        const promesa = axios.get('http://localhost:8000/peliculas/estrenos/', config);
        promesa.then((estrenos) => {           // cines es la respuesta que es un array de objetos
            console.log("Se ha recibido la respuesta");
            console.log(estrenos.data);        //devuelve el array de objetos cada objeto tiene los campos de cada cine
            setEstrenos(estrenos.data);
        })
    }, []) //HOOK DE EFECTO

    return (
        <div className='caja-volver-peliculas'>
            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Estrenos</h3>
            </div>
            <div className="container-peliculas">
                {/*Código JS entre llaves*/}
                {estrenos.slice(1).map((estreno, i) => {
                    //map ejecuta esta función sobre cada objeto cine del array respuesta y devuelve CardCine cumplimentado
                    return (
                        <CardPelicula key={i} proppelicula={estreno} />
                    )
                })}
            </div>
            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Estrenos</h3>
            </div>
        </div>
    )

}

export default ContainerGetEstrenos;