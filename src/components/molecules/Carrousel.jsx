import ImgCarrousel1 from "../../assets/img/imgCarrousel1.png";
import ImgCarrousel2 from "../../assets/img/imgCarrousel2.png";
import ImgCarrousel3 from "../../assets/img/imgCarrousel3.png";

function Carrousel(){

  return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={ImgCarrousel1} class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h2>No te pierdas lo más esperado</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src={ImgCarrousel2} class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h2>¡¡¡La perspectiva la pones tu!!!</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src={ImgCarrousel3} class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h2>Experiencias Jasai-Live</h2>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}

export default Carrousel;