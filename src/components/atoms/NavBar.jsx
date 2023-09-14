import { Link } from "react-router-dom";
import ImgJasaiLogo from "../../assets/img/jasaiLogo.png";

function NavBar() {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="ms-5">
                    <img className="navbar-brand fas fa-beat" src={ImgJasaiLogo} width={77} height={83}/>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav fw-medium fs-4">
                        <li className="nav-item m-2">
                            <Link to="/" className="nav-link" href="#">INICIO</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to="/visualizacionBoletos" className="nav-link" href="#">EVENTOS</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to="/compraBoletos" className="nav-link" href="#">COMPRA DE BOLETOS</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to="/" className="nav-link" href="#">SOBRE NOSOTROS</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to="/inicioSesion" className="nav-link" href="#">MI CUENTA</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
     );
}

export default NavBar;