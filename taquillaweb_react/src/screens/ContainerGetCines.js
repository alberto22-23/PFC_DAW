import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardCine from '../components/CardCine';

//Estilos
import "../styles/estilosTW.css";

const ContainerGetCines = () => {

    //VARIABLE DE ESTADO
    const [cines, setCines] = useState([]); //cines es un array

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
        const promesa = axios.get('http://localhost:8000/cines/', config);
        promesa.then((cines) => {           // cines es la respuesta que es un array de objetos
            console.log("Se ha recibido la respuesta");
            console.log(cines.data);        //devuelve el array de objetos cada objeto tiene los campos de cada cine
            setCines(cines.data);
        })
    }, []) //HOOK DE EFECTO

    return (
        <div className="container-cines">
            {/*Código JS entre llaves*/}

            {cines.slice(1).map((cine, i) => {   
                //map ejecuta esta función sobre cada objeto cine del array respuesta y devuelve CardCine cumplimentado
                return (
                    <CardCine key={i} propcine={cine} />
            )
            })}
        </div>
    )

}

export default ContainerGetCines;