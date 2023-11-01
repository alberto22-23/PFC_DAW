import { ReactDOM } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

//Estilos
import "../styles/estilosTW.css";

/////////////////////// FUNCIONA CORRECTAMENTE ///////////////////////
const ContainerPostLogin = () => {


  const [usuarioNombre, setUsuarioNombre] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const [linkoperable, setLinkOperable] = useState(false);

  /////////////////////// Manejador del submit ///////////////////////
  const handleSubmit = async (event) => {
    event.preventDefault(); //evitamos el comportamiento por defecto del botón

    // Definimos los datos que queremos enviar en el cuerpo de la solicitud
    const datos = {
      usuarioNombre, //'Paco123'
      password,       //'Abc123'
      email,          //'paco@gmail.com'
    };

    // Configuramos las cabeceras de la solicitud
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    axios.post('http://localhost:8000/sessions/', datos, config)
      .then((response) => {
        if (response.data.status === "Inicio de sesión correcto, status=201") {
          //Si la respuesta del servidor tiene el campo "status" aparece "response" en pantalla
          setResponse(JSON.stringify(response.data.status)); //('Respuesta: ' + JSON.stringify(response.data.status))
          console.log('Respuesta:', response.data);

          // y guardamos el valor del campo "token" en sessionStorage
          sessionStorage.setItem('token', response.data.data.token);
          const tokenUsuActual = sessionStorage.getItem('token');
          console.log('Token actual:', tokenUsuActual);

          //habilitamos el Link Explorar
          setLinkOperable(true);
        }
        if(response.status === 400){
          setResponse(JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        setResponse(`Error: ${error.message}`); // igual que ("Error: " + error.message)
        //setResponse(JSON.stringify(response.data));
        console.error('Error:', error);
        // Puedes manejar los errores aquí
      });
  }
  /////////////////////// Fin Manejador del submit ///////////////////////
  return (
    <div className='container-login'>
      <form className='campos' onSubmit={handleSubmit}>
        <div className="form-titulo">
          <h3><strong>Iniciar sesión</strong></h3>
        </div>
        <fieldset className="fieldset-flex">
          <label htmlFor="nombre" id="fornombre">Nombre de usuario</label>
          <input type="text" id="nombre" className="largo" value={usuarioNombre} onChange={(event) => setUsuarioNombre(event.target.value)} />

          <label htmlFor="email" id="foremail">Email</label>
          <input type="email" id="email" className="largo" value={email} onChange={(event) => setEmail(event.target.value)} />

          <label htmlFor="password" id="forpassword">Contraseña</label>
          <input type="password" id="password" className="largo" value={password} onChange={(event) => setPassword(event.target.value)} />

          <button className="btn-entrar-registrar medio" type="submit">Entrar</button>
        </fieldset>
      </form>
      <div id="respuesta-servidor" className="largo">
        <strong>{response}</strong>
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