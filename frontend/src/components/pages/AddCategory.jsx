import React, { useState } from 'react'
 import { useNavigate } from 'react-router-dom';
import "../styles/AddCategory.css"
export default function AddCategory() {
  const[category_name,setCategory_name]=useState('')
  const[meta_title,setMeta_title]=useState('')
  const[meta_description,setMeta_description]=useState('')
  const[meta_keywords,setMeta_keywords]=useState('')
   const navigate = useNavigate();
  function addcategory(){
    fetch('http://localhost:8000/add_category',{
     method:'POST',
     headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify({category_name,meta_title,meta_description,meta_keywords})
    }).then((result)=>{
      result.json().then((res)=>{
        setCategory_name('')
        setMeta_title('')
        setMeta_description('')
        setMeta_keywords('')
         navigate('/viewcategory')
        console.log(res)
      })
    })
  }
  return (
    <>
    <div className='container-fluid m py-4'>
    <div className='row'>
      <div className='col-sm-2 '></div>
      <div className='col-sm-4 cat'>
        <center className='py-3'><h3 style={{color:'white'}}>Add<u style={{color:'red'}}>Category</u></h3></center>
      <input type="text" value={category_name} onChange={(e)=>setCategory_name(e.target.value)} className='form-control w-100 '  placeholder='Enter Your category_name' /><br/>
      <input type="text" value={meta_title} onChange={(e)=>setMeta_title(e.target.value)} className='form-control w-100 '  placeholder='Enter Your category_title' /><br/>
      <input type="text"  value={meta_description} onChange={(e)=>setMeta_description(e.target.value)}  className='form-control w-100 ' placeholder='Enter Your category_description' /><br/>
      <input type="text" value={meta_keywords}  onChange={(e)=>setMeta_keywords(e.target.value)} className='form-control w-100 '  placeholder='Enter Your category_keywords' /><br/>
      <div>
        <button onClick={addcategory} className='form-control btn btn-danger w-100'>AddCategory</button>
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


