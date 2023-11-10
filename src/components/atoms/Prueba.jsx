import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";

function Prueba() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('http://44.219.12.178:3000/stats')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setApiData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div>
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <div>
            <h2>Datos obtenidos de la API:</h2>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        )}
        <p>hola putos</p>
        <div>
          Metame la pilin aquí
        </div>
      </div>
    </>
  );
}

export default Prueba;