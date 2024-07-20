import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import InicioSesion from '../pages/InicioSesion';
import Registro from '../pages/Registro';
import VisualizacionBoletos from '../pages/VisualizacionBoletos';
import CuentaUsuario from '../pages/CuentaUsuario';
import CuentaAdmin from '../pages/CuentaAdmin';
import EnVivo from '../pages/EnVivo';
import '../assets/styles/App.css';

// Importa el contexto
import ContextoDeUsuario from '../context/ContextoDeUsuario'

import React, { useState } from 'react';

function App() {
  // Establece el estado del contexto
  const [userContext, setUserContext] = useState({ tipo: null });

  return (
    // Envuelve la aplicación con el proveedor del contexto
    <ContextoDeUsuario.Provider value={{ userContext, setUserContext }}>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/InicioSesion" element={<InicioSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/visualizacionBoletos" element={<VisualizacionBoletos />} />
            <Route path="/enVivo" element={<EnVivo />} />
            <Route path="/usuario" element={<CuentaUsuario />} />
            <Route path="/admin" element={<CuentaAdmin />} />
          </Routes>
        </BrowserRouter>
      </>
    </ContextoDeUsuario.Provider>
  )
}

export default App;
