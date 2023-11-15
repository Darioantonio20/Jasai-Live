import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Alert } from 'react-bootstrap';
import NavBar from "../atoms/NavBar";

function Chart() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
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

  // Función para generar datos de ejemplo
  const generateChartData = (totalPersonas) => {
    const data = {};
    for (let i = 1; i <= totalPersonas; i++) {
      const category = `Categoría ${i % 5 + 1}`;
      if (!data[category]) {
        data[category] = 0;
      }
      data[category]++;
    }
    return data;
  };

  useEffect(() => {
    const totalPersonas = 150; // Cambia esto al número deseado de personas

    const generatedData = generateChartData(totalPersonas);

    setApiData(generatedData);
    setLoading(false);
    setError(null);

    // Actualizar chartData con datos generados
    const newChartData = {
      ...chartData,
      series: Object.values(generatedData).map((value) => parseFloat(value)),
      options: {
        ...chartData.options,
        labels: Object.keys(generatedData).map((key) => `${key}: ${generatedData[key]}`),
      },
    };
    setChartData(newChartData);
  }, [chartData]);

  return (
    <>
      <NavBar />
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
      </div>
    </>
  );
}

export default Chart;
