import React from 'react'
import { LineChart } from '@mui/x-charts'
import { list } from 'postcss'

const Chart = ({diagnosis_history}) => {

console.log(diagnosis_history)

// const month = diagnosis_history[0].month


let listMap = [];  // Initialize an empty array to store Maps
let bpSystolic =[]
let bpDiastolic = []
for (let i = 0; i < 6; i++) {
    let monthYear = new Map();

    let month = diagnosis_history[i].month.substring(0,3);
    let year = diagnosis_history[i].year;
    bpSystolic[i] = diagnosis_history[i].blood_pressure.systolic.value
    bpDiastolic[i] = diagnosis_history[i].blood_pressure.diastolic.value
    monthYear.set("month", month);
    monthYear.set("year", year);

    listMap.push(monthYear); // Push the Map into the list
}


const xAxisLabels = listMap.map(map => `${map.get("month")} ${map.get("year")}`);

 

  return (
    <div >
       <LineChart
         xAxis={[{ scaleType: "point", data: xAxisLabels }]} // Use the extracted labels here
         series={[
           {
             data: bpSystolic,
           },
           {
             data: bpDiastolic,
           },
  ]}
  width={500}
  height={300}
/>
       
       

    </div>
  )
}

export default Chart