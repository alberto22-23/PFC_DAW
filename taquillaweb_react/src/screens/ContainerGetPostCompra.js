import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CardPelicula from '../components/CardPelicula';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";

const ContainerGetPostCompra = () => {

    // RECUPERACIÓN DE LOS PARÁMETROS
    const { parametro_id_cine, parametro_id_pelicula, parametro_nombre_cine } = useParams("");
    //Nos llega desde CardPeliculaPorCine, a través de la route definida en App.js, la id del cine no la voy a utilizar
    console.log(parametro_id_cine, parametro_id_pelicula, parametro_nombre_cine);
    const parametro_id_cine_number = Number(parametro_id_cine);
    const parametro_id_pelicula_number = Number(parametro_id_pelicula);

    //VARIABLES DE ESTADO ESTABLECIDAS CON useEffect()
    const [pelicula_compra, setPeliculaCompra] = useState({}); //pelicula es un objeto
    const [pelicula_compra_id, setPeliculaCompraId] = useState(0);
    const [pelicula_compra_titulo, setPeliculaCompraTitulo] = useState("");
    const [pelicula_compra_sinopsis, setPeliculaCompraSinop] = useState("");
    const [pelicula_compra_estreno, setPeliculaCompraEstreno] = useState(0);
    const [pelicula_compra_precio, setPeliculaCompraPrecio] = useState(0);
    const [pelicula_compra_cartel, setPeliculaCompraCartel] = useState("");
    const [sesion, setSesion] = useState(0);
    const [sesion_1, setSesion1] = useState("");
    const [sesion_2, setSesion2] = useState("");
    const [sesion_3, setSesion3] = useState("");

    //VARIABLES DE ESTADO ESTABLECIDAS CON LOS select
    const [pelicula_salas, setPeliculaSalas] = useState([]); //es un array vacío
    const [numero_entradas, setNumeroEntradas] = useState(0);
    const [pelicula_sala, setPeliculaSala] = useState(0);
    const [fecha_proyeccion, setFechaProyeccion] = useState("");


    // CREACIÓN DE LA PETICIÓN AL SERVIDOR
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

    //EFECTO PARA ESTABLECER LAS VARIABLES DE ESTADO, SE EJECUTA SOLO UNA VEZ, CUANDO SE MONTA EL COMPONENTE EN EN DOM
    useEffect(() => {
        const promesa = axios.get('http://localhost:8000/peliculas/' + parametro_id_pelicula + '/', config);
        promesa.then((pelicula) => {           // cines es la respuesta que es un array de objetos
            console.log("Se ha recibido la respuesta");
            console.log(pelicula.data);        //devuelve la película, que es un objeto js
            setPeliculaCompra(pelicula.data);
            //setPeliculaCompraId()
            setPeliculaCompraTitulo(pelicula.data["titulo_pelicula"]);
            setPeliculaCompraSinop(pelicula.data["sinopsis_pelicula"]);
            setPeliculaCompraEstreno(pelicula.data["estreno_pelicula"]);
            setPeliculaCompraPrecio(pelicula.data["precio_pelicula"]);
            setPeliculaCompraCartel(pelicula.data["cartel_pelicula"]);
            //Datos para enviar en la petición al servidor para efectuar la compra: id_cine, id_pelicula, id_sala y Sesión:
            //setPeliculaCompraId(pelicula.data["id_pelicula"]);
            setPeliculaCompraId(pelicula_compra.id_pelicula);
            setSesion1(pelicula.data["datos_compra_entradas"][0]["sesion_1"]);
            setSesion2(pelicula.data["datos_compra_entradas"][0]["sesion_2"]);
            setSesion3(pelicula.data["datos_compra_entradas"][0]["sesion_3"]);

            //Obtención de las id de las salas que proyectan la película en este cine
            const data_sin_sesiones = pelicula.data["datos_compra_entradas"].slice(1);
            console.log(data_sin_sesiones);
            console.log("···········");

            let array_id_salas = [];
            data_sin_sesiones.forEach((element) => {
                console.log(element.id_pelicula);
                console.log(element.id_cine);
                console.log(element.id_sala);
                console.log(parametro_id_cine_number);
                console.log(parametro_id_pelicula_number);
                console.log("···········");
                if (element.id_cine === parametro_id_cine_number && element.id_pelicula === parametro_id_pelicula_number) {
                    console.log(element.id_sala);
                    console.log("···········");
                    array_id_salas.push(element.id_sala);
                }
            });
            console.log(array_id_salas);
            setPeliculaSalas(array_id_salas);
            console.log(pelicula_salas);

        })
    }, []) //HOOK DE EFECTO

    // Resumen:
    // Endpoint 5 (GET /peliculas/<id>): obtener información de la película con el ID introducido 
    // "datos_para_introducir": “id_cine, id_pelicula, id_sala y Sesión", con esto creo la petición http de compra
    // -> obtengo array de las salas donde se proyecta en el cine actual, si hay más de una elijo con un select
    // -> obtengo sesiones, elijo con un select

    const fecha_actual = new Date();
    const anyo = fecha_actual.getFullYear();
    const mes = fecha_actual.getMonth();
    const dia = fecha_actual.getDate() + 1;
    const fecha_en_select = anyo.toString() + mes.toString() + dia.toString();

    const enviarPeticion = async (event) => {
    }

    return (
        <div className='caja-volver-peliculas'>

            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Compra de entradas</h3>
            </div>

            <div className="card-compra-entrada">
                <img src={pelicula_compra_cartel} alt="película" className="img-pelicula" />
                <div className='datos-compra-entrada'>
                    <div className='div-precio-pelicula info-compra'>{/*pelicula_compra_id*/} Introduzca sesión, número de entradas y sala de proyección.</div>
                    <div className='div-nombre-pelicula info-compra'>{parametro_nombre_cine}</div>
                    <div className='div-nombre-pelicula info-compra'>{pelicula_compra_titulo.toUpperCase()}</div>
                    <div className='div-sinopsis-pelicula info-compra'>
                        <p>
                            {pelicula_compra_sinopsis}
                        </p>
                    </div>
                    <div className='div-precio-pelicula info-compra'>Precio unitario: {pelicula_compra_precio} €</div>
                    <div className='div-nombre-pelicula info-compra'>··············································</div>
                    <div>
                        <select className='select-sesiones info-compra' value={sesion} onChange={(event) => setSesion(event.target.value)}>
                            <option value={"Elija su sesión"}>Elija sesión</option>
                            <option value={1}>1ª: {sesion_1}</option>
                            <option value={2}>2ª: {sesion_2}</option>
                            <option value={3}>3ª: {sesion_3}</option>
                        </select>
                        <select className='select-sesiones info-compra' value={numero_entradas} onChange={(event) => setNumeroEntradas(event.target.value)} >
                            <option value={"Mum entradas"}>Número de entradas</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <select className='select-sesiones info-compra' value={pelicula_sala} onChange={(event) => setPeliculaSala(event.target.value)}>
                            <option value={"Elija su sesión"}>Elija sala</option>
                            {/*Código JS entre llaves*/}
                            {pelicula_salas.map((idsala, i) => {
                                return (
                                    <option value={idsala}>{parametro_nombre_cine} - Sala id={idsala}</option>
                                )
                            })}
                        </select>
                        <select className='select-sesiones info-compra' value={fecha_proyeccion} onChange={(event) => setFechaProyeccion(event.target.value)} >
                            <option value={"Mum entradas"}>Seleccione fecha</option>
                            <option value={1}>{fecha_en_select}</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>

                    </div>
                    <div className='div-nombre-pelicula info-compra'>··············································</div>
                    <div className='div-precio-pelicula info-compra'>Precio total: {pelicula_compra_precio * numero_entradas} €</div>
                    <div className='div-nombre-pelicula info-compra'>··············································</div>

                    {/*<Link to="/" className="enlace ancho97x100 info-compra">Comprar entradas</Link>*/}
                    <Link className="enlace ancho97x100 info-compra" onClick={enviarPeticion}>Comprar entradas</Link>

                </div>
            </div>

        </div>

    );

}

