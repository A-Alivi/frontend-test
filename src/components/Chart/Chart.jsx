import React from 'react'
import { LineChart } from '@mui/x-charts'
import { list } from 'postcss'

const Chart = ({diagnosis_history}) => {

console.log(diagnosis_history)

// const month = diagnosis_history[0].month


let listMap = [];  // Initialize an empty array to store Maps

for (let i = 0; i < 6; i++) {
    let monthYear = new Map();

    let month = diagnosis_history[i].month;
    let year = diagnosis_history[i].year;

    monthYear.set("month", month);
    monthYear.set("year", year);

    listMap.push(monthYear); // Push the Map into the list
}
const xAxisLabels = listMap.map(map => `${map.get("month")} ${map.get("year")}`);

console.log(xAxisLabels); 
  

  return (
    <div >
       <LineChart
         xAxis={[{ scaleType: "point", data: xAxisLabels }]} // Use the extracted labels here
         series={[
           {
             data: [2, 5.5, 2, 8.5, 1.5],
           },
           {
             data: [3, 1.7, 3, 5.9, 4.5],
           },
  ]}
  width={500}
  height={300}
/>
       
       

    </div>
  )
}

export default Chart