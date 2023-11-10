import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../../assets/styles/Skeleton.css';

function Chart() {
  const [loading, setLoading] = useState(true);
  const datos = [8, 9, 12, 9, 8, 5, 14, 11, 10, 11, 5, 10, 8, 10, 7, 10, 10, 9, 10, 4].map((valor) => parseFloat(valor));

  const chartData = {
    series: [25, 15, 10, 20, 30], // Valores estáticos para representar porcentajes
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D', 'Grupo E'], // Etiquetas de ejemplo
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
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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
            <div className="card-footer text-body-secondary">Datos del afore del concierto</div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card text-center">
            <div className="card-header">Datos Obtenidos</div>
            <div className="card-body">
              <h5 className="card-title">Datos de Ingreso:</h5>
              <p>{datos.join(', ')}</p>
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