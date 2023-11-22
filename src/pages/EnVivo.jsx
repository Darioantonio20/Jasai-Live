import NavBar from "../components/atoms/NavBar";
import "../assets/styles/Skeleton.css";
import "../assets/styles/Pages.css";
import ImgFondoEnVivo from "../assets/img/imgFondoEnVivo.avif";

function EnVivo() {
  const videoUrl = "https://play.streamingvideoprovider.com/popplayer.php?it=14wtjarofldw&is_link=1&w=720&h=405&pause=1&title=jasai&skin=3&repeat=&brandNW=1&start_volume=34&bg_gradient1=%23ffffff&bg_gradient2=%23e9e9e9&fullscreen=1&fs_mode=2&skinAlpha=50&colorBase=%23250864&colorIcon=%23ffffff&colorHighlight=%237f54f8&direct=false&no_ctrl=&auto_hide=1&viewers_limit=0&cc_position=bottom&cc_positionOffset=70&cc_multiplier=0.03&cc_textColor=%23ffffff&cc_textOutlineColor=%23ffffff&cc_bkgColor=%23000000&cc_bkgAlpha=0.1&image=https%3A%2F%2Fmember.streamingvideoprovider.com%2Fpanel%2Fserver%2Fclip%3Fa%3DGenerateThumbnail%26clip_id%3D7484036%26size%3Dlarge&mainBg_Color=%23ffffff&aspect_ratio=16%3A9&play_button=1&play_button_style=pulsing&sleek_player=1&stretch=&auto_play=0&auto_play_type=unMute&floating_player=none";

  return (
    <>
      <NavBar />
      <section className="vh-100" style={{ position: 'relative' }}>
        <img
          src={ImgFondoEnVivo}
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
                  <iframe
                    title="Jasai-Live"
                    width="100%"
                    height="405"
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
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