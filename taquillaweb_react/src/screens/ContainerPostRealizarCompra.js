import { ReactDOM } from 'react';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Estilos
import "../styles/estilosTW.css";

const ContainerPostRealizarCompra = () => {

    // RECUPERACIÓN DE LOS PARÁMETROS
    const { param_id_cine, param_id_pelicula, param_id_sala, param_num_entradas, param_sesion, param_fecha, param_num_tarjeta } = useParams("");
    //Nos llega desde el Link de ContainerGetPostCompra, a través de la route definida en App.js
    //<Route path="/realizar-compra/:param_id_cine/:param_id_pelicula/:param_id_sala/:param_num_entradas/:param_sesion/:param_fecha" element={<ContainerPostRealizarCompra />}></Route>
    const idcine = param_id_cine.toString();
    const idpelicula = param_id_pelicula.toString();
    const idsala = param_id_sala.toString();
    const cantidadentradas = param_num_entradas.toString();
    const sesion = param_sesion.toString();
    const fecha_yearmonthday = param_fecha.toString();
    const numero_tarjeta = param_num_tarjeta.toString();

    /*****************************************************************************************/

    //VARIABLES DE ESTADO ESTABLECIDAS CON useEffect()
    /***************************************************************/
    const [objeto_respuesta, setObjRespuesta] = useState({});

    /***************************************************************/
    const [mensaje_confirmacion, setMensajeConfirmacion] = useState('');
    const [mensaje_total_ocupadas, setMensajeTotalOcupadas] = useState(0);
    const [mensaje_total_restantes, setMensajeTotalRestantes] = useState(0);

    /***************************************************************/
    const [ticket_cine, setTicketCine] = useState('');

    /***************************************************************/
    const [ticket_fecha_compra, setTicketFechaCompra] = useState('');
    const [ticket_identificador, setTicketIdentificador] = useState(0);

    /***************************************************************/
    const [ticket_pelicula, setTicketTituloPeli] = useState('');
    const [ticket_id_sala, setTicketIdSala] = useState(0);
    const [ticket_num_sala, setTicketNumSala] = useState(0);
    const [ticket_sesion, setTicketSesion] = useState(0);
    const [ticket_fecha_proyeccion, setTicketFechaProyec] = useState('');

    /***************************************************************/
    const [ticket_precio_unitario, setTicketPrecioUnitario] = useState(0);
    const [ticket_numero_entradas, setTicketNumeroEntradas] = useState(0);
    const [ticket_precio_total, setTicketPrecioTotal] = useState(0);

    /***************************************************************/
    const [ticket_mensaje_pago, setTicketMensajePago] = useState('');

    /*****************************************************************************************/

    // CREACIÓN DE LA PETICIÓN AL SERVIDOR
    // 1. Guardamos el token en una variable
    const tokenUsuActual = sessionStorage.getItem('token');

    /* 2. Definimos los datos que queremos enviar en el cuerpo de la solicitud, los nombres de las variables 
    deben coincidir con las claves de los datos en el cuerpo de la solicitud http */
    const datos = {
        idcine,
        idpelicula,
        idsala,
        cantidadentradas,
        sesion,
        fecha_yearmonthday,
        numero_tarjeta
    };

    // 3. Configuramos las cabeceras de la solicitud
    const config = {
        headers: {
            'Authorization': tokenUsuActual,
            'Accept': 'application/json'
        }
    };

    // 4. Hacemos la petición al servidor con Axios
    useEffect(() => {
        const promesa = axios.post('http://localhost:8000/entradas/', datos, config);
        promesa.then((responseServ) => {

            console.log('Respuesta:', responseServ.data);   // responseServ.data es la respuesta que es un objeto JS
            /***************************************************************/
            setObjRespuesta(responseServ.data);

            /***************************************************************/
            setMensajeConfirmacion(responseServ.data["mensaje_compra"]);
            setMensajeTotalOcupadas(responseServ.data["total_ocupadas"]);
            setMensajeTotalRestantes(responseServ.data["restantes"]);

            /***************************************************************/
            setTicketCine(responseServ.data["cine"]);

            /***************************************************************/
            setTicketFechaCompra(responseServ.data["fecha_compra"]);
            setTicketIdentificador(responseServ.data["identificador_ticket"])

            /***************************************************************/
            setTicketTituloPeli(responseServ.data["titulo_pelicula"]);
            setTicketIdSala(responseServ.data["id_sala"]);
            setTicketNumSala(responseServ.data["numero_sala"]);
            setTicketSesion(responseServ.data["sesion"]);
            setTicketFechaProyec(responseServ.data["fecha_proyeccion"]);

            /***************************************************************/
            setTicketPrecioUnitario(responseServ.data["precio_unitario"]);
            setTicketNumeroEntradas(responseServ.data["numero_entradas"]);
            setTicketPrecioTotal(responseServ.data["precio_total"]);

            /***************************************************************/
            setTicketMensajePago(responseServ.data["pago"]);

        })
    }, []) //HOOK DE EFECTO

    return (
        <div className='caja-volver-peliculas'>

            <div className='caja-volver'>
                <Link to="/cines-pelis-estrenos" className="enlace enlace-a-pelis-estrenos">Volver a Cines</Link>
                <h3 className='peliculas-en'>Ticket de compra</h3>
            </div>

            <div className="caja-ticket">
                {/*DIV 1*/}
                <div>
                    <p className='p-ticket'>
                        <strong>----- {mensaje_confirmacion} -----</strong>
                    </p>
                </div>

                {/*DIV 2*/}
                <div className='datos-compra-ticket'>
                    {/*<p>{responseServ}</p> es un objeto JS, da error*/}
                    <p className='p-ticket'>
                    <strong>Ticket TaquillaWeb.com</strong><br></br>
                        <strong>{ticket_cine}</strong><br></br>
                        ·············································<br></br>
                        Fecha de compra: <strong>{ticket_fecha_compra}</strong><br></br>
                        Número de ticket: <strong>{ticket_identificador}</strong><br></br>
                        ·············································<br></br>
                        Título: <strong>{ticket_pelicula}</strong><br></br>
                        id sala: {ticket_id_sala}<br></br>
                        Número de sala: <strong>{ticket_num_sala}</strong><br></br>
                        Sesión: <strong>{ticket_sesion}ª Sesión</strong><br></br>
                        Fecha proyección: <strong>{ticket_fecha_proyeccion}</strong><br></br>
                        ·············································<br></br>
                        (Sesiones:<br></br>
                        1ª 16:30h - 2ª 19:00h - 3ª 21:30h)
                        ·············································<br></br>
                        Precio unitario: <strong>{ticket_precio_unitario}</strong> €<br></br>
                        Entradas adquiridas: <strong>{ticket_numero_entradas}</strong><br></br>
                        <strong>Precio Total: {ticket_precio_total} € IVA incluido</strong><br></br>
                        ·············································<br></br>
                        {ticket_mensaje_pago}
                    </p>
                </div>
                
                <Link className="enlace ancho250x40px">Imprimir ticket</Link>

                {/*DIV 3*/}
                <div>
                    <p className='p-ticket'>
                        En esta proyección:<br></br>
                        Total butacas ocupadas: {mensaje_total_ocupadas} -
                        Total butacas restantes: {mensaje_total_restantes}<br></br>
                        ·············································<br></br>
                        <strong>Gracias por usar TaquillaWeb.com</strong>
                    </p>
                    
                </div>

            </div>
        </div>
    );
}

export default ContainerPostRealizarCompra;

/*
Si pongo un objeto en retorno del componente da ERROR:
Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array 

<div className='caja-volver-peliculas'>
            <div>
                <p>{responseServ}</p> es un objeto, da error
                <p>{mensaje_confirmacion}</p>
                <p>Total butacas ocupadas: {mensaje_total_ocupadas}</p>
                <p>Total butacas restantes: {mensaje_total_restantes}</p>
            </div>

            <div className="caja-compra-entrada">
                <p>·············································</p>
                <p>{ticket_cine}</p>
                <p>{ticket_fecha_compra}</p>
                <p>{ticket_identificador}</p>
                <p>·············································</p>
                <p>{ticket_pelicula}</p>
                <p>{ticket_id_sala}</p>
                <p>{ticket_num_sala}</p>
                <p>{ticket_sesion}</p>
                <p>{ticket_fecha_proyeccion}</p>
                <p>·············································</p>
                <p>{ticket_precio_unitario}</p>
                <p>{ticket_numero_entradas}</p>
                <p>{ticket_precio_total}</p>
                <p>·············································</p>
                <p>{ticket_mensaje_pago}</p>
                <p>·············································</p>
            </div>

        </div>
*/