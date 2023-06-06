import React, { useState, } from 'react'
import "../styles/SignUp.css"
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[number,setNumber]=useState('')
  const[password,setPassword]=useState('')
  const navigate = useNavigate();
  const signUp=async()=>{
    //console.log({name,email,number,password})
    let result = await fetch('http://localhost:8000/signup',{
      method:"post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,email,number,password})
    })
     result = await result.json()
    setName('')
    setEmail('')
    setNumber('')
    setPassword('')
    navigate('/login')
    console.log(result)
}
  return (
    <>
   <div className='container-fluid a py-3'>
    <div className='b w-50 ms-5 p-3'>
      <div className='row'>
        <h2><u style={{color:'red'}}>Sign</u>Up..??</h2>
       <div className='col-sm-12'>
        <center>
      <input type="text"  className='form-control w-100 ' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your name' /><br/>
      <input type="email"  className='form-control w-100 ' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email' /><br/>
      <input type="number"   className='form-control w-100 ' value={number} onChange={(e)=>{setNumber(e.target.value)}} placeholder='Enter Your Mobile' /><br/>
      <input type="password"  className='form-control w-100 ' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your password' /><br/>
      <div>
        <button onClick={signUp} className='form-control btn btn-danger w-100'>SignUp</button>
        </div>
        <br/>
        <h5 className='text-light'>I have an already Account.?  <a href='/login'>Login</a></h5>
        </center>
      
      </div>
       
      </div>
    </div>
   
   </div>
    </>
  )
}