export default ContainerGetPostCompra;


/*
Devolución, la respuesta del servidor es un objeto:
{							
"datos_compra_entradas": 	a continuación variable datos_compra, es un array
[
{
"sesion_1": "16:30h - 18:30h", 			
"sesion_2": "19:00h - 21:00h", 			
"sesion_3": "21:30h – 23:30h"				
}, 
{
"id_cine": 2, 
"id_pelicula": 4, 
"id_sala": 4
}, 
{
"id_cine": 3, 
"id_pelicula": 4, 
"id_sala": 9
}					
], 
"datos_para_introducir": “id_cine, id_pelicula, id_sala y Sesión", 
"datos_introducidos_en": "http://localhost:8000/entradas", 
"id_pelicula": 4, 
"titulo_pelicula": "Blade Runner", 
"estreno_pelicula": 0, 
"sinopsis_pelicula": "Rick Deckard (Harrison Ford) es un blade runner, un agente de policía destinado al retiro de replicantes ilegales. Su misión es dar caza a un grupo de cuatro de estos androides, sofisticados NEXUS 6 superiores en fuerza e inteligencia a los humanos, pero diseñados para vivir una corta existencia de cuatro años.", 
"precio_pelicula": 7.5, 
"cartel_pelicula": "../figuras/carteles/blade_runner.jpg"
}

*/