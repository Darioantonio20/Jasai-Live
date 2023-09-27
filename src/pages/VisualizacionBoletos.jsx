import NavBar from "../components/atoms/NavBar";
import BoletoInfo from "../components/molecules/Boletoinfo";
import IconoBlancoBoleto from "../assets/img/formaboletoBlanco.svg";

function VisualizacionBoletos() {
    return ( 
        <>
           <NavBar/>
            <div className="row d-flex">
                <div className="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-md-end justify-content-sm-center">
                    <div className="col-sm-12 col-md-6 col-xl-6 colorBoleto">
                        <div>
                            <div className="d-flex justify-content-between">
                                <img src={IconoBlancoBoleto}></img>
                                <div className="text-center m-5">
                                    <div className="text-light text-center">
                                        Gran Cafe | Tuxtla Gutierrez, chiapas
                                    </div>
                                    <div className="text-light text-center">
                                        café concert
                                    </div>
                                    <div className="d-flex justify-content-around text-light text-center">
                                        <div>
                                            Lugar:
                                        </div>
                                        <div>
                                            Estadio panchon contreras tuxtla gutierrez, chiapas
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around text-light text-center">
                                        <div>
                                            Fecha:
                                        </div>
                                        <div>
                                            Estadio panchon contreras tuxtla gutierrez, chiapas
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around text-light text-center">
                                        <div>
                                            Hora:
                                        </div>
                                        <div>
                                            Estadio panchon contreras tuxtla gutierrez, chiapas
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around text-light text-center">
                                        <div className="">
                                            Localidad:
                                        </div>
                                        <div>
                                            <div>Vip</div>
                                            <div>Preferente</div>
                                            <div>General</div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btnVerMas mb-4 mt-4">Comprar boleto</button>
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
            <BoletoInfo/>
        </>
     );
}

export default VisualizacionBoletos;