import Img1Section3 from "../../assets/img/img1Section3.png";
import Img2Section3 from "../../assets/img/img2Section3.png";
import Img3Section3 from "../../assets/img/img3Section3.png";
import "../../assets/styles/Pages.css";

function Section3() {
    return ( 
        <>
        <div className="container-fluid mt-5  section3ColorFondo"><br/>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center mt-5">
                    <img className="mx-auto imgResponsiva" src={Img2Section3}></img>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center mt-3 mb-4">
                    <img className="mx-auto imgResponsiva" src={Img1Section3}></img>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center mt-5">
                    <img className="mx-auto imgResponsiva" src={Img3Section3}></img>
                </div>
            </div>
            <div className="p-5">
                <h2 className="tituloSection3 mb-5">Experiencias Jasai Live</h2>
                <p className="textoSection3">En el contexto actual, donde las restricciones de asistencia a eventos en vivo han generado una demanda creciente de opciones virtuales, esta solución se vuelve aún más relevante y necesaria, por eso traemos a ti jasai live ya sea a la comodidad de donde te encuentres o bien asistiendo y estando cerca de tus idolos.</p>
            </div>
        </div>
        </>
     );
}

export default Section3;