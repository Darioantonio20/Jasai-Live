import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';

function Chart() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [totalPersons, setTotalPersons] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
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

        const newTotalPersons = Object.values(data).reduce((acc, value) => acc + parseFloat(value), 0);

        if (newTotalPersons !== totalPersons) {
          setTotalPersons(newTotalPersons);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [totalPersons]);

  // Preparación de datos para el gráfico de líneas
  const tiempoEnvio = Object.keys(apiData); // Valores de tiempo_envio para el eje X
  const totalPersonas = Object.values(apiData).map((value) => parseFloat(value)); // Valores de total_personas para el eje Y

  const chartData = {
    series: [{
      name: 'Total de personas',
      data: totalPersonas,
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Total de Personas por Tiempo de Envío',
        align: 'left'
      },
      xaxis: {
        categories: tiempoEnvio, // Valores de tiempo_envio para el eje X
        title: {
          text: 'Tiempo de Envío',
        },
      },
      yaxis: {
        title: {
          text: 'Total de Personas',
        },
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
    },
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card text-center">
            <div className="card-header">Gráfico de líneas</div>
            <div className="card-body">
              <div className="text-center">
                <div id="chart">
                  <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
                </div>
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
                <h5 className="card-title">Jasai-Live</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
