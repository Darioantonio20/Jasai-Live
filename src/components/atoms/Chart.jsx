import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';

function Chart() {
  const [tiempoEnvio, setTiempoEnvio] = useState([]);
  const [totalPersonas, setTotalPersonas] = useState([]);
  const [maxPersons, setMaxPersons] = useState(3047);
  const [maxPersonsInterval, setMaxPersonsInterval] = useState('');
  const [intervalWithMaxPersons, setIntervalWithMaxPersons] = useState('');

  useEffect(() => {
    const generateStaticData = () => {
      const tiempoEnvioData = [];
      const totalPersonasData = [];
      const intervalPersonCounts = {};

      let maxPersonsValue = 0;
      let maxPersonsTime = '';
      let maxIntervalCount = 0;
      let intervalWithMaxCount = '';

      for (let i = 0; i <= 120; i += 10) {
        tiempoEnvioData.push(`${i}m`);
        const randomValue = Math.floor(Math.random() * (500 - 50 + 1)) + 50;

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
          maxIntervalCount = intervalPersonCounts[`${i}m`];
          intervalWithMaxCount = `${i}m`;
        }
      }

      setMaxPersonsInterval(maxPersonsTime);
      setIntervalWithMaxPersons(intervalWithMaxCount);
      setTiempoEnvio(tiempoEnvioData);
      setTotalPersonas(totalPersonasData);
    };

    generateStaticData();
  }, [maxPersons]);

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
        categories: tiempoEnvio,
        title: {
          text: 'Tiempo transcurrido',
        },
      },
      yaxis: {
        min: 0,
        max: maxPersons,
        tickAmount: 10,
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
              <Alert variant="info">Datos generados estáticamente</Alert>
              <h5 className="card-title">Datos de Ingreso:</h5>
              <table>
                <tbody>
                  <tr>
                    <th>Total de Personas</th>
                    <td>{totalPersonas.join(', ')}</td>
                  </tr><br></br>
                  <tr>
                    <th>Intervalo con más personas</th>
                    <td>{maxPersonsInterval}</td>
                  </tr><br></br>
                </tbody>
              </table>
              <h2>Total de personas: 300</h2>
              <h2>Tiempo transcurrido: 2 horas</h2>
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
