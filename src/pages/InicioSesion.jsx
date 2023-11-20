import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useRef, useContext } from 'react';
import Swal from 'sweetalert2';
import ContextoDeUsuario from "../context/ContextoDeUsuario";
import NavBar from "../components/atoms/NavBar";
import ImgLoginRegisterFondo from "../assets/img/imgLoginRegister.png";

const InicioSesion = () => {
    const form = useRef();
    const navigate = useNavigate();
    const { setUserContext } = useContext(ContextoDeUsuario);

    const usuarioAdmin = 'AdminJasaiLive';
    const contrasenaAdmin = 'JasaiLive';

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const Correo = formData.get('Correo');
        const Contrasena = formData.get('Contrasena');

        if (!Correo || !Contrasena) {
            Swal.fire({
                icon: 'question',
                text: 'Rellena todos los campos',
            });
        } else if (Correo === usuarioAdmin && Contrasena === contrasenaAdmin) {
            Swal.fire({
                icon: 'success',
                text: `Bienvenido ${Correo}`,
                timer: 3000,
                showConfirmButton: false,
            }).then(() => {
                navigate("/admin");
                setUserContext({ tipo: "Administrador" });
            });
        } else {
            fetch(`https://usuarios.jasailive.xyz:3000/usuarios/${Correo}/${Contrasena}`)
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'Contraseña incorrecta') {
                        Swal.fire({
                            icon: 'error',
                            text: 'La Contraseña es incorrecta',
                        });
                    } else if (data.message === "Nombre de usuario incorrecto") {
                        Swal.fire({
                            icon: 'error',
                            text: 'El Nombre de usuario es incorrecto',
                        });
                    } else if (data.message === 'Has iniciado sesión') {
                        Swal.fire({
                            icon: 'success',
                            text: `Bienvenido ${Correo}`,
                            timer: 3000,
                            showConfirmButton: false,
                        }).then(() => {
                            if (data.rol === 'administrador') {
                                navigate("/admin");
                                setUserContext({ tipo: "Administrador" });
                            } else {
                                navigate("/usuario");
                                setUserContext({ tipo: "Usuario" });
                            }
                        });
                    }
                })
                .catch(error => {
                    console.error('Error al iniciar sesión:', error.message);
                    Swal.fire({
                        icon: 'error',
                        text: 'Error al iniciar sesión. Inténtalo de nuevo.',
                    });
                });
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
                                    <form ref={form}>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                name="Correo"
                                                className="form-control text-center fw-bold"
                                                placeholder="Correo electrónico"
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                name="Contrasena"
                                                className="form-control text-center fw-bold"
                                                placeholder="Contraseña"
                                            />
                                        </div>
                                        <button type="submit" className="btnVerMas mb-4 mt-4" onClick={handlerClick} id="buton">
                                            Iniciar sesión
                                        </button>
                                        <div className="text-center mt-4">
                                            <Link to="/registro">Regístrate</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src={ImgLoginRegisterFondo} className="w-100 rounded-4 shadow-4" alt="Fondo" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InicioSesion;