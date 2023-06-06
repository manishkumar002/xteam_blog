import React, { useState,useEffect } from 'react'
 import { useNavigate } from 'react-router-dom';
 import 'react-toastify/dist/ReactToastify.css';
 import { ToastContainer, toast } from 'react-toastify';
 
import "../styles/AddCategory.css"
export default function UpdateCat() {
  const[category_name,setCategory_name]=useState('')
  const[meta_title,setMeta_title]=useState('')
  const[meta_description,setMeta_description]=useState('')
  const[meta_keywords,setMeta_keywords]=useState('')
  const[userId,setUserId]=useState(null);
   const navigate = useNavigate();

   
   useEffect(()=>{
    let id=JSON.parse(window.localStorage.getItem('st'))
    fetch(`http://localhost:8000/show_category`).then((result)=>{
      result.json().then((res)=>{
        setCategory_name(res[id].category_name)
        setMeta_title(res[id].meta_title)
        setMeta_description(res[id].meta_description)
        setMeta_keywords(res[id].meta_keywords)
        setUserId(res[id]._id)
      })
    })
  },[])

  function update(){
    const data=({category_name,meta_title,meta_description,meta_keywords,userId})
    fetch(`http://localhost:8000/show_category/${userId}`,{
     method:'PUT',
     headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((res)=>{
         navigate('/viewcategory')
        console.log(res)
      })
    })
    toast.success('Update Successfully',{
    position : 'top-center'

    })
 
  }
  return (
    <>
    <div className='container-fluid m py-4'>
    <div className='row'>
      <div className='col-sm-2 '></div>
      <div className='col-sm-4 cat'>
        <center className='py-3'><h3 style={{color:'white'}}>Update   <u style={{color:'red'}}>Category</u></h3></center>
      <input type="text" value={category_name} onChange={(e)=>setCategory_name(e.target.value)} className='form-control w-100 '  placeholder='Enter Your category_name' /><br/>
      <input type="text" value={meta_title} onChange={(e)=>setMeta_title(e.target.value)} className='form-control w-100 '  placeholder='Enter Your category_title' /><br/>
      <input type="text"  value={meta_description} onChange={(e)=>setMeta_description(e.target.value)}  className='form-control w-100 ' placeholder='Enter Your category_description' /><br/>
      <input type="text" value={meta_keywords}  onChange={(e)=>setMeta_keywords(e.target.value)} className='form-control w-100 '  placeholder='Enter Your category_keywords' /><br/>
      <div>
        <button onClick={update} className='form-control btn btn-danger w-100'>Update</button>
        </div>
      </div>
      <div className='col-sm-4'>
        <img src=""/>
      </div>
      <div className='col-sm-2'></div>
    </div>
   
    </div>
    <ToastContainer/>
    </>
  )
}



