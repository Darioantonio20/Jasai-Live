import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';

function Chart() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [totalPersons, setTotalPersons] = useState(0);
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

  const [randomProbability, setRandomProbability] = useState(null);
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

        const newChartData = {
          ...chartData,
          series: Object.values(data).map((value) => parseFloat(value)),
          options: {
            ...chartData.options,
            labels: Object.keys(data).map((key) => `${key}: ${data[key]}`),
          },
        };
        setChartData(newChartData);
        const newTotalPersons = Object.values(data).reduce((acc, value) => acc + parseFloat(value), 0);
        
        if (newTotalPersons !== totalPersons) {
          setTotalPersons(newTotalPersons);
          const randomProbabilityValue = Math.random() * newTotalPersons;
          setRandomProbability(randomProbabilityValue);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(error.message);
      }
    };

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
              </div>
            </div>
          </div>
        </div>
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