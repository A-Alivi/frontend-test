import React from 'react'
import UserDetailCard from './UserDetailCard'

const PatientDetails = ({profile_pic,name,DOB, gender,contact,emergency_contact,insurance_type}) => {
  return (
    <>
    
    <div className="grid-cols-1 m-2 rounded-2xl justify-content-center">
       <div className="grid justify-center items-center">
       <img src={profile_pic} alt="" className="m-2" style={{borderRadius:"50%", height:"150px", width:"150px"}}  />
       <h1 className="font-extrabold text-2xl">{name}</h1>
       </div>

       
       <div className="m-3 items-center shadow  rounded-2xl">
         <div className="inline-flex">
                <svg className="w-9 h-9 mt-4 ms-3 rounded-2xl text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                </svg>
                <UserDetailCard  label = {"Date Of Birth"} value={DOB}/>
          </div>
        </div>
      
        <div className="m-3 items-center shadow  rounded-2xl">
         <div className="inline-flex">
         <svg className="w-9 h-9 mt-4 ms-3 rounded-2xl text-gray-800 dark:text-white" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9z"/>
         </svg>

                <UserDetailCard  label={"Gender"} value={gender}/>
          </div>
        </div>


        <div className="m-3 items-center shadow  rounded-2xl">
         <div className="inline-flex">
                <svg className="w-9 h-9 mt-4 ms-3 rounded-2xl text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17.0896 13.371 1.1431 1.1439c.1745.1461.3148.3287.4111.5349.0962.2063.1461.4312.1461.6588 0 .2276-.0499.4525-.1461.6587-.0963.2063-.4729.6251-.6473.7712-3.1173 3.1211-6.7739 1.706-9.90477-1.4254-3.13087-3.1313-4.54323-6.7896-1.41066-9.90139.62706-.61925 1.71351-1.14182 2.61843-.23626l1.1911 1.19193c1.1911 1.19194.3562 1.93533-.4926 2.80371-.92477.92481-.65643 1.72741 0 2.38391l1.8713 1.8725c.3159.3161.7443.4936 1.191.4936.4468 0 .8752-.1775 1.1911-.4936.8624-.8261 1.6952-1.6004 2.8382-.4565Zm-2.2152-4.39103 2.1348-2.13485m0 0 2.1597-1.90738m-2.1597 1.90738 2.1597 2.15076m-2.1597-2.15076-2.1348-1.90738"/>
                </svg>
                <UserDetailCard  label={"Contact Info"} value={contact}/>
          </div>
        </div>




        <div className="m-3 items-center shadow  rounded-2xl">
         <div className="inline-flex">
                <svg className="w-9 h-9 mt-4 ms-3 rounded-2xl text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17.0896 13.371 1.1431 1.1439c.1745.1461.3148.3287.4111.5349.0962.2063.1461.4312.1461.6588 0 .2276-.0499.4525-.1461.6587-.0963.2063-.4729.6251-.6473.7712-3.1173 3.1211-6.7739 1.706-9.90477-1.4254-3.13087-3.1313-4.54323-6.7896-1.41066-9.90139.62706-.61925 1.71351-1.14182 2.61843-.23626l1.1911 1.19193c1.1911 1.19194.3562 1.93533-.4926 2.80371-.92477.92481-.65643 1.72741 0 2.38391l1.8713 1.8725c.3159.3161.7443.4936 1.191.4936.4468 0 .8752-.1775 1.1911-.4936.8624-.8261 1.6952-1.6004 2.8382-.4565Zm-2.2152-4.39103 2.1348-2.13485m0 0 2.1597-1.90738m-2.1597 1.90738 2.1597 2.15076m-2.1597-2.15076-2.1348-1.90738"/>
                </svg>

                <UserDetailCard  label={"Emergency Contacts"} value={emergency_contact}/>
          </div>
        </div>

        <div className="m-3 items-center shadow  rounded-2xl">
         <div className="inline-flex">
               
                <svg className="w-9 h-9 mt-4 ms-3 rounded-2xl text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 6.827 6.827">
                  <path className="fil0" d="M3.362 5.96C2.459 5.456 1.92 4.79 1.586 4c-.331-.78-.46-1.677-.544-2.653l-.014-.173.16.065c.809.326 1.163.143 1.775-.172.12-.062.25-.13.404-.203l.046-.022.046.022c.154.074.284.14.405.203.611.315.966.498 1.774.172l.161-.065-.015.173C5.7 2.323 5.572 3.219 5.24 4c-.334.788-.873 1.455-1.775 1.959l-.052.028-.051-.028zm-1.58-2.042c.31.732.807 1.352 1.631 1.826.825-.474 1.321-1.094 1.631-1.826.301-.71.43-1.528.513-2.42-.787.276-1.165.08-1.79-.242-.111-.057-.23-.118-.354-.178-.123.06-.242.121-.352.178-.626.323-1.004.518-1.79.241.082.893.21 1.712.511 2.421z"/>
                  <path className="fil0" d="M3.345 4.693V4.44a.935.935 0 0 1-.31-.085.543.543 0 0 1-.206-.199.71.71 0 0 1-.101-.335l.256-.048c.02.137.054.237.104.301.072.09.157.14.257.151v-.81a1.063 1.063 0 0 1-.32-.12.471.471 0 0 1-.188-.189.557.557 0 0 1-.065-.272c0-.181.064-.328.192-.44.086-.075.213-.121.381-.138v-.122h.15v.122a.627.627 0 0 1 .352.13.576.576 0 0 1 .2.38l-.262.04a.432.432 0 0 0-.094-.23.345.345 0 0 0-.196-.106v.734c.128.032.213.057.254.075.08.035.144.077.194.127.05.05.089.11.115.178.027.069.04.143.04.223a.614.614 0 0 1-.168.44.616.616 0 0 1-.435.19v.257h-.15zm0-2.226a.376.376 0 0 0-.234.118.331.331 0 0 0-.085.228c0 .086.024.159.073.217.049.059.13.106.246.14v-.703zm.15 1.757a.377.377 0 0 0 .245-.128.398.398 0 0 0 .097-.273.343.343 0 0 0-.068-.223c-.046-.055-.137-.106-.274-.15v.774z"/>
                </svg>
                

                <UserDetailCard  label={"Insurance"} value={insurance_type}/>
          </div>
          
        </div>

        <div className="grid justify-center items-center ">
        <button type="button" className="text-black bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Show All Information</button>

       </div>

      </div>

    </>
  )
}

export default PatientDetails