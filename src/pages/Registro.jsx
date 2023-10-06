import { useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/atoms/NavBar";
import Swal from "sweetalert2";
import ImgLoginRegisterFondo from "../assets/img/imgLoginRegister.png";

function Registro() {
    const nameRef = useRef();
    const contrasenaRef = useRef();
    const correoRef = useRef();
    const telefonoRef = useRef();

    const handlerClick = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("user", nameRef.current.value);
        formData.append("contrasena", contrasenaRef.current.value);
        formData.append("correo", correoRef.current.value);
        formData.append("telefono", telefonoRef.current.value);

        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log("Objeto de Datos del Formulario:", formDataObject);

        try {
            const correosResponse = await fetch("http://127.0.0.1:3000/usuarios");
            const correosExistentes = await correosResponse.json();

            const listaCorreos = correosExistentes.map((correo) => correo.correo);

            if (listaCorreos.includes(formData.get("correo"))) {
                Swal.fire({
                    icon: "error",
                    title: "Error al registrar usuario",
                    text: `El correo ${formData.get("correo")} ya está en uso.`,
                });
            } else {
                const URI = "http://127.0.0.1:3000/usuarios";
                const opciones = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user: formData.get("user"),
                        contrasena: formData.get("contrasena"),
                        correo: formData.get("correo"),
                        telefono: formData.get("telefono")
                    }),
                };

                const response = await fetch(URI, opciones);
                const data = await response.json();

                if (data.message === "Usuario registrado exitosamente") {
                    Swal.fire({
                        icon: "success",
                        text: `Correo registrado: ${formData.get("correo")}`,
                        timer: 1500,
                    }).then(() => {
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error al registrar usuario",
                        text: data.error,
                    });
                }
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error en la solicitud",
                text: "Hubo un problema al intentar registrar el usuario.",
            });
            console.error("Error:", error);
        }
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
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                name="user"
                                                ref={nameRef}
                                                id="form3Example3"
                                                className="form-control text-center fw-bold"
                                                placeholder="Nombre"
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                name="contrasena"
                                                ref={contrasenaRef}
                                                id="form3Example4"
                                                className="form-control text-center fw-bold"
                                                placeholder="Contraseña"
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                name="correo"
                                                ref={correoRef}
                                                id="form3Example3"
                                                className="form-control text-center fw-bold"
                                                placeholder="Correo"
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="number"
                                                name="telefono"
                                                ref={telefonoRef}
                                                id="form3Example4"
                                                className="form-control text-center fw-bold"
                                                placeholder="telefono"
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