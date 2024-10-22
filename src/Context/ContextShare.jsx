import React, {  createContext, useState } from 'react'
export const addBlogResponceContext = createContext()

function ContextShare({Children}) {

    const [addBlogResponce,setAddBlodResponce] = useState({})
  return (
   <>

   <addBlogResponceContext.Provider value={{addBlogResponce,setAddBlodResponce}}>
    {Children}
   </addBlogResponceContext.Provider>


   
   </>
  )
}

export default ContextShare
