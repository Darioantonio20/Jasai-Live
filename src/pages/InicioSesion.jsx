
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import ContextoDeUsuario from '../context/ContextoDeUsuario';
import NavBar from "../components/atoms/NavBar";
import ImgLoginRegisterFondo from "../assets/img/imgLoginRegister.png";

function InicioSesion() {

    const { userContext, setUserContext} = useContext(ContextoDeUsuario);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (datitos) => {
        console.log(datitos);
        setUserContext(datitos)
        localStorage.setItem('user', JSON.stringify(datitos));
        const url = `localhost:3000/Usuarios/${datitos.email}/${datitos.password}`
        console.log(url);
        navigate('/visualizacionBoletos');
        
        {/*fetch(url)
        .then((response) => {
            if (response.status === 200) {
                navigate('/visualizacionBoletos');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Login response:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });*/}
    
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-outline mb-4"> {/*onChange={(event)=>{setUsername(event.target.value)}}*/}
                                        <input type="text" id="form3Example3" {...register('email')} className="form-control text-center fw-bold" placeholder="Nombre de usuario"/>
                                    </div>
                                    <div className="form-outline mb-4"> {/*onChange={(event)=>{setPassword(event.target.value)}}*/}
                                        <input type="password" id="form3Example4" {...register('password')} className="form-control text-center fw-bold" placeholder="Contraseña"/>                                            
                                    </div>                                      
                                    <button type="submit" value="Enviar" className="btnVerMas mb-4 mt-4">Iniciar ya!!!</button>
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