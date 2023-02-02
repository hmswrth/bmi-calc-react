import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
 
  
  
const ChartComponent = ({bmiData}) => {
    const [allBmiData, setAllBmiData] = useState([])

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
        },
      };
      
    const labels = bmiData.map(item => item.date.getDate() + '/' + item.date.getMonth()+ 1 + '/' + item.date.getFullYear());

    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'BMI',
            data: bmiData.map(item => item.bmi),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
    


    useEffect(() => {

    },[bmiData])

  return (
    bmiData && <Line options={options} data={data} />
  )
}

export default ChartComponent