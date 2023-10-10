import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

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
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="polarArea"
      />
    </div>
  );
}

export default Chart;
