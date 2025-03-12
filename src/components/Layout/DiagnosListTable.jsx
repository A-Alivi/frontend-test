import React from 'react'

const DiagnosListTable = ({tableList}) => {

    const list = tableList

  return (
    <>

<div className="mt-13  relative overflow-y-auto h-70 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                              Problem/Diagnosis
                          </th>
                          <th scope="col" className="px-6 py-3  bg-gray-50 dark:bg-gray-800">
                              Description
                          </th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                              Status
                          </th>
                        
                      </tr>
                  </thead>
                  <tbody>

                      {
                        list.map((list,index)=>(
                        <tr className="border-b border-gray-200 dark:border-gray-700" key={index}>
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                              {list.name}
                          </th>
                          <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              {list.description}
                          </td>
                          <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              {list.status}
                          </td>
                      </tr>
                        )
                    )
                }          
                  </tbody>
              </table>
          </div>


    </>
  )
}

export default DiagnosListTable