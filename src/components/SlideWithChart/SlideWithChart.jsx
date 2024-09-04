import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import CommonSlideLayout from '../CommonSlideLayout/CommonSlideLayout';

Chart.register(...registerables); // Register the necessary components

const SlideWithChart = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current && chartData) {
      // Check if chartData has the expected structure
      if (chartData.labels && chartData.datasets) {
        chartInstanceRef.current = new Chart(chartRef.current, {
          type: 'line', // Change to desired chart type
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    if (context.parsed.y !== null) {
                      label += context.parsed.y;
                    }
                    return label;
                  },
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } else {
        console.error('Invalid chart data:', chartData);
      }
    }

    return () => {
      // Clean up the chart instance when the component unmounts
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <CommonSlideLayout title="Chart Slide">
      <div style={{ position: 'relative', height: '60vh' }}>
        <canvas ref={chartRef} />
      </div>
    </CommonSlideLayout>
  );
};

// Default props to prevent undefined errors
SlideWithChart.defaultProps = {
  chartData: {
    labels: [],
    datasets: [],
  },
};

export default SlideWithChart;
