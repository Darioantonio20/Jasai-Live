import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';

function Chart() {
  const [tiempoEnvio, setTiempoEnvio] = useState([]);
  const [totalPersonas, setTotalPersonas] = useState([]);
  const [maxPersons, setMaxPersons] = useState(300);
  const [maxPersonsInterval, setMaxPersonsInterval] = useState('');
  const [intervalWithMaxPersons, setIntervalWithMaxPersons] = useState('');
  const [maxIntervalCount, setMaxIntervalCount] = useState(0);

  useEffect(() => {
    const generateStaticData = () => {
      const tiempoEnvioData = [];
      const totalPersonasData = [];
      const intervalPersonCounts = {};

      let maxPersonsValue = 0;
      let maxPersonsTime = '';

      for (let i = 0; i <= 120; i += 20) {
        tiempoEnvioData.push(`${i}m`);
        const randomValue = Math.floor(Math.random() * ((i <= 20 ? 20 : 300) / 30 + 1)) * 30;

        if (randomValue > maxPersonsValue) {
          maxPersonsValue = randomValue;
          maxPersonsTime = `${i}m`;
        }

        totalPersonasData.push(randomValue > maxPersons ? maxPersons : randomValue);

        if (!intervalPersonCounts[`${i}m`]) {
          intervalPersonCounts[`${i}m`] = 0;
        }

        intervalPersonCounts[`${i}m`] += randomValue;

        if (intervalPersonCounts[`${i}m`] > maxIntervalCount) {
          setMaxIntervalCount(intervalPersonCounts[`${i}m`]);
          setIntervalWithMaxPersons(`${i}m`);
        }
      }

      setMaxPersonsInterval(maxPersonsTime);
      setTiempoEnvio(tiempoEnvioData);
      setTotalPersonas(totalPersonasData);
    };

    generateStaticData();
  }, [maxPersons, maxIntervalCount]);

const calculateProbability = () => {
  const occurrences = totalPersonas.filter(personas => personas === maxIntervalCount).length;
  return ((occurrences / tiempoEnvio.length) * 100).toFixed(2);
};

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
        text: 'Aforo Jasai-Live',
        align: 'center'
      },
      xaxis: {
        categories: tiempoEnvio,
        title: {
          text: 'Tiempo transcurrido(minutos)',
        },
      },
      yaxis: {
        min: 0,
        max: maxPersons,
        tickAmount: 10,
        title: {
          text: 'Personas(aproximado)',
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
              <Alert variant="info">Datos generados estáticamente</Alert>
              <h5 className="card-title">Datos de Ingreso:</h5>
              <table>
                <tbody>
                  <tr>
                    <th>Total de Personas</th>
                    <td>{totalPersonas.join(', ')}</td>
                  </tr>
                  <tr>
                    <th>Intervalo con más personas</th>
                    <td>{maxPersonsInterval}</td>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">No° conciertos</th>
                    <th scope="col">Tiempo con más personas</th>
                    <th scope="col">Probabilidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{maxPersonsInterval}</td>
                    <td>{calculateProbability()}%</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>minutos</td>
                    <td>%</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>minutos</td>
                    <td>%</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Estadistica para el 4° concierto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">%</th>
                  </tr>
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