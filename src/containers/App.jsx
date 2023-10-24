import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { useState } from 'react';
import LandingPage from '../pages/LandingPage';
import InicioSesion from '../pages/InicioSesion';
import Registro from '../pages/Registro';
import VisualizacionBoletos from '../pages/VisualizacionBoletos';
import CompraBoletos from '../pages/CompraBoletos';
import ProtectedRoute from '../utils/ProtectedRoute';
import ContextoDeUsuario from '../context/ContextoDeUsuario';
import CuentaUsuario from '../pages/CuentaUsuario';
import CuentaAdmin from '../pages/CuentaAdmin';
import EnVivo from '../pages/EnVivo';
import '../assets/styles/App.css';

function App() {
  const [ userContext, setUserContext] = useState('');
  const [user, setUser] = useLocalStorage('user');

  return (
    <>
      <ContextoDeUsuario.Provider value = {{userContext, setUserContext}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/inicioSesion" element={<InicioSesion/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/visualizacionBoletos" element={<VisualizacionBoletos/>}/>
            <Route element={<ProtectedRoute canActivate={user}/>}>
              <Route path="/compraBoletos" element={<CompraBoletos/>}/>
              <Route path="/enVivo" element={<EnVivo/>}/>
              <Route path="/usuario" element={<CuentaUsuario/>}/>
              <Route path="/admin" element={<CuentaAdmin/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextoDeUsuario.Provider>
    </>
  )
}

export default App
