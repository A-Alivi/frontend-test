import React, { useState } from "react";
import Chart from "../Chart/Chart";
import PatientCard from "./PatientCard";
import useAuthStore from "../StateStore/Store";
import SectionLabels from "./SectionLabels";
import { Line } from "react-chartjs-2";
import PatientDetails from "./PatientDetails";
import DiagnosListTable from "./DiagnosListTable";
import LabResults from "./LabResults";
import DiagnosisDetailCard from "./DiagnosisDetailCard";
import useStore from "../StateStore/Store";
const Layout = () => {

  const {data} = useStore()

  const [currentYear,setCurrentYear] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(3);
  // console.log(currentPatient)
  const handleClick = (index)=>{
      setCurrentIndex(index)
      
      console.log(data[currentIndex].diagnosis_history)
  }
  
 
  return (
    <div className="grid grid-cols-4 gap-3 m-1">
    <div className="overflow-y-auto h-265 col-span-1 shadow-2xl rounded-2xl ">

    <SectionLabels labels={"Patients"}/>
    
    {
      data.map((data,index)=>
      (
        
        <PatientCard 
        key={index}
        imgUrl={data.profile_picture} 
        Name = {data.name}
        gender = {data.gender}
        age={data.age}
        onClick={()=>{handleClick(index)}}
        
        
        />
      
      
      )
      )
    }
     
      
    
   
     
    </div>



    <div className="grid col-span-3 grid-cols-3 ">
        <div className="col-span-2  shadow-2xl rounded-2xl">
          <SectionLabels labels={"Diagnosis History"}/> 
          <div className="flex justify-evenly bg-purple-300 ms-10 me-10 mt-5 mb-5 rounded-2xl ">
            <div className="bg-purple-300">
            <h1 className="font-semibold ms-5 mt-5">Blood Pressure</h1>
            <Chart   diagnosis_history={data[currentIndex].diagnosis_history} onClick={setCurrentYear }/>
            </div>
            <div className="bg-purple-300 flex-col m-1 mt-4">
                <p className="font-semibold">Systolic</p>
                <h1 className="font-bold">{data[currentIndex].diagnosis_history[0].blood_pressure.systolic.value}</h1>
                <p>{data[currentIndex].diagnosis_history[0].blood_pressure.systolic.levels}</p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <p className="font-semibold">Diastolic</p>
                <h1 className="font-bold">{data[currentIndex].diagnosis_history[0].blood_pressure.diastolic.value}</h1>
                <p>{data[currentIndex].diagnosis_history[0].blood_pressure.diastolic.levels}</p>
            </div>
          </div>

          <div className="flex justify-evenly ">
          <DiagnosisDetailCard  imgurl={"src/assets/respiration.png"} label={"Respiratory Rate"} value={data[currentIndex].diagnosis_history[0].respiratory_rate.value} level={data[currentIndex].diagnosis_history[0].respiratory_rate.levels}/>
          <DiagnosisDetailCard  imgurl={"src/assets/temperature.png"} label={"Temperature"} value={data[currentIndex].diagnosis_history[0].temperature.value} level={data[currentIndex].diagnosis_history[0].temperature.levels}/>
          <DiagnosisDetailCard  imgurl={"src/assets/heartrate.png"} label={"Heart Rate"} value={data[currentIndex].diagnosis_history[0].heart_rate.value} level={data[currentIndex].diagnosis_history[0].heart_rate.levels}/>
          
          </div>



        </div>
          <div className="col-span-1 m-2 shadow-2xl rounded-2xl">
            
          <PatientDetails  profile_pic={data[currentIndex].profile_picture} name={data[currentIndex].name} DOB={data[currentIndex].date_of_birth} gender={data[currentIndex].gender} contact={data[currentIndex].phone_number} emergency_contact={data[currentIndex].emergency_contact} insurance_type={data[currentIndex].insurance_type}/>

          </div>   
          <div className="col-span-2  shadow-2xl rounded-2xl">
              <SectionLabels labels={"Diagnostic List"}/>
              <DiagnosListTable tableList={data[currentIndex].diagnostic_list}/>
              </div>


          <div className="col-span-1 m-2 shadow-2xl rounded-2xl">
          <SectionLabels labels={"Lab Results"}/>
           <LabResults lab_result_list={data[currentIndex].lab_results}/>

          </div>
          </div>
          
      </div> 
    
    

  

  
  );
};

export default Layout;
