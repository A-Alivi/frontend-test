import React from 'react'

const UserDetailCard = ({label,value}) => {
  return (
    <div>
        <div className="grid-cols-1 m-3" >
            <h1 >{label}</h1>
            <p className='font-bold'>{value}</p>
               
       </div>
      
    </div>
  )
}

export default UserDetailCard