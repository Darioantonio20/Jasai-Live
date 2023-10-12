import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "../../assets/styles/Chart.css";

function Chart() {
  const [chartData, setChartData] = useState({
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.8,
      },
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
    // Aquí puedes realizar cualquier lógica adicional antes de mostrar el gráfico si es necesario
  }, []);

  return (
    <>
    <div className='row'>
      <div class="col-6 mt-5">
        <div class="card text-center">
          <div class="card-header">
            Grafica de pastel
          </div>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <div className="text-center">
              <div id="chart">
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="polarArea"
                />
              </div>
            </div>
          </div>
          <div class="card-footer text-body-secondary">
          Datos del afore del concierto
          </div>
        </div>
      </div>
      <div class="col-6 mt-5">
        <div class="card text-center">
          <div class="card-header">
            Datos Obtenidos
          </div>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <div className="text-center">
              Datos
            </div>
          </div>
          <div class="card-footer text-body-secondary">
      
          </div>
        </div>
      </div>
    </div>
    

     
    
    </>
  );
}

export default Chart;
