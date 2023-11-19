import PayPalButton from "../components/atoms/PayPalButton";
import "../assets/styles/Pages.css";
function CompraBoletos() {
    return ( 
        <>
            <div class="animation text-center mb-5 mt-5" data-text="Método de pago alternativo">Método de pago alternativo</div>
            <div className="row justify-content-center mt-5">
                <div className="cards col-md-6 col-lg-4">
                    <div className="card color">
                        <div className="mt-5 text-center">
                            <PayPalButton/>
                        </div>
                    </div>
                </div>  
            </div><br/><br/> 
        </>
     );
}
export default CompraBoletos;

