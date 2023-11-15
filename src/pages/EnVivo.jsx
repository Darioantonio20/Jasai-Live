import NavBar from "../components/atoms/NavBar";
import "../assets/styles/Skeleton.css";
import "../assets/styles/Pages.css";
import ImgFondoEnVivito from "../assets/img/imgFondoEnVivo.avif";

function EnVivo() {
  return (
    <>
      <NavBar />
      <section className="vh-100" style={{ position: 'relative' }}>
        <img
          src={ImgFondoEnVivito}
          alt="Fondo"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.9,
            zIndex: -1,
          }}
        ></img>
       <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="text-center">
                  <div className="live-indicator">
                    <h1>
                        <b className="text-center">Jasai-Live</b>
                    </h1>
                    <div className="red-circle"></div>
                  </div>
                </div>
                <div className="card-body p-5 text-center">
                  Hola Timmy
                  {/*<div className="cardcitaVideo d-flex justify-content-center align-items-center">
                    <div className="cardcitaVideo__skeleton cardcitaVideo__title"></div>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EnVivo;
