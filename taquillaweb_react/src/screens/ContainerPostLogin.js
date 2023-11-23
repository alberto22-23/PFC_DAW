import { ReactDOM } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

//Estilos
import "../styles/estilosTW.css";

/////////////////////// FUNCIONA CORRECTAMENTE ///////////////////////
const ContainerPostLogin = () => {

  // 0. VARIABLES DE ESTADO
  const [usuarioNombre, setUsuarioNombre] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [responseServ, setResponseServ] = useState('');
  const [linkoperable, setLinkOperable] = useState(false);

  /******************* MANEJADOR DEL SUBMIT AL PULSAR EL BOTÓN *********************/

  const handleSubmit = async (event) => {
    //1. Evitamos el comportamiento por defecto del botón (submit)
    event.preventDefault();

    /* 2. Definimos los datos que queremos enviar en el cuerpo de la solicitud, los nombres de las variables 
    deben coincidir con las claves de los datos en el cuerpo de la solicitud http */
    const datos = {
      usuarioNombre,  //'Paco123'
      password,       //'Abc123'
      email,          //'paco@gmail.com'
    };

    //3. Configuramos las cabeceras de la solicitud
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    //4. Hacemos la petición al servidor con Axios
    axios.post('http://localhost:8000/sessions/', datos, config)
      .then((responseServ) => {

        //5. Si la respuesta del servidor tiene el campo "status" con ese valor aparece "responseServ" en pantalla
        if (responseServ.data.status === "Inicio de sesión correcto, status=201") {
          //setResponse(JSON.stringify(response.data.status)); //('Respuesta: ' + JSON.stringify(response.data.status))
          setResponseServ(responseServ.data.status);
          console.log('Respuesta:', responseServ.data);

          //5.1. Guardamos el valor del campo "token" en sessionStorage
          sessionStorage.setItem('token', responseServ.data.data.token);
          const tokenUsuActual = sessionStorage.getItem('token');
          console.log('Token actual:', tokenUsuActual);

          //5.2. habilitamos el Link Explorar
          setLinkOperable(true);
        }

        //6. Respuesta del servidor si hay campos sin cubrir
        if (responseServ.data.status === "Hay campos sin cubrir, status=400") {
          //setResponseServ(JSON.stringify(responseServ.data));
          setResponseServ(responseServ.data.status);
        }

        //7. Respuesta del servidor si el Email no está registado
        if (responseServ.data.status === "El email no está registrado, status=400") {
          setResponseServ(responseServ.data.status);
        }

        //8. Respuesta del servidor si la contraseña introducida es incorrecta -> hay que hacer que funcione en Django
        if (responseServ.data.status === "La contraseña es incorrecta, status=400") { 
          setResponseServ(responseServ.data.status);
        }
      })

      //9. Si no se produce ningún caso de los anteriores se recoge el error
      .catch((error) => {
        setResponseServ(`Error: ${error.message}`); // igual que ("Error: " + error.message)
        console.error('Error:', error);
      });
  }
  /*********************** Fin handleSubmit - Manejador del submit ****************************/

  return (
    <div className='container-login'>
      <form className='campos' onSubmit={handleSubmit}>
        <div className="form-titulo">
          <h3><strong>Iniciar sesión</strong></h3>
        </div>
        <fieldset className="fieldset-flex">

          <label htmlFor="email" id="foremail">Email</label>
          <input type="email" id="email" className="largo" value={email} onChange={(event) => setEmail(event.target.value)} />

          <label htmlFor="password" id="forpassword">Contraseña</label>
          <input type="password" id="password" className="largo" value={password} onChange={(event) => setPassword(event.target.value)} />

          <button className="btn-entrar-registrar medio" type="submit">Entrar</button>
        </fieldset>
      </form>
      <div id="respuesta-servidor" className="largo">
        <strong>{responseServ}</strong>
      </div>

      <Link to="/" className="btn-explorar" style={{ visibility: linkoperable ? 'visible' : 'hidden' }}>Explorar</Link>
    </div>
  );
}

export default ContainerPostLogin;


/*useEffect(() => {
    const promesa = axios.get("https://fakestoreapi.com/products/categories");
    promesa.then((categorias) => {
        console.log("Se ha recibido la respuesta");
        console.log(categorias.data);
        setCategorias(categorias.data); 
    })*/

/*<label htmlFor="nombre" id="fornombre">Nombre de usuario</label>
      <input type="text" id="nombre" className="largo" value={usuarioNombre} onChange={(event) => setUsuarioNombre(event.target.value)} 
>*/