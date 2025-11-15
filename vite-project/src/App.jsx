import React from 'react'
import calculateYearlyData from './Services/calculateYearlyData'

export default function App() {

  const data = calculateYearlyData(15000,900,20,10);
  console.log(data);


  return (
    <div>Investment Calculator</div>
  )
}

