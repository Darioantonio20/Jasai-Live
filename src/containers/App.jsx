import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import InicioSesion from '../pages/InicioSesion';
import Registro from '../pages/Registro';
import VisualizacionBoletos from '../pages/VisualizacionBoletos';
import CompraBoletos from '../pages/CompraBoletos';
import '../assets/styles/App.css';
import ProtectedRoute from '../utils/ProtectedRoute';
import { useLocalStorage } from 'react-use';

function App() {

  const [user, setUser] = useLocalStorage('user');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/inicioSesion" element={<InicioSesion/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/visualizacionBoletos" element={<VisualizacionBoletos/>}/>
          <Route element={<ProtectedRoute canActivate={user}/>}>
            <Route path="/compraBoletos" element={<CompraBoletos/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
