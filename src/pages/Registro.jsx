import { useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/atoms/NavBar";
import Swal from "sweetalert2";
import ImgLoginRegisterFondo from "../assets/img/imgLoginRegister.png";

function Registro() {
    const nameRef = useRef();
    const contrasenaRef = useRef();
    const correoRef = useRef();
    const formRef = useRef(); // Agrega una referencia para el formulario

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current); // Usa la referencia del formulario
        let URI = "http://127.0.0.1:3000/Usuarios";
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Nombre: formData.get("Nombre"),
                Contrasena: formData.get("Contrasena"),
                Correo: formData.get("Correo"),
            }),
        };
        console.log(options.body);
        fetch(URI, options)
            .then((response) => response.json())
            .then((data) => {
                alert(JSON.stringify(data));

                //Alert con Sweetaler
                Swal.fire({
                    text: JSON.stringify("Bienvenido " + data.Nombre)
                });
            });
    };

    return (
        <>
            <NavBar />
            <section className="text-center text-lg-start">
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card cascading-right estiloCard">
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Inicio de sesión</h2>
                                    <form ref={formRef}> 
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                name="Nombre"
                                                ref={nameRef}
                                                id="form3Example3"
                                                className="form-control text-center fw-bold"
                                                placeholder="Nombre"
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                name="Contrasena"
                                                ref={contrasenaRef}
                                                id="form3Example4"
                                                className="form-control text-center fw-bold"
                                                placeholder="Contraseña"
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                name="Correo"
                                                ref={correoRef}
                                                id="form3Example3"
                                                className="form-control text-center fw-bold"
                                                placeholder="Correo"
                                            />
                                        </div>
                                        <button type="submit" onClick={handlerClick} className="btnVerMas mb-4 mt-4">
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
                            <img src={ImgLoginRegisterFondo} className="w-100 rounded-4 shadow-4" alt="Background" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Registro;