import CardNanio from "../../assets/img/cardNanioAboutUs.png";
import CardLic from "../../assets/img/cardLicenciadoAboutUs.png";
import CardDoc from "../../assets/img/cardDocCarlosAboutUs.png";
import "../../assets/styles/Pages.css";

function AboutUs() {
    return ( 
        <>
        <h2 className="TituloSection4 mb-5 mt-5">Equipo de desarrollo</h2>
        <div className="container-fluid mt-5"><br/>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                    <img className="mx-auto imgResponsiva" src={CardNanio}></img>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                    <img className="mx-auto imgResponsiva" src={CardLic}></img>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                    <img className="mx-auto imgResponsiva" src={CardDoc}></img>
                </div>
            </div>
        </div>
        </>
     );
}

export default AboutUs;