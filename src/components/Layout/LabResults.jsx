import React from 'react'

const LabResults = ({lab_result_list}) => {
  return (
    <>
    <div className="relative overflow-y-auto h-70 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                 
                  <tbody>
                      

                        
                      {
                        lab_result_list.map((item)=>(
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                              {item}
                          </th>
                          <td className="px-6 py-4">
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                          </svg>
                          </td>  
                      </tr>
                        ))
                      }
                         

                     
                      
                        
                      
                  </tbody>
              </table>
          </div>

    </>
  )
}

export default LabResults