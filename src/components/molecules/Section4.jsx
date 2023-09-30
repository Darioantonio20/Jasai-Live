import { Link } from "react-router-dom";
import BoletoImg1 from "../../assets/img/ImgBoleto1.png";
import BoletoImg2 from "../../assets/img/ImgBoleto2.png";
import IconoNext from "../../assets/img/iconoNext.png";
import IconoPreview from "../../assets/img/iconoPreview.png";
import "../../assets/styles/Pages.css";

function Section4() {
    return ( 
        <>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="container-fluid align">
                    <h2 className="TituloSection4 mb-5 mt-5">Explorar más eventos</h2>
                    <div className="carousel-item active">
                        <div className="row justify-content-center row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img src={BoletoImg1} className="card-img-top" alt="Boletos"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={BoletoImg2} className="card-img-top" alt="Boletos"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="row justify-content-center row-cols-1 row-cols-md-3 g-4 ">
                            <div className="col">
                                <div className="card h-100">
                                    <img src={BoletoImg1} className="card-img-top" alt="Boletos"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={BoletoImg2} className="card-img-top" alt="Boletos"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <img src={IconoPreview} aria-hidden="true"></img>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <img src={IconoNext}  aria-hidden="true"></img>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="d-flex justify-content-center m-5">
                <Link to="/visualizacionBoletos">
                    <button type="button" className="btnVerMas">Ver más </button>
                </Link>
            </div>
        </div>
        </>
     );
}

export default Section4;