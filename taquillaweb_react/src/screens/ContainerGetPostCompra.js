import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";

const ContainerGetPostCompra = () => {

    //const history = useHistory();

    // RECUPERACIÓN DE LOS PARÁMETROS
    const { parametro_id_cine, parametro_id_pelicula, parametro_nombre_cine } = useParams("");
    //Nos llega desde CardPeliculaPorCine, a través de la route definida en App.js. La id del cine no la voy a utilizar pero la envío a ContainerPostRealizarCompra
    console.log(parametro_id_cine, parametro_id_pelicula, parametro_nombre_cine);
    const parametro_id_cine_number = Number(parametro_id_cine);
    const parametro_id_pelicula_number = Number(parametro_id_pelicula);

    /*****************************************************************************************/

    //VARIABLES DE ESTADO ESTABLECIDAS CON useEffect()
    const [pelicula_compra, setPeliculaCompra] = useState({}); //pelicula es un objeto
    const [pelicula_compra_id, setPeliculaCompraId] = useState(0);
    const [pelicula_compra_titulo, setPeliculaCompraTitulo] = useState("");
    const [pelicula_compra_sinopsis, setPeliculaCompraSinop] = useState("");
    const [pelicula_compra_estreno, setPeliculaCompraEstreno] = useState(0);
    const [pelicula_compra_precio, setPeliculaCompraPrecio] = useState(0);
    const [pelicula_compra_cartel, setPeliculaCompraCartel] = useState("");
    const [sesion_1, setSesion1] = useState("");
    const [sesion_2, setSesion2] = useState("");
    const [sesion_3, setSesion3] = useState("");
    const [pelicula_salas, setPeliculaSalas] = useState([]); //es un array vacío

    //VARIABLES DE ESTADO ESTABLECIDAS CON LOS select
    const [sesion, setSesion] = useState(0);
    const [numero_entradas, setNumeroEntradas] = useState(0);
    const [pelicula_sala, setPeliculaSala] = useState(0);
    const [fecha_proyeccion, setFechaProyeccion] = useState(0);
    const [num_tajeta, setNumTarjeta] = useState(0);


    const [enlace_realizar_compra, setEnlaceRealizarCompra] = useState("");
    const [linkoperable, setLinkOperable] = useState(false);
    const [aviso, setAviso] = useState("");
    /*****************************************************************************************/

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

    /*****************************************************************************************/

    //1º EFECTO PARA ESTABLECER LAS VARIABLES DE ESTADO, SE EJECUTA SOLO UNA VEZ, CUANDO SE MONTA EL COMPONENTE EN EN DOM
    useEffect(() => {
        const promesa = axios.get('http://localhost:8000/peliculas/' + parametro_id_pelicula + '/', config);
        promesa.then((pelicula) => {
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
                /*console.log(element.id_pelicula);
                console.log(element.id_cine);
                console.log(element.id_sala);
                console.log(parametro_id_cine_number);
                console.log(parametro_id_pelicula_number);
                console.log("···········");*/
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

    /* Resumen:
    Endpoint 5 (GET /peliculas/<id>): obtener información de la película con el ID introducido 
    "datos_para_introducir": “id_cine, id_pelicula, id_sala y Sesión", con esto creo la petición http de compra
    -> obtengo array de las salas donde se proyecta la película selccionada en el cine actual, si hay más de una sala elijo con un select
    -> obtengo sesiones, elijo con un select */

    /*****************************************************************************************/

    // 2º ESTABLECIMIENTO DE LAS VARIABLES DE ESTADO A TAVÉS DEL EVENTO onChange DE LOS SELECT
    const establecerSesion = (event) => {
        setSesion(event.target.value)
    }

    const establecerNumEntradas = (event) => {
        setNumeroEntradas(event.target.value)
    }

    const establecerPeliculaSalaId = (event) => {
        setPeliculaSala(event.target.value)
    }

    const establecerFechaProyec = (event) => {
        setFechaProyeccion(event.target.value)
    }

    const establecerNumTarjeta = (event) => {
        setNumTarjeta(event.target.value)
    }

    /*****************************************************************************************/

    /* Obtención de un array de 7 días, son los días de máxima antelación para comprar una entrada:
    - desde día siguiente al actual, p. ej. si fuese miércoles, desde el jueves 
    - hasta miércoles (no incluido) +7 días, el miércoles de la semana siguiente */

    // Método para generar la fecha en formato 20230101
    function obtenerFormatoFecha(fecha) {
        const anyo = fecha.getFullYear();
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); //Rellenamos los espacios libres con 0
        const dia = fecha.getDate().toString().padStart(2, '0');
        //return `${anyo}${mes}${dia}`;
        return anyo + mes + dia;
    }

    //Generar array de 7 fechas 
    function generarArrayFechas() {
        const arrayFechas = [];
        const hoy = new Date();

        // Avanzar al día siguiente
        hoy.setDate(hoy.getDate() + 1);

        for (let i = 0; i < 7; i++) {
            const fechaFormateada = obtenerFormatoFecha(hoy); //Aplicamos el método anterior
            arrayFechas.push(fechaFormateada);

            // Avanzar al siguiente día
            hoy.setDate(hoy.getDate() + 1);
        }

        return arrayFechas;
    }

    // Uso del array de fechas
    const fechas = generarArrayFechas();
    console.log(fechas);

    /*****************************************************************************************/

    const comprobarDatos = () => {
        if (sesion === 0) {
            setAviso("Debe elegir una sesión");
        }
        else if (numero_entradas === 0) {
            setAviso("Debe seleccionar un número de entradas");
        }
        else if (pelicula_sala === 0) {
            setAviso("Debe elegir una sala");
        }
        else if (fecha_proyeccion === 0) {
            setAviso("Debe seleccionar una fecha de proyección");
        }
        else if (num_tajeta === 0) {
            setAviso("Debe introducir un número de tarjeta");
        }else{
            setEnlaceRealizarCompra("/realizar-compra/" + parametro_id_cine_number + "/" + parametro_id_pelicula_number + "/" + pelicula_sala + "/" + numero_entradas + "/" + sesion + "/" + fecha_proyeccion + "/" + num_tajeta) // Ruta en la aplicación React  
            //history.push(enlace_realizar_compra);
            setAviso("Ya puede comprar sus entradas"); 
            setLinkOperable(true);
        }
        //window.location.href = enlace_realizar_compra;
    }

    /*****************************************************************************************/

    return (
        <div className='caja-volver-peliculas'>

            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Compra de entradas</h3>
            </div>

            <div className="caja-compra-entrada">
                <img src={pelicula_compra_cartel} alt="película" className="img-pelicula" />
                <div className='datos-compra-entrada'>
                    <div className='div-precio-pelicula info-compra'>{/*pelicula_compra_id*/} Introduzca los campos necesarios.</div>
                    <div className='div-nombre-pelicula info-compra'>{parametro_nombre_cine}</div>
                    <div className='div-nombre-pelicula info-compra'>{pelicula_compra_titulo.toUpperCase()}</div>
                    <div className='div-sinopsis-pelicula info-compra'>
                        <p>
                            {pelicula_compra_sinopsis}
                        </p>
                    </div>
                    <div className='div-precio-pelicula info-compra'>Precio unitario: {pelicula_compra_precio} €</div>
                    {/*<div className='div-nombre-pelicula info-compra'>··············································</div>*/}
                    <div>
                        <select className='select-sesiones info-compra' value={sesion} onChange={establecerSesion}>
                            <option value={0}>Elija sesión</option>
                            <option value={1}>1ª: {sesion_1}</option>
                            <option value={2}>2ª: {sesion_2}</option>
                            <option value={3}>3ª: {sesion_3}</option>
                        </select>
                        <select className='select-sesiones info-compra' value={numero_entradas} onChange={establecerNumEntradas} >
                            <option value={0}>Número de entradas</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <select className='select-sesiones info-compra' value={pelicula_sala} onChange={establecerPeliculaSalaId}>
                            <option value={0}>Elija sala</option>
                            {/*Código JS entre llaves*/}
                            {pelicula_salas.map((idsala, i) => {
                                return (
                                    <option value={idsala}>{parametro_nombre_cine} - Sala id={idsala}</option>
                                )
                            })}
                        </select>
                        <select className='select-sesiones info-compra' value={fecha_proyeccion} onChange={establecerFechaProyec} >
                            <option value={0}>Seleccione fecha</option>
                            {/*Código JS entre llaves*/}
                            {fechas.map((fecha, i) => {
                                return (
                                    <option value={fecha}>{fecha}</option>
                                )
                            })}
                        </select>

                    </div>
                    {/*<div className='div-nombre-pelicula info-compra'>··············································</div>*/}
                    <div className='div-precio-pelicula info-compra'>Precio total: {pelicula_compra_precio * numero_entradas} €</div>
                    {/*<div className='div-nombre-pelicula info-compra'>··············································</div>*/}

                    <label htmlFor="password" id="forpassword">Introduzca su número de tarjeta</label>
                    <input type="number" id="num-tarjeta" className="largo" value={num_tajeta} onChange={establecerNumTarjeta} />
                    <div className='div-nombre-pelicula info-compra'>··············································</div>

                    <button className="enlace ancho97x100 info-compra" onClick={comprobarDatos}>Comprobar datos</button>

                    <div className='div-nombre-pelicula info-compra' style={{color: 'red'}}>- {aviso} -</div>
                    
                    <div className='div-nombre-pelicula info-compra' style={{color: 'indigo', fontWeight: 'normal'}}>Comprobación datos: {parametro_id_cine_number} - {parametro_id_pelicula_number} - {sesion} - {numero_entradas} - {pelicula_sala} - {num_tajeta} - {fecha_proyeccion}</div>

                    <Link to={enlace_realizar_compra} className="enlace ancho97x100 info-compra" style={{ visibility: linkoperable ? 'visible' : 'hidden' }}>Comprar entradas</Link>
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

**************************************************************************************

Endpoint 8 (POST /entradas/): adquirir entradas.

Con curl entrada para el usuario Paco123:
idcine: 2; idpelicula: 6; idsala: 8; entradas: 5; sesión: 2
deberá introducir los siguientes campos:
curl -X POST -i -H 
"Accept: application/json" -H 
"Content-Type:	application/json" -H 
"Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoxLCJ1c3VhcmlvX25vbWJyZSI6IlBhY28xMjMifQ.uHy_um6g-yQ74Xn-J77NQH_HBTJaTZQ7a318eTbeBfY" 
-d "
{
    \"idcine\":\”2\”,
    \"idpelicula\":\”6\”,
    \"idsala\":\”8\”,
    \"cantidadentradas\":\”5\”,
    \"sesion\":\”2\”,
    \"fecha_yearmonthday\":\”20231102\”,
    \”numero_tarjeta\”:\”000000\”
}" 
http://localhost:8000/entradas/

*/