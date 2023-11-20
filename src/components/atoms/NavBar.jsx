import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ContextoDeUsuario from "../../context/ContextoDeUsuario";
import ImgJasaiLogo from "../../assets/img/jasaiLogo.png";
function NavBar() {
    const { userContext } = useContext(ContextoDeUsuario);

    const usuario = userContext.tipo;

    return (
        <>
            <div className="pt-2 pb-1 bg-black">
                <p className="text-light text-center fs-5">"Tu confianza es nuestra mejor recompensa"</p>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="ms-5">
                        <img className="navbar-brand fas fa-beat" src={ImgJasaiLogo} width={77} height={83} />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav fw-medium fs-4">
                            <li className="nav-item m-2">
                                <Link to="/" className="nav-link" href="#">
                                    Inicio
                                </Link>
                            </li>
                            {usuario === "Administrador" && (
                                <li className="nav-item m-2">
                                    <Link to="/admin" className="nav-link" href="#">
                                        Cuenta de Admin
                                    </Link>
                                </li>
                            )}
                            {usuario === "Usuario" && (
                                <>
                                    <li className="nav-item m-2">
                                        <Link to="/usuario" className="nav-link" href="#">
                                            Cuenta de Usuario
                                        </Link>
                                    </li>
                                    <li className="nav-item m-2">
                                        <Link to="/visualizacionBoletos" className="nav-link" href="#">
                                            Eventos
                                        </Link>
                                    </li>
                                    <li className="nav-item m-2">
                                        <Link to="/enVivo" className="nav-link" href="#">
                                            ¡En vivo!
                                        </Link>
                                    </li>
                                </>
                            )}
                            {!usuario && (
                                <>
                                    <li className="nav-item m-2">
                                        <Link to="/inicioSesion" className="nav-link" href="#">
                                            Inicio de sesión
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;