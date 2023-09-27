import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/atoms/NavBar";
import ImgLoginRegisterFondo from "../assets/img/imgLoginRegister.png";

function InicioSesion() {

    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    const handdleLogin = (e) =>{
        e.preventDefault();
        console.log({
            username: username,
            password: password
        });
        const data = {
            username: username,
            password: password
        };

        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error =>{
                console.log(error)
            })
    }

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
                                        <input type="text" id="form3Example3" onChange={(event)=>{setUsername(event.target.value)}} className="form-control text-center fw-bold" placeholder="Nombre de usuario"/>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" onChange={(event)=>{setPassword(event.target.value)}} className="form-control text-center fw-bold" placeholder="Contraseña"/>
                                    </div>
                                    <button type="submit" className="btnVerMas mb-4 mt-4" onClick={handdleLogin}>Iniciar ya!!!</button>
                                    <div className="text-center mt-4">
                                        <Link to="/registro">Registrate</Link>    
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

export default InicioSesion;