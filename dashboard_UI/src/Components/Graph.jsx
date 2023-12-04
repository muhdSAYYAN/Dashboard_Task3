import React, { useEffect, useState } from 'react';
import './Graph.css';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/graph');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const lineChartData = {
    labels: data.map((item) => item.x),
    datasets: [
      {
        label: 'Data Distribution',
        data: data.map((item) => item.y),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 5,
        },
        scaleFontSize: 10,  // Adjust the font size to indirectly affect the height
      }],
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      }],
    },
  };
  
  

  return (
    <div className='graph' style={{ width: '81%' }}>
      <Line data={lineChartData} options={options} />
    </div>
  );
};

export default Graph;
