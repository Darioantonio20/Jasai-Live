import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ImgLoginRegisterFondo from "../assets/img/imgLoginRegister.png";
import NavBar from "../components/atoms/NavBar";

const InicioSesion = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const usuarios = [
            {
                correo: 'usuario@example.com',
                contrasena: 'contrasenaUsuario',
                tipo: 'usuario',
            },
            {
                correo: 'admin@example.com',
                contrasena: 'contrasenaAdmin',
                tipo: 'admin',
            },
        ];

        const usuario = usuarios.find((u) => u.correo === correo);

        if (usuario) {
            if (usuario.contrasena === contrasena) {
                console.log('Inicio de sesión exitoso');
                console.log('Datos del usuario:', usuario);

                if (usuario.tipo === 'admin') {
                 
                    console.log("admin");
                    navigate('/admin');
                } else {
                    
                    console.log("usuario");
                    navigate('/usuario');
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    text: '¡Bienvenido!',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Contraseña incorrecta',
                    text: 'Por favor, verifica tu contraseña.',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Correo no encontrado',
                text: 'Por favor, verifica tu correo electrónico.',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

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
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form3Example3"
                                                value={correo}
                                                onChange={(e) => setCorreo(e.target.value)}
                                                className="form-control text-center fw-bold"
                                                placeholder="Correo electrónico"
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form3Example4"
                                                value={contrasena}
                                                onChange={(e) => setContrasena(e.target.value)}
                                                className="form-control text-center fw-bold"
                                                placeholder="Contraseña"
                                            />
                                        </div>
                                        <button type="submit" className="btnVerMas mb-4 mt-4">
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
