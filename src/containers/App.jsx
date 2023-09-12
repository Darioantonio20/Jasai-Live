import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import InicioSesion from '../pages/InicioSesion';
import Registro from '../pages/Registro';
import VisualizacionBoletos from '../pages/VisualizacionBoletos';
import CompraBoletos from '../pages/CompraBoletos';
import '../assets/styles/App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/inicioSesion" element={<InicioSesion/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/visualizacionBoletos" element={<VisualizacionBoletos/>}/>
          <Route path="/compraBoletos" element={<CompraBoletos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
