import React, { useRef } from 'react';
var Chart = require('chart.js');

const LineChart = (props) => {
  const chartRef = useRef(null);
  const chart = new Chart()



  return (
    <canvas style= {{display: "block", height: "165px", width: "330px"}} ref={chartRef} />
  )
}

