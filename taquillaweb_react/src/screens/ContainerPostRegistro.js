import { ReactDOM } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

//Estilos
import "../styles/estilosTW.css";


const ContainerPostRegistro = () => {

    // 0. VARIABLES DE ESTADO
    const [usuarioNombre, setUsuarioNombre] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [responseServ, setResponseServ] = useState('');
    const [linkoperable, setLinkOperable] = useState(false);


    /******************* MANEJADOR DEL SUBMIT AL PULSAR EL BOTÓN *********************/
    const handleSubmit = async (event) => {
        
        //1. Evitamos el comportamiento por defecto del botón (submit)
        event.preventDefault();

        if(usuarioNombre === "" || password === "" || confirmPassword === "" || email === ""){
            alert("Hay datos sin cubrir");
        }

        // 2. Definimos los datos que queremos enviar en el cuerpo de la solicitud
        const datos = {
            usuarioNombre,  //'Paco123'
            password,       //'Abc123'
            email,          //'paco@gmail.com'
        };
        // 3. Configuramos las cabeceras de la solicitud
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        // 4. Hacemos la petición al servidor con Axios
        axios.post('http://localhost:8000/users/', datos, config)
            .then((responseServ) => {
                if (responseServ.data.status === "Se ha creado el nuevo usuario, status=201") {
                    // 5. Si la respuesta del servidor tiene el campo "status" con ese valor aparece "responseServ" en pantalla
                    //setResponse(JSON.stringify(response.data.status)); //('Respuesta: ' + JSON.stringify(response.data.status))
                    setResponseServ(responseServ.data.status);
                    console.log('Respuesta:', responseServ.data);

                    // 6. y guardamos el valor del campo "token" en sessionStorage
                    //sessionStorage.setItem('token', responseServ.data.data.token);
                    //const tokenUsuActual = sessionStorage.getItem('token');
                    //console.log('Token actual:', tokenUsuActual);

                    // 7. habilitamos el Link a Inicio sesión
                    setLinkOperable(true);
                }
                //if (responseServ.data.status === "Hay campos sin cubrir, status=400") {
                    //setResponseServ(JSON.stringify(responseServ.data));
                    //setResponseServ(responseServ.data.status);
                //}
                
            })
            .catch((error) => {
                setResponseServ(`Error: ${error.message}`); // igual que ("Error: " + error.message)
                console.error('Error:', error);
                // Puedes manejar los errores aquí
            });
    }
    /*********************** Fin Manejador del submit ****************************/

    return (
        <div className='container-registro'>
            <form className='campos' onSubmit={handleSubmit}>
                <div className="form-titulo">
                    <h3><strong>Registro nuevo usuario</strong></h3>
                </div>
                <fieldset className="fieldset-flex">
                    <label htmlFor="nombre" id="fornombre">Nombre de usuario</label>
                    <input type="text" id="nombre" className="largo" value={usuarioNombre} onChange={(event) => setUsuarioNombre(event.target.value)}/>

                    <label htmlFor="email" id="foremail">Email</label>
                    <input type="text" id="email" className="largo" value={email} onChange={(event) => setEmail(event.target.value)}/>

                    <label htmlFor="password" id="forpassword">Contraseña</label>
                    <input type="text" id="password" className="largo" value={password} onChange={(event) => setPassword(event.target.value)} />

                    <label htmlFor="confirm" id="forconfirm">Confirmar contraseña</label>
                    <input type="text" id="confirm" className="largo" />

                    <button className="btn-entrar-registrar medio" type="submit">Registrar</button>

                    <Link to="/abrir" className="enlace-reg-log" style={{ visibility: linkoperable ? 'visible' : 'hidden' }}>
                        Link a Inicio sesión
                    </Link>
                </fieldset>
            </form>
            <div id="respuesta-servidor" className="largo">
                <strong>{responseServ}</strong>
            </div>
        </div>
    );
}


export default ContainerPostRegistro;