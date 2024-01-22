"use client"
import React ,{useState} from 'react'
import Header from "@/components/Header"

const page = () => {

const [user, setUser] = useState("Naveen");

  return (<>

  <Header user={user} />
   <h1>
 This is Home page
   </h1>
  
  </>
    
  )
}

export default page