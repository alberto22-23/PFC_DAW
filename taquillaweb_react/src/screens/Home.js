//ok
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

//Estilos
import "../styles/estilosTW.css";
import logoTW from "../figuras/logoTW.jpg"

const Home = (props) => {

    /*const [linkRegOperable, setLinkRegOperable] = useState(true);
    const [linkAbrirOperable, setLinkAbrirOperable] = useState(true);
    const [linkCerrarOperable, setLinkCerrarOperable] = useState(true);*/

    //////// Ocultar - Visbilizar botones ////////
    var regVisibilidad = true;
    var abrirVisibilidad = true;
    var cerrarVisibilidad = true;
    var linkoperable = false;
    var estadoSesion = "Abra sesión con sus datos de usuario.";

    // Guardamos el token en una variable
    const tokenUsuActual = sessionStorage.getItem('token');
    console.log('Token actual:', tokenUsuActual);

    if(tokenUsuActual != 'Sesión cerrada'){
        regVisibilidad = false;
        abrirVisibilidad = false;
        linkoperable = true;
        estadoSesion = "Sesión iniciada."
    }
    //////// Final Ocultar - Visbilizar botones ////////

    return <div className="caja-links-cines">
        <div className="caja-sesion">
            {/**/}
            <Link to="/registro" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: regVisibilidad ? '' : 'none' }}>Registro nuevo usuario</Link>
            {/**/}

            <div style={{color: 'firebrick', fontWeight:'bold'}}>{estadoSesion}</div>

            <div className='div-abrir-cerrar'>
                <Link to="/abrir" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: abrirVisibilidad ? '' : 'none' }}>Abrir sesión</Link>
                {/**/}
                <Link to="/cerrar" className="enlace enlace-a-pelis-estrenos enlace-sesion" style={{ display: cerrarVisibilidad ? '' : 'none' }}>Cerrar sesión</Link>
            </div>
        </div>
        <div className='caja-logo-descripcion'>
            <h3>Presentación.</h3>
        </div>
        <div className="presentacion">
            {/*<img src={logoTW} alt="logo" title="Taquilla Web - React" className="imagen-logo" />*/}
            <p>
                El componente <strong>PageWithOutlet.js</strong> contiene a los componentes:<br></br>
                - Header<br></br>
                - Outlet<br></br>
                - Footer<br></br>
                <br></br>
                <strong>App.js</strong> contiene las diferentes rutas (Routes) de la aplicación en el servidor de React, todas muestran
                al componente PageWithOutlet.<br></br>
                Lo que varía de una ruta a otra es el componente Outlet cuya posición está ocupada por un determinado componente Route.<br></br>
                Cada Route tiene las propiedades path y element, este último es un componente Container (el cuerpo de la página) asignado a dicho path.<br></br>
                <br></br>
                <strong>Header.js</strong> es el Encabezado de las páginas de la aplicación y contiene los links a las principales rutas (Routes en App.js):<br></br>
                Productos, Categorías e Inicio.<br></br>
                <br></br>
                <strong>Características de los componentes Container:</strong><br></br>
                &gt; Solo se importan en App.js pues son los componentes a los que apuntan las Routes respectivas.<br></br>
                &gt; En cada uno de ellos:<br></br>
                1) Se declara una variable de estado <strong><i>const [variableEst, setVariableEst] = useState(variableEstIni)</i></strong>;<br></br>
                2) Dentro de una función <strong><i>useEffect()</i></strong>:<br></br>
                2.1) traen datos de la API con <strong><i>axios.get("http://localhost:8000/...")</i></strong>.<br></br>
                2.2) dentro de una función Promesa se establece el valor de la variable de estado asignándole los datos que devuelve la API con <strong><i>setVariableEst()</i></strong><br></br>
                3) Con <strong><i>return</i></strong> devuelven un elemento &lt;div&gt; que sería el cuerpo de la página conteniendo los componentes hijo &lt;Card&gt; (a excepción de &lt;...&gt;
                que devuelve un elemento &lt;div&gt; simple) que visibilizan la información obtenida desde la API aplicado la función .map() sobre la variable de estado <strong><i>variableEst.map()</i></strong>. En esta aplicación la variable de estado suele ser un array de objetos, por lo tanto .map() pasa mediante <strong><i>props</i></strong> cada objeto
                del array a un componente &lt;Card&gt; que muestra los datos en la interfaz de usuario.<br></br>
     
            </p>
            <p className="p-bienvenida" style={{ display: linkoperable ? '' : 'none' }}>¡Bienvenid@! ¡Explore TaquillaWeb y consiga sus entradas!</p>
            <Link to="/cines-pelis-estrenos" className="btn-explorar" style={{ display: linkoperable ? '' : 'none' }}>Explorar</Link>
        </div>

    </div>
}

export default Home;