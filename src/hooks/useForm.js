import React, { useState } from 'react'
import { Validate } from '../Utils/Validate'

const useForm = () => {
    //creation of custom hooks
  const [values,setValues]=useState({
    username:"",
    email:"",
    password:"",
    password2:"",
  })

  const [error,setError]=useState({})

  const handlechange=(e)=>{
    const {name,value}=e.target
    // console.log(name,value);
    setValues((prevvalue)=>{
        return {
            ...prevvalue,
            [name]:value
        }
    })
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
    setError(Validate(values))
  }
  return {handlechange,values,handlesubmit,error};
}

export default useForm