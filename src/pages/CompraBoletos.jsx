import Footer from "../components/atoms/Footer";
import NavBar from "../components/atoms/NavBar";
import IconoBlancoBoleto from "../assets/img/formaboletoBlanco.svg";
import IconoSection2 from "../assets/img/iconoSection2.png";
import PayPalButton from "../components/molecules/PayPalButton";

function CompraBoletos() {
    return (
        <>
            <NavBar />
            <div className="row">
                <div className="col-md-4"> {/* tarjeta1 */}
                    <div className="cardcita">
                        <img width={150} src={IconoSection2} alt="Icono"></img>
                        <div className="card__content">
                            <p className="fs-1 text-center text-white mb-5">Precio</p>
                            <p className="fs-4 text-white">Vip: {/* Adjuntar el precio */}</p>
                            <p className="fs-4 text-white">Preferente: {/* Adjuntar el precio */}</p>
                            <p className="fs-4 text-white">General: {/* Adjuntar el precio */}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4"> {/* tarjeta2 */}
                    <div className="cardcita">
                        <img width={150} src={IconoSection2} alt="Icono"></img>
                        <div className="card__content">
{/*                             <p className="fs-1 text-center text-white mb-5">Precio</p> */}
                            <p className="fs-4 text-white">Localidad: {/* Adjuntar el precio */}</p>
                            <p className="fs-4 text-white">Cantidad: {/* Adjuntar el precio */}</p>
                            <p className="fs-4 text-white">Precio: {/* Adjuntar el precio */}</p>
                            {/* Aqui Paypal */}
                            <PayPalButton/>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="col-sm-12 col-md-9 col-xl-9 colorBoleto">
                        <div>
                            <div className="d-flex justify-content-between">
                                <img src={IconoBlancoBoleto} alt="Icono"></img>
                                <img className="rotaciónBoleto" src={IconoBlancoBoleto} alt="Icono"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CompraBoletos;
