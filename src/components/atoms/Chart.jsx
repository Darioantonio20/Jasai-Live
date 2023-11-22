import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';

function Chart() {
  const [tiempoEnvio, setTiempoEnvio] = useState([]);
  const [totalPersonas, setTotalPersonas] = useState([]);
  const [maxPersons, setMaxPersons] = useState(100);
  const [maxPersonsInterval, setMaxPersonsInterval] = useState('');
  const [maxIntervalCount, setMaxIntervalCount] = useState(0);
  const [chartDataList, setChartDataList] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [currentIteration, setCurrentIteration] = useState(0);
  const [averageProbability, setAverageProbability] = useState(0);
  const [expectedMinute, setExpectedMinute] = useState(0);

  useEffect(() => {
    const generateStaticData = () => {
      const tiempoEnvioData = [];
      const totalPersonasData = [];
      const intervalPersonCounts = {};

      let maxPersonsValue = 0;
      let maxPersonsTime = '';

      for (let i = 0; i <= 120; i += 20) {
        tiempoEnvioData.push(`${i}m`);
        const randomValue = Math.floor(Math.random() * ((i <= 20 ? 20 : 50) / 30 + 1)) * 30;

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
          setMaxPersonsInterval(`${i}m`);
        }
      }

      const newData = {
        maxPersonsInterval: maxPersonsTime,
        totalPersonas: totalPersonasData,
        probability: calculateProbability(),
        minute: maxPersonsTime.split('m')[0],
      };

      setChartDataList(prevList => [...prevList, newData]);
      setTiempoEnvio(tiempoEnvioData);
      setTotalPersonas(totalPersonasData);
    };

    if (showChart && currentIteration < 3) {
      setTimeout(() => {
        generateStaticData();
        setCurrentIteration(currentIteration + 1);
      }, 5000);
    }

    if (!showChart) {
      setShowChart(true);
    }
  }, [maxPersons, maxIntervalCount, showChart, currentIteration]);

  useEffect(() => {
    if (chartDataList.length === 3) {
      const probabilities = chartDataList.map(data => parseFloat(data.probability));
      const avgProbability = probabilities.reduce((acc, val) => acc + val, 0) / 3;
      setAverageProbability(avgProbability.toFixed(2));

      const expectedMinuteValue = chartDataList.reduce((acc, data) => {
        return acc + data.minute * (parseFloat(data.probability) / 100);
      }, 0);

      setExpectedMinute(Math.round(expectedMinuteValue));
    }
  }, [chartDataList]);

  const calculateProbability = () => {
    const occurrences = totalPersonas.filter(personas => personas === maxIntervalCount).length;
    const totalOccurrences = totalPersonas.length;

    if (occurrences === 0 || totalOccurrences === 0) {
      return 0;
    }

    return ((occurrences / totalOccurrences) * 100).toFixed(2);
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
                  {showChart && <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />}
                </div>
              </div>
            </div>
            <div className="card-footer text-body-secondary">Datos del aforo del concierto</div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card text-center">
            <div className="card-header">Datos Obtenidos</div>
            <div className="card-body">
              <Alert variant="info">Datos generados estáticamente</Alert>
              <h5 className="card-title">Datos de Ingreso:</h5>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">No° conciertos</th>
                    <th scope="col">Tiempo con más personas</th>
                    <th scope="col">Probabilidad</th>
                  </tr>
                </thead>
                <tbody>
                  {chartDataList.map((data, index) => (
                    <tr key={index + 1}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.maxPersonsInterval}</td>
                      <td>{data.probability}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {currentIteration === 3 && (
                <table className="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Estadística para el 4° concierto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Minuto: {expectedMinute}</th>
                      <td>{averageProbability}%</td>
                    </tr>
                  </tbody>
                </table>
              )}
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
