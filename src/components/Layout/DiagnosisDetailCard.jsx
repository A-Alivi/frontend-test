import React from 'react'

const DiagnosisDetailCard = ({imgurl,label,value,level}) => {
  return (
    <>
     <div className="w-60 h-60 p-3 m-4 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center">
      <img
        className="w-20 h-20 rounded-full object-cover"
        src={imgurl}
        alt=""
      />
      <div className="mt-2 text-center">
        <p className="text-base ">{label}</p>
        <p className="text-base font-semibold text-black-500">{value}</p>
        <p className="text-base text-black-400">{level}</p>
      </div>
    </div>
    </>
  )
}

export default DiagnosisDetailCard