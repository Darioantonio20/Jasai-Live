import { Link } from "react-router-dom";
import NavBar from "../components/atoms/NavBar";
import ImgLoginRegisterFondo from "../assets/img/imgLoginRegister.png";

function Registro() {
    return ( 
        <>
            <NavBar/>
            <section className="text-center text-lg-start">
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card cascading-right estiloCard">
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Inicio de sesión</h2>
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example3" className="form-control text-center fw-bold" placeholder="Nombre de usuario"/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control text-center fw-bold" placeholder="Contraseña"/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example3" className="form-control text-center fw-bold" placeholder="valor a pedir por el lic"/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control text-center fw-bold" placeholder="valor a pedir por el lic"/>
                                        </div>
                                        <button type="submit" className="btnVerMas mb-4 mt-4">
                                            Iniciar ya!!!
                                        </button>
                                        <div className="text-center mt-4">
                                            <Link to="/inicioSesion">Inicia sesión</Link>    
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src={ImgLoginRegisterFondo} className="w-100 rounded-4 shadow-4"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Registro;