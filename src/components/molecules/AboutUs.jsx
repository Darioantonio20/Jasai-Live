import DarioFoto from "../../assets/img/darioFoto.png";
import DavidFoto from "../../assets/img/imgLicCarlos.jpeg";
import CarlosFoto from "../../assets/img/imgLicDavid.jpeg";
import "../../assets/styles/Pages.css";

function AboutUs() {
    return ( 
        <>
        <h4 class="font-weight-bold text-center mb-5 mt-5">Equipo de desarrollo</h4>
        <div class="row">
          <div class="col-lg-4 text-center">
            <img class="rounded-circle" src={DarioFoto} alt="Imagen Darío" width="140" height="140"/>
            <h2>Darío Antonio Gutiérrez Álvarez</h2>
            <p>Scrum Master</p>
          </div>
          <div class="col-lg-4 text-center">
            <img class="rounded-circle" src={DavidFoto} alt="Generic placeholder image" width="140" height="140"/>
            <h2>Jesús David Ruiz Garcia</h2>
            <p>Scrum Team</p>
          </div>
          <div class="col-lg-4 text-center">
            <img class="rounded-circle" src={CarlosFoto} alt="Generic placeholder image" width="140" height="140"/>
            <h2>Carlos Ivan Cruz Zarmiento</h2>
            <p>Product Owner</p>
          </div>
        </div>
        </>
     );
}

export default AboutUs;