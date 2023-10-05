import React, { useState, useEffect } from "react";
import NavBar from "../components/atoms/NavBar";
import IconoBlancoBoleto from "../assets/img/formaboletoBlanco.svg";
import imgBoleto from "../assets/img/ImgBoleto2.png";

function Carta({ datos }) {
  return (
    <div className="row d-flex mt-3 mb-3">
        <div className="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-md-end justify-content-sm-center">
        <div className="col-sm-12 col-md-6 col-xl-6 colorBoleto">
            <div>
            <div className="d-flex justify-content-between">
                <img src={IconoBlancoBoleto} alt="Icono Boleto" />
                <div className="text-center m-5">
                <div className="text-light text-center fs-5">
                    {datos.lugar}
                </div>
                <div className="barraBlanca">-</div>
                <div className="text-light text-center fs-1">
                    {datos.descripcion}
                </div>
                <div className="barraBlancaGrande">-</div>
                <div className="d-flex justify-content-around text-light text-center">
                    <div className="fs-2">Lugar:</div>
                    <div className="fs-5 w-50">
                    {datos.direccion}
                    </div>
                </div>
                <div className="barraBlanca">-</div>
                <div className="d-flex justify-content-around text-light text-center">
                    <div className="fs-2">Fecha:</div>
                    <div className="fs-5">
                    {datos.fecha}
                    </div>
                </div>
                <div className="barraBlanca">-</div>
                <div className="d-flex justify-content-around text-light text-center">
                    <div className="fs-2">Hora:</div>
                    <div className="fs-5">
                    {datos.hora}
                    </div>
                </div>
                <div className="barraBlanca">-</div>
                <div className="d-flex justify-content-around text-light text-center">
                    <div className="fs-2 m-3">Localidad:</div>
                    <div>
                    {datos.localidades.map((localidad, index) => (
                        <div className="fs-5" key={index}>
                        {localidad}
                        </div>
                    ))}
                    </div>
                </div>
                <div className="barraBlancaGrande">-</div>
                <button type="submit" className="btnVerMas mb-4 mt-4">
                    Comprar boleto
                </button>
                </div>
                <img
                className="rotaciónBoleto"
                src={IconoBlancoBoleto}
                alt="Icono Boleto"
                />
            </div>
            </div>
        </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-md-start justify-content-sm-center">
            <div className="col-sm-12 col-md-6 col-xl-6 colorBoleto">
                <div>
                    <div className="d-flex justify-content-between">
                        <img src={IconoBlancoBoleto}></img>
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid text-center" src={imgBoleto}/>
                        </div>
                        <img className="rotaciónBoleto" src={IconoBlancoBoleto}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

function VisualizacionBoletos() {
  // Simula la obtención de datos desde una base de datos en el futuro
  const [datosDesdeBaseDeDatos, setDatosDesdeBaseDeDatos] = useState([]);

  useEffect(() => {
    // Simula una llamada a una API o base de datos
    setTimeout(() => {
      const datosObtenidos = [
        {
          id: 1,
          lugar: "Gran Cafe | Tuxtla Gutierrez, chiapas",
          descripcion: "café concert",
          direccion: "Estadio panchon contreras tuxtla gutierrez, chiapas",
          fecha: "Fecha 1",
          hora: "Hora 1",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 2,
          lugar: "Otro lugar | Otra ciudad",
          descripcion: "Otra descripción",
          direccion: "Otra dirección",
          fecha: "Fecha 2",
          hora: "Hora 2",
          localidades: ["Localidad 1", "Localidad 2"],
        },
      ];
      setDatosDesdeBaseDeDatos(datosObtenidos);
    }, 1000); // Simula una demora en la obtención de datos
  }, []);

  return (
    <>
      <NavBar />
      <div className="row d-flex">
        {datosDesdeBaseDeDatos.map((datos, index) => (
          <div key={index}>
            {[...Array(2)].map((_, cartaIndex) => (
              <Carta key={cartaIndex} datos={datos} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default VisualizacionBoletos;
