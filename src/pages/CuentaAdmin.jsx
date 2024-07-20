import React, { useState } from 'react';
import Chart from "../components/atoms/Chart";
import NavBar from "../components/atoms/NavBar";
import "../assets/styles/Skeleton.css";
import "../assets/styles/Pages.css";

function CuentaAdmin() {
  const [mensaje, setMensaje] = useState('');

  const controlServo = async (opcion) => {
    try {
      const response = await fetch('http://192.168.:5000/controlar_servo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ opcion }),
      });

      if (response.ok) {
        const data = await response.json();
        setMensaje(data.mensaje || ''); // Actualizar el estado con el mensaje del servidor
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const videoUrl = "https://play.streamingvideoprovider.com/popplayer.php?it=14wtjarofldw&is_link=1&w=720&h=405&pause=1&title=jasai&skin=3&repeat=&brandNW=1&start_volume=34&bg_gradient1=%23ffffff&bg_gradient2=%23e9e9e9&fullscreen=1&fs_mode=2&skinAlpha=50&colorBase=%23250864&colorIcon=%23ffffff&colorHighlight=%237f54f8&direct=false&no_ctrl=&auto_hide=1&viewers_limit=0&cc_position=bottom&cc_positionOffset=70&cc_multiplier=0.03&cc_textColor=%23ffffff&cc_textOutlineColor=%23ffffff&cc_bkgColor=%23000000&cc_bkgAlpha=0.1&image=https%3A%2F%2Fmember.streamingvideoprovider.com%2Fpanel%2Fserver%2Fclip%3Fa%3DGenerateThumbnail%26clip_id%3D7484036%26size%3Dlarge&mainBg_Color=%23ffffff&aspect_ratio=16%3A9&play_button=1&play_button_style=pulsing&sleek_player=1&stretch=&auto_play=0&auto_play_type=unMute&floating_player=none";

  return (
    <>
      <NavBar />
      <Chart />
      <section className="vh-100" style={{ position: 'relative' }}>
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
                <div className="col-md-12 col-sm-12 mt-5 d-flex justify-content-center align-items-center">
                  <div className="card text-center">
                    <div className="card-header">Control de cámaras</div>
                    <div className="card-body">
                      <div className="container mt-4">
                        <div className="row justify-content-center mt-2">
                          <div className="col-auto">
                            <button
                              className="btn buttoncititito btn-secondary btn-lg"
                              onClick={() => controlServo('izquierda')}
                            >
                              ◄
                            </button>
                          </div>
                          <div className="col-auto">
                            <button
                              className="btn buttoncititito btn-secondary btn-lg"
                              onClick={() => controlServo('derecha')}
                            >
                              ►
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-body-secondary">
                      <div className="table-responsive">{mensaje}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}

export default CuentaAdmin;
