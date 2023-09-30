import Footer from "../components/atoms/Footer";
import NavBar from "../components/atoms/NavBar";
import IconoBlancoBoleto from "../assets/img/formaboletoBlanco.svg";
import IconoSection2 from "../assets/img/iconoSection2.png";

function CompraBoletos() {

    const mostrarAlerta=()=>{
        Swal.fire(
            'Pago Exitoso',
            'su compra ha sido realizada con éxito, descargue su boleto en pdf si lo desea',
            'success'
          )
    }

    return ( 
        <>
            <NavBar/>
            <div className="row d-flex">
                <div className="col-sm-12 col-md-3 col-xl-3 d-flex">
                    <div class="cardcita">
                        <img width={150} src={IconoSection2}></img>
                        <div class="card__content">
                            <p class="fs-1 text-center text-white mb-5">Precio</p>
                            <p class="fs-4 text-white">Vip: {/*Adjuntar el precio*/}</p>
                            <p class="fs-4 text-white">Preferente: {/*Adjuntar el precio*/}</p>
                            <p class="fs-4 text-white">General: {/*Adjuntar el precio*/}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-9 col-xl-9 d-flex justify-content-md-start justify-content-sm-center">
                    <div className="col-sm-12 col-md-9 col-xl-9 colorBoleto">
                        <div>
                            <div className="d-flex justify-content-between">
                                <img src={IconoBlancoBoleto}></img>
                                <img className="rotaciónBoleto" src={IconoBlancoBoleto}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={()=>mostrarAlerta()}>mostrar</button>
            </div>
            <Footer/>
        </>
     );
}

export default CompraBoletos;