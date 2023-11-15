import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";

function Prueba() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState({});

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
            <table>
              <tbody>
                {Object.keys(apiData).map((key, index) => (
                  <tr key={index}>
                    <th>{key}</th>
                    <td>{apiData[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Prueba;
