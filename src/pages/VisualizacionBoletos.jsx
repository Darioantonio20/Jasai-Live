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
          lugar: "Gran Cafe | Tuxtla Gutierrez, Chiapas",
          descripcion: "Café Concert",
          direccion: "Estadio Panchon Contreras, Tuxtla Gutierrez, Chiapas",
          fecha: "22/11/2023",
          hora: "3:00 Pm",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 2,
          lugar: "Kings of leons | United State",
          descripcion: "Kings of leons",
          direccion: "169 Main Street, Springfield, IL 62701",
          fecha: "25/11/2023",
          hora: "8:00 Pm",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 3,
          lugar: "Molotov Fest | Avenida Central 456, Ciudad del Carmen",
          descripcion: "Molotov Fest",
          direccion: "Teatro del Este, CDMX",
          fecha: "29/11/2023",
          hora: "10:00 Pm",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 4,
          lugar: "Concert Fest | Ciudad Capital",
          descripcion: "Concert Fest",
          direccion: "Teatro Municipal de la Ciudad, Calle Principal 123,",
          fecha: "30/11/2023",
          hora: "5:00 Pm",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 5,
          lugar: "Conciertito de Rock | Tuxtla Gutiérrez, Chiapas",
          descripcion: "Conciertito de Rock",
          direccion: "Estadio Panchón Contreras",
          fecha: "04/12/2023",
          hora: "7:30 Pm",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 6,
          lugar: "Rock Bones | CDMX",
          descripcion: "Rock Bones",
          direccion: "Angel de la independencia",
          fecha: "06/12/2023",
          hora: "11:00 Pm",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 7,
          lugar: "Concierto de Jazz | Ciudad Creativa",
          descripcion: "Concierto de Jazz",
          direccion: "Teatro de la Avenida, Avenida del Arte 890, Ciudad Creativa",
          fecha: "08/12/2023",
          hora: "9:30 Pm",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 8,
          lugar: "Concierto de Blues | Ciudad Luminosa",
          descripcion: "Concierto de Blues",
          direccion: "Teatro de la Luz, Calle Principal 789, Ciudad Luminosa",
          fecha: "10/12/2023",
          hora: "10:30 Pm",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 9,
          lugar: "Concierto de Reggae | Ciudad Nocturna",
          descripcion: "Concierto de Reggae",
          direccion: "Teatro de la Noche, Avenida Oscura 234, Ciudad Nocturna",
          fecha: "12/12/2023",
          hora: "6:00 Pm",
          localidades: ["Vip", "Preferente", "General"],
        },
        {
          id: 10,
          lugar: "Los Samuelitos | Ciudad Bocado",
          descripcion: "Los Samuelitos",
          direccion: "Up chiapas, UD69",
          fecha: "15/12/2023",
          hora: "4:30 Pm",
          localidades: ["Vip", "Preferente", "General"],
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
          <Carta key={index} datos={datos} />
        ))}
      </div>
    </>
  );
}

export default VisualizacionBoletos;
