import NavBar from "../components/atoms/NavBar";
import { useContext,useEffect } from "react";
import ContextoDeUsuario from "../context/ContextoDeUsuario";
import IconoBlancoBoleto from "../assets/img/formaboletoBlanco.svg";

function VisualizacionBoletos() {
    const data = [{id:1},{id:2},{id:3}] 
    const { userContext, setUserContext} = useContext(ContextoDeUsuario);
    useEffect(() => {
        console.log(userContext, "este es boton de ver boleto");
    }, [userContext])

    const compraDeBoletos = () =>{
        console.log("lo que sea");
       if(useContext== ""){ Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          ) 
       }else{Swal.fire(
            'bad job',
            'ñahhh',
            'success'
          ) }
}

    return ( 
        <>
           <NavBar/>
            <div className="row d-flex">
            {data.map((index)=>{
                return <></>
                {console.log(index)} 
                <><h1>peneee {index}</h1><p>hola {index}</p></>
            })}
                <div className="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-md-end justify-content-sm-center">
                    <div className="col-sm-12 col-md-6 col-xl-6 colorBoleto">
                        <div>
                            <div className="d-flex justify-content-between">
                                <img src={IconoBlancoBoleto}></img>
                                <div className="text-center m-5">
                                    <div className="text-light text-center fs-5">
                                        Gran Cafe | Tuxtla Gutierrez, chiapas
                                    </div>
                                    <div className="barraBlanca">-</div>
                                    <div className="text-light text-center fs-1">
                                        café concert
                                    </div>
                                    <div className="barraBlancaGrande">-</div>
                                    <div className="d-flex justify-content-around text-light text-center">
                                        <div className="fs-2">
                                            Lugar:
                                        </div>
                                        <div className="fs-5 w-50">
                                            Estadio panchon contreras tuxtla gutierrez, chiapas
                                        </div>
                                    </div>
                                    <div className="barraBlanca">-</div>
                                    <div className="d-flex justify-content-around text-light text-center">
                                        <div className="fs-2">
                                            Fecha:
                                        </div>
                                        <div className="fs-5">
                                            Estadio panchon contreras tuxtla gutierrez, chiapas
                                        </div>
                                    </div>
                                    <div className="barraBlanca">-</div>
                                    <div className="d-flex justify-content-around text-light text-center">
                                        <div className="fs-2">
                                            Hora:
                                        </div>
                                        <div className="fs-5">
                                            Estadio panchon contreras tuxtla gutierrez, chiapas
                                        </div>
                                    </div>
                                    <div className="barraBlanca">-</div>
                                    <div className="d-flex justify-content-around text-light text-center">
                                        <div className="fs-2 m-3">
                                            Localidad:
                                        </div>
                                        <div>
                                            <div className="fs-5">Vip</div>
                                            <div className="fs-5">Preferente</div>
                                            <div className="fs-5">General</div>
                                        </div>
                                    </div>
                                    <div className="barraBlancaGrande">-</div>

                                    <button type="submit" onClick={()=>compraDeBoletos()} className="btnVerMas mb-4 mt-4">Comprar boleto</button>

                                </div>
                                <img className="rotaciónBoleto" src={IconoBlancoBoleto}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-md-start justify-content-sm-center">
                    <div className="col-sm-12 col-md-6 col-xl-6 colorBoleto">
                        <div>
                            <div className="d-flex justify-content-between">
                                <img src={IconoBlancoBoleto}></img>
                                <img className="rotaciónBoleto" src={IconoBlancoBoleto}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default VisualizacionBoletos;