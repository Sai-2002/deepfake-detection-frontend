'use client'

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
    // Ref to store the canvas element
    const chartRef = useRef();
  
    useEffect(() => {
      // Create a new Chart instance
      const myChart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels:[2020,2021,2022,2023],
          datasets: [{
            label: 'No of Deep fake videos',
            data: [85000, 146780,345912,500000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
  
      // Cleanup function to destroy the chart instance
      return () => {
        myChart.destroy();
      };
    }, []);
  
    return (
        <div className="flex justify-center items-center h-full">
      {/* <div className="w-full max-w-md"> */}
        {/* Canvas element to render the chart */}
        <canvas ref={chartRef}></canvas>
      </div>
    //   </div>
    );
  };
  
export default Graph;
  