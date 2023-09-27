import NavBar from "../components/atoms/NavBar";
import BoletoInfo from "../components/molecules/Boletoinfo";
import IconoBlancoBoleto from "../assets/img/formaboletoBlanco.svg";

function VisualizacionBoletos() {
    return ( 
        <>
           <NavBar/>
            <div className="row">
                
                <div className="col">
                    <div className="col-md-6 col-sm-12 col-xl-6 colorBoleto">
                        <div>
                       
                            <div className="d-flex justify-content-between">
                                <img src={IconoBlancoBoleto}></img>
                                <div>
                                    prueba
                                </div>
                                <img className="rotaciónBoleto" src={IconoBlancoBoleto}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="col-md-6 col-sm-12 col-xl-6 colorBoleto">
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