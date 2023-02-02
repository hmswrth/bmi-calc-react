import { useEffect, useState } from "react";

export function useBMICalculator({height, weight}) {
    const [bmi, setBmi] = useState(0)

    // function to calculate bmi
    const calculateBmi = () => {
        // weight (kg) / [height (m)]2
        let bmi  = weight / ((height / 100) * (height / 100))
        // update the state
        setBmi(bmi.toFixed(2))
    }

    // everytime height / weight changes, calculate bmi
    useEffect(( ) => {
        if(!(height || weight)) return
        calculateBmi()
    },[height, weight])
  
    return bmi;
  }