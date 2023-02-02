import React, { useEffect, useState } from "react";
import { useBMICalculator } from "../customHooks/useBMICalculator";
import ChartComponent from "./ChartComponent";
import "./Home.css";

const HomeComponent = () => {
  const [weight, setWeight] = useState(68);
  const [height, setHeight] = useState(165);
  const [calculatedBMI, setCalculatedBMI] = useState(0)
  const [historicBmiData, setHistoricBmiData] = useState([])

  const bmi = useBMICalculator({height , weight})

  // onChange handler for weight and height
  const handleChange = (e) => {
    if (e.target.name === "weight") {
      setWeight(e.target.value);
    } else if (e.target.name === "height") {
      setHeight(e.target.value);
    }
  };

//  call the custom hook function to calculate the BMI
  const handleCalculateBMI = () => {
    // update the calculated bmi
    setCalculatedBMI(bmi)
    // update the hsitoricBmiData
    setHistoricBmiData( prev  => (
        [...prev, {
            bmi : bmi,
            date : new Date()
        }]
    ))
  }

  return (
    <div className="main-container">
      <h1>BMI Tracker</h1>
      <div className="input-container">
        <input
          name="weight"
          type="number"
          placeholder="Weight (in kg)"
          value={weight}
          onChange={handleChange}
        />
        <input
          name="height"
          type="number"
          placeholder="Height (in cm)"
          value={height}
          onChange={handleChange}
        />
      </div>
      <button className="calculate-bmi-btn" onClick={handleCalculateBMI}>Calculate BMI</button>

      <h1 style={{color:'#fff'}}>{calculatedBMI}</h1>
      <div className="chart-container">
       <ChartComponent bmiData = {historicBmiData}/>
      </div>
    </div>
  );
};

export default HomeComponent;
