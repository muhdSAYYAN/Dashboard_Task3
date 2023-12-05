import React, { useState, useEffect } from 'react';
import './Countgraph.css';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const CountGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/pie-chart');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const baseColor = '#4cff4c';

  const pieChartData = {
    // labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: [
          `${baseColor}80`, 
          `${baseColor}1A`, 
          `${baseColor}33`,
          `${baseColor}4D`,
          `${baseColor}66`, 
           
           
          
          // "green","lightgreen","yellow","red","blue"
        ],
      },
    ],
  };

  return (
    <div className='Countgraph'>
          <div className='Pie'>
          <Pie 
            data={pieChartData}
          />
          </div>
    
        

        <div className="categories-container">
          {data.map((item, index) => (
            <div key={index} className="category-item">
              <div className="category-color" style={{ backgroundColor: pieChartData.datasets[0].backgroundColor[index] }}></div>
              <span className="category-label">{item.label}</span>
            </div>
          ))}
        </div>
     
    </div>
  );
};

export default CountGraph;