///import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWithOutlet from './screens/PageWithOutlet';
import Home from './screens/Home';
import ContainerPostLogin from './screens/ContainerPostLogin';
import ContainerCerrar from './screens/ContainerCerrar';
import ContainerPostRegistro from './screens/ContainerPostRegistro';
import ContainerGetCines from './screens/ContainerGetCines';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageWithOutlet />}> {/*De esta forma aparece el footer y el header en todas las páginas*/}
            <Route index element={<Home />}></Route>                                                {/*ocupa el <Outlet />*/}
            <Route path="/abrir" element={<ContainerPostLogin />}></Route>                          {/*ocupa el <Outlet />*/}
            <Route path="/cerrar" element={<ContainerCerrar />}></Route>                          {/*ocupa el <Outlet />*/}
            <Route path="/registro" element={<ContainerPostRegistro />}></Route>                    {/*ocupa el <Outlet />*/}
            <Route path="/cines-pelis-estrenos" element={<ContainerGetCines />}></Route>                    {/*ocupa el <Outlet />*/}
            
          </Route>{/*fin path="/">*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
