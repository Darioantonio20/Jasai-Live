import { Link } from "react-router-dom";
import ImgJasaiLogo from "../../assets/img/jasaiLogo.png";

function NavBar() {
    return ( 
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div>
                    <img class="navbar-brand" src={ImgJasaiLogo} width={83} height={83}/>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link" href="#">INICIO</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/visualizacionBoletos" class="nav-link" href="#">EVENTOS</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/compraBoletos" class="nav-link" href="#">COMPRA DE BOLETOS</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link" href="#">SOBRE NOSOTROS</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/inicioSesion" class="nav-link" href="#">MI CUENTA</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
     );
}

export default NavBar;