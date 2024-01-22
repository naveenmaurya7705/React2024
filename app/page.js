"use client"
import React ,{useState} from 'react'


const page = () => {
  
const [mark, setMark] = useState(80)
  return (<>
   <h2>my name is naveen</h2>
   <p>I scored { mark} marks in my final exam.</p>

 
   <button onClick={()=> { setMark(90)}} className='rounded px-5 py-3 mt-9 text-red-500 font-bold'>update</button>

  </>
    
  )
}

export default page