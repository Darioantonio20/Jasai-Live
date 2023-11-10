import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../../assets/styles/Skeleton.css';

function Chart() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://44.219.12.178:3000/stats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setApiData(data);
        setLoading(false);
        // Actualiza chartData con los datos de la API
        const newChartData = {
          ...chartData,
          series: data.map((fila) => parseFloat(fila.porcentaje)),
          options: {
            ...chartData.options,
            labels: data.map((fila) => `Li ${fila.Li} - Ls ${fila.Ls} se encontraron ${fila.fi} personas`),
          },
        };
        setChartData(newChartData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // La dependencia vacía garantiza que se realice la llamada solo una vez al montar el componente

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
              <h5 className="card-title">Datos de Ingreso:</h5>
              <p>{apiData.map((fila) => fila.valor).join(', ')}</p>
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