import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Alert } from 'react-bootstrap';

function Chart() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [totalPersons, setTotalPersons] = useState(0); // Nuevo estado para el total de personas
  const [error, setError] = useState(null);

  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  // Estado para almacenar el dato probabilístico
  const [randomProbability, setRandomProbability] = useState(null);

  useEffect(() => {
    // Función para obtener datos de la API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jasailive.xyz:3000/stats');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setApiData(data);
        setLoading(false);
        setError(null);

        // Actualizar chartData con datos obtenidos
        const newChartData = {
          ...chartData,
          series: Object.values(data).map((value) => parseFloat(value)),
          options: {
            ...chartData.options,
            labels: Object.keys(data).map((key) => `${key}: ${data[key]}`),
          },
        };
        setChartData(newChartData);

        // Calcular el total de personas
        const newTotalPersons = Object.values(data).reduce((acc, value) => acc + parseFloat(value), 0);

        // Actualizar el estado solo si el total de personas cambia
        if (newTotalPersons !== totalPersons) {
          setTotalPersons(newTotalPersons);

          // Generar un dato probabilístico basado en el total de personas
          const randomProbabilityValue = Math.random() * newTotalPersons;
          setRandomProbability(randomProbabilityValue);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(error.message);
      }
    };

    // Llamar a la función para obtener datos al montar el componente
    fetchData();
  }, [chartData, totalPersons]);

  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card text-center">
            <div className="card-header">Gráfica de pastel</div>
            <div className="card-body">
              <div className="text-center">
                {loading ? (
                  <div className="cardcititita d-flex justify-content-center align-items-center">
                    <div className="cardcititita_skeleton cardcititita_title"></div>
                  </div>
                ) : (
                  <div id="chart">
                    <ReactApexChart
                      options={chartData.options}
                      series={chartData.series}
                      type="pie"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="card-footer text-body-secondary">Datos del afore del concierto</div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card text-center">
            <div className="card-header">Datos Obtenidos</div>
            <div className="card-body">
              {error && <Alert variant="danger">{error}</Alert>}
              <h5 className="card-title">Datos de Ingreso:</h5>
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
              <div className="card-footer text-body-secondary">
                <h5 className="card-title">Resultados Estadísticos:</h5>
                {/* Eliminadas todas las funciones y datos de estadísticas */}
              </div>
            </div>
            <div className="card-footer text-body-secondary">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Li</th>
                      <th>Ls</th>
                      <th>x</th>
                      <th>fi</th>
                      <th>fr</th>
                      <th>Porcentaje (%)</th>
                      <th>F</th>
                      <th>fx</th>
                      <th>fx²</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Eliminadas las filas de la tabla de frecuencias */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Nueva tarjeta para mostrar el dato probabilístico */}
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card text-center">
            <div className="card-header">Dato Probabilístico</div>
            <div className="card-body">
              {randomProbability !== null && (
                <p>Valor Probabilístico: {randomProbability}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;