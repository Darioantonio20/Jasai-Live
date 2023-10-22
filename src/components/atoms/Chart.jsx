import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "../../assets/styles/Skeleton.css";

function Chart() {
  const [loading, setLoading] = useState(true); // Estado para controlar la visibilidad del componente de carga

  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
    // Simulación de carga durante 3 segundos antes de mostrar la gráfica
    setTimeout(() => {
      setLoading(false); // Ocultar el componente de carga
    }, 1500);
  }, []);

  return (
    <>
      <div className='row'>
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card text-center">
            <div className="card-header">
              Gráfica de pastel
            </div>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <div className="text-center">
                {loading ? ( // Mostrar componente de carga mientras se está cargando
                  <div className="cardcititita d-flex justify-content-center align-items-center">
                    <div className="cardcititita__skeleton cardcititita__title"></div>
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
            <div className="card-footer text-body-secondary">
              Datos del afore del concierto
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card text-center">
            <div className="card-header">
              Datos Obtenidos
            </div>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <div className="text-center">
                Datos
              </div>
            </div>
            <div className="card-footer text-body-secondary">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
