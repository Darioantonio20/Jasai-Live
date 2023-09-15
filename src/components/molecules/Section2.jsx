import IgamenSection2Conjunto from "../../assets/img/imgSection2Conjunto.png";
import IconoSection2 from "../../assets/img/iconoSection2.png";
import "../../assets/styles/Pages.css";

function Section2() {
    return ( 
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 p-5">
                    <h2 className="tituloSection2">Bienvenidos a Jasai-Live</h2>
                    <p className="parrafoSection2">El acceso a los mejores conciertos, a un clic de distancia.</p>
                    <div className="text-center">
                        <img className="img-fluid" src={IconoSection2}></img>
                    </div>
                    <p className="parrafo2Section2">¿Qué pasaría si pudiesemos ver un concierto en vivo desde la comodidad de nuestros hogares? </p>
                    <p className="textoSection2">La visualización en línea de conciertos en tiempo real permite a los espectadores disfrutar de eventos desde cualquier ubicación con una buena conexión a internet. Esto amplía la audiencia y mejora la experiencia del usuario, lo que es especialmente relevante en el contexto actual de restricciones de asistencia a eventos en vivo</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <img className="img-fluid" src={IgamenSection2Conjunto} ></img>
                </div>
            </div>
        </div>
        </>
     );
}

export default Section2;