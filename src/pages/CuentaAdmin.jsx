import React, { useState } from 'react';
import Chart from "../components/atoms/Chart";
import NavBar from "../components/atoms/NavBar";
import "../assets/styles/Pages.css";

function CuentaAdmin() {
  const [mensaje, setMensaje] = useState('');

  const controlServo = async (opcion) => {
    try {
      const response = await fetch('http://192.168.1.106:5000/controlar_servo', {
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

  return (
    <>
      <NavBar />
      <Chart />
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
    </>
  );
}

export default CuentaAdmin;
