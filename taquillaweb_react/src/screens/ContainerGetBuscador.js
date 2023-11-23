import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CardPelicula from '../components/CardPelicula';

//Estilos
import "../styles/estilosTW.css";

const ContainerGetBuscador = () => {

    //VARIABLES DE ESTADO
    const [cadenaBuscada, setCadenaBuscada] = useState('');
    const [peliculas, setPeliculas] = useState([]); //peliculas es un array
    //const [mensaje_con, setMensajeCon] = useState("");
    //const [mensaje_sin, setMensajeSin] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [visibilidad, setVisibilidad] = useState(false);

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

        if(cadenaBuscada === ""){
            setMensaje("Introduzca los caracteres a buscar.");
            return
        }

        //EFECTO PARA ESTABLECER LA VARIABLE DE ESTADO
        //useEffect(() => {
        const promesa = axios.get('http://localhost:8000/buscar_pelicula/' + cadenaBuscada, config);
        promesa.then((peliculas) => {           // cines es la respuesta que es un array de objetos
            console.log("Se ha recibido la respuesta");
            console.log(peliculas.data);        //devuelve el array de objetos cada objeto tiene los campos de cada película

            if (peliculas.data === "No se han encontrado títulos coincidentes. Vuelva a intentarlo.") {
                const mensaje_no_coincidencias = peliculas.data;
                setMensaje(mensaje_no_coincidencias);
                setPeliculas([]);
                setVisibilidad(false);
            } else {
                const mensaje_coincidencias = peliculas.data[0]["Coincidencias"];
                setMensaje(mensaje_coincidencias);
                setPeliculas(peliculas.data);
                setVisibilidad(true);
            }
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
            <div className='div-nombre-pelicula info-compra' style={{ color: 'red' }}>{mensaje}</div>
            {/*<div className="container-peliculas">*/}
            {/*Código JS entre llaves*/}
            {/*<div className="container-peliculas">*/}
            {peliculas.data === "No se han encontrado títulos coincidentes. Vuelva a intentarlo." ? (<div className="container-peliculas">{mensaje}</div>) : (
                <div className="container-peliculas"  style={{ display: visibilidad ? '' : 'none' }}>
                    {peliculas.slice(1).map((pelicula, i) => {
                        //map ejecuta esta función sobre cada objeto pelicula del array respuesta y devuelve CardPelicula cumplimentado
                        return (
                            <CardPelicula key={i} proppelicula={pelicula} />
                        )
                    })
                    }
                </div>
            )}
            {/*</div>*/}
        </div>
    )
}

export default ContainerGetBuscador;

/*
Respuesta del servidor:
Array de objetos:
[
{
"Coincidencias": "Se han encontrado 1 títulos con coincidencias."
}, 
{
"id_pelicula": 5, 
"titulo_pelicula": "Matrix", 
"estreno_pelicula": 0, 
"sinopsis_pelicula": "Thomas Anderson es un brillante programador de una respetable compañía de software. Pero fuera del trabajo es Neo, un hacker que un día recibe una misteriosa visita...", 
"precio_pelicula": 7.5, 
"cartel_pelicula": "../figuras/carteles/matrix.jpg"
}
]


*/