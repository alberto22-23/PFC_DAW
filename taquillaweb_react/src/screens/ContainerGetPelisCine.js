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
    //const [peliculas_x_cine, setPeliculas_x_cine] = useState([]); //peliculas es un array
    const [peliculas_x_cine_unicas, setPeliculas_x_cine_unicas] = useState([]); //peliculas es un array

    const { parametro_id_cine, parametro_nombre_cine } = useParams(""); //Nos llega desde CardCine, a través de la route definida en App.js

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
            console.log(peliculas_x_cine.data);        //devuelve el array de objetos cada objeto tiene los campos de cada pelicula
            const peliculas_x_cine_repe = peliculas_x_cine.data;

            //Elimino el primer objeto: { "cine_solicitado:": "Cines Mix",  "numero_de_salas:": 6 },
            const solo_pelis_x_cine_repe = peliculas_x_cine_repe.slice(1);
            console.log("Solo películas con repetidas: ", solo_pelis_x_cine_repe);

            //Filtro el array original para incluir solo el primer objeto encontrado con cada valor único de "id_pelicula".
            const peliculas_unicas = solo_pelis_x_cine_repe.filter((obj, index, self) =>
                index === self.findIndex((o) => o.id_pelicula === obj.id_pelicula)
            );
            console.log("películas únicas. ", peliculas_unicas);
            
            setPeliculas_x_cine_unicas(peliculas_unicas);
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
                {peliculas_x_cine_unicas.map((pelicula, i) => {
                    //map ejecuta esta función sobre cada objeto cine del array respuesta y devuelve CardCine cumplimentado
                    return (
                        <CardPeliculaPorCine key={i} proppelicula={pelicula} propidcine={parametro_id_cine} propnombrecine={parametro_nombre_cine} />
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

/* 
Devolución del servidor:
[
    {
    "cine_solicitado:": "Cines Mix", 
    "numero_de_salas:": 6
    }, 
    {
"id_pelicula": 4, 
"titulo_pelicula": "Blade Runner", 
"estreno_pelicula": 0, 
"precio_pelicula": 7.5, 
"cartel_pelicula": "../figuras/carteles/blade_runner.jpg"
}, 
{
"id_pelicula": 3, 
"titulo_pelicula": "La Vida de Brian", 
"estreno_pelicula": 1, 
"precio_pelicula": 8.5, 
"cartel_pelicula": "../figuras/carteles/la_vida_de_Brian.jpg"
}, 
{
"id_pelicula": 8, 
"titulo_pelicula": "Poltergeist", 
"estreno_pelicula": 0, 
"precio_pelicula": 7.5, 
"cartel_pelicula": "../figuras/carteles/poltergeist.jpg"
}, 
{
"id_pelicula": 9, 
"titulo_pelicula": "Regreso al Futuro", 
"estreno_pelicula": 0, 
"precio_pelicula": 7.5, 
"cartel_pelicula": "../figuras/carteles/regreso_al_futuro.jpg"
}, 
{
"id_pelicula": 10, 
"titulo_pelicula": "Memorias de Africa", 
"estreno_pelicula": 1, 
"precio_pelicula": 8.5, 
"cartel_pelicula": "../figuras/carteles/memorias_de_africa.jpg"
}, 
{
"id_pelicula": 10, 
"titulo_pelicula": "Memorias de Africa", 
"estreno_pelicula": 1, 
"precio_pelicula": 8.5, 
"cartel_pelicula": "../figuras/carteles/memorias_de_africa.jpg"
}
]


*/