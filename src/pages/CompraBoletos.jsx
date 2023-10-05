import Footer from "../components/atoms/Footer";
import NavBar from "../components/atoms/NavBar";
import IconoBlancoBoleto from "../assets/img/formaboletoBlanco.svg";
import IconoSection2 from "../assets/img/iconoSection2.png";
import PayPalButton from "../components/atoms/PayPalButton";

function CompraBoletos() {

    return ( 
        <>
        <NavBar />
            <div className="row justify-content-center align-items-center m-5">
                <div className="col-md-7">
                    <div className="col-sm-12 col-md-12 col-xl-12 colorBoleto">
                        <div>
                            <div className="d-flex justify-content-between">
                                <img src={IconoBlancoBoleto} alt="Icono"></img>
                                <div>
                                    <form method="post" className="d-flex flex-column" action="/send/">
                                        <strong><label className="fs-1 text-center text-white mt-5 mb-5">Rellene Los Datos</label></strong>
                                        <label className="fs-3 text-center text-white mt-5 mb-4">Seleccione</label>
                                        <select className="text-center form-control-lg">
                                            <option disabled selected>Localidad</option>
                                            <option value="1">VIP</option>
                                            <option value="2">Preferente</option>
                                            <option value="3">Localidad</option>
                                            <option value="4">Jasai-Live</option>
                                        </select>
                                    <label className="fs-3 text-center text-white mt-5 mb-4">Nombre Completo</label>
                                    <input class="form-control form-control-lg text-center" type="text"/>
                                    <label className="fs-3 text-center text-white mt-5 mb-4">Número De Teléfono</label>
                                    <input class="form-control form-control-lg text-center" type="number"/>
                                    </form>
                                </div>
                                <img className="rotaciónBoleto" src={IconoBlancoBoleto} alt="Icono"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-5 containercito noselect">
                    <div class="canvas">
                        <div class="tracker tr-1"></div><div class="tracker tr-2"></div><div class="tracker tr-3"></div><div class="tracker tr-4"></div><div class="tracker tr-5"></div><div class="tracker tr-6"></div><div class="tracker tr-7"></div><div class="tracker tr-8"></div><div class="tracker tr-9"></div><div class="tracker tr-10"></div><div class="tracker tr-11"></div><div class="tracker tr-12"></div><div class="tracker tr-13"></div><div class="tracker tr-14"></div><div class="tracker tr-15"></div><div class="tracker tr-16"></div><div class="tracker tr-17"></div><div class="tracker tr-18"></div><div class="tracker tr-19"></div><div class="tracker tr-20"></div><div class="tracker tr-21"></div><div class="tracker tr-22"></div><div class="tracker tr-23"></div><div class="tracker tr-24"></div><div class="tracker tr-25"></div>
                        <div id="cardcita">
                        <p id="prompt" className="text-center ">Precios</p>
                        <div class="title">
                            <p className="fs-4 ">Vip: {/* Adjuntar el precio */}</p>
                            <p className="fs-4 ">Preferente: {/* Adjuntar el precio */}</p>
                            <p className="fs-4 ">General: {/* Adjuntar el precio */}</p><br/>
                            <p className="fs-4 ">Localidad: {/* Adjuntar el precio */}</p>
                            <p className="fs-4 ">Precio: {/* Adjuntar el precio */}</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-5">
                    <div class="cards col-md-4">
                        <div class="card color">
                            <div className="mt-5 text-center">
                                <PayPalButton/>
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-5"></div> 
                </div> 
            </div>
        <Footer />
        </>
     );
}

export default CompraBoletos;

