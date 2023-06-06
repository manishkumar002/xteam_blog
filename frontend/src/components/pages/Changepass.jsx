import React, { useEffect, useState } from 'react'
import "../styles/Reset.css"
export default function Changepass(){
    const [email,setEmail]=useState('')
    const[oldpass,setOldpass]=useState('')
    const[newpass,setNewpass]=useState('')
    const[cpass,setCpass]=useState('')
  
    useEffect(()=>{
        const email1=JSON.parse(window.localStorage.getItem("userid"))
        setEmail(email1)
    },[])
  function Change(){
    let val={email,oldpass,newpass,cpass}
    console.log(val)
   fetch('http://localhost:8000/updatepass',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(val)
   }).then((result)=>{
    result.json().then((res)=>{
      console.log(res)
    })
   })
  }

  return (
    <>
    <div className='container-fluid n py-4'>
    <div className='row'>
      <div className='col-sm-2 '></div>
      <div className='col-sm-4 cat1'>
        <center className='py-3'><h3 style={{color:'white'}}>Change<u style={{color:'red'}}>Password</u></h3></center>
      <input type="text"  className='form-control w-100 ' value={email} placeholder='Enter Your Email' /><br/>
      <input type="password"  className='form-control w-100 ' value={oldpass} onChange={(e)=>setOldpass(e.target.value)} placeholder='Enter Your OldPassword' /><br/>
      <input type="password"  className='form-control w-100 ' value={newpass} onChange={(e)=>setNewpass(e.target.value)} placeholder='Enter Your NewPassword' /><br/>
      <input type="password"  className='form-control w-100 ' value={cpass} onChange={(e)=>setCpass(e.target.value)} placeholder='Enter Your ConfirmPassword' /><br/>
      <div className='row'>
        <div>
        <button onClick={Change} className='form-control btn btn-danger w-100'>UpdatePassword</button>
        </div>
        </div>
      </div>
      <div className='col-sm-4'>
        <img src=""/>
      </div>
      <div className='col-sm-2'></div>
    </div>
    </div>
    </>
  )
}
