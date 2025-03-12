import React from 'react'

const PatientCard = ({imgUrl,Name,gender,age,onClick}) => {

  

  return (
    <div>
        <div className=" m-2 items-center shadow hover:bg-green-300 rounded-2xl " onClick={onClick} >
         <div className="inline-flex m-2">
         <img src={imgUrl} alt=""  className="me-5 rounded-4xl"/>
          <div className="grid-cols-1 mt-1">
                <h1 className="font-bold">{Name}</h1>
          
                <div className="flex">
                  <p className="me-4">{gender}</p>
                  <p>{age}</p>
                </div>
            </div>
           
          </div> 
      </div>
    </div>
  )
}

export default PatientCard