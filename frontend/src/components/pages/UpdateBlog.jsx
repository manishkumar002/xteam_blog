import React, { useState,useEffect } from 'react'
 import { useNavigate } from 'react-router-dom';
import "../styles/AddCategory.css"
export default function UpdateBlog() {
  const[post_title,setPost_title]=useState('')
  const[post_content,setPost_content]=useState('')
  const[meta_title,setMeta_title]=useState('')
  const[meta_description,setMeta_description]=useState('')
  const[meta_keywords,setMeta_keywords]=useState('')
  const [updated_date, setUpdated_date] = useState(new Date().toLocaleDateString())
  const[userId,setUserId]=useState(null);
   const navigate = useNavigate();

   
   useEffect(()=>{
    let id=JSON.parse(window.localStorage.getItem('stt'))
    fetch(`http://localhost:8000/show_blog`).then((result)=>{
      result.json().then((res)=>{
        setPost_title(res[id].post_title)
        setPost_content(res[id].post_content)
        setMeta_title(res[id].meta_title)
        setMeta_description(res[id].meta_description)
        setMeta_keywords(res[id].meta_keywords)
        setUserId(res[id]._id)
      })
    })
  },[])

  function updated(){
    const data=({post_title,post_content,meta_title,meta_description,meta_keywords,updated_date})
    fetch(`http://localhost:8000/show_blog/${userId}`,{
     method:'PUT',
     headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((res)=>{
        setPost_title('')
        setPost_content('')
        setMeta_title('')
        setMeta_description('')
        setMeta_keywords('')
         navigate('/viewblog')
        console.log(res)
      })
    })
  }
  return (
    <>
    <div className='container-fluid m py-4'>
    <div className='row'>
      <div className='col-sm-2 '></div>
      <div className='col-sm-4 blo'>
        <center className='py-3'><h3 style={{color:'white'}}>Update   <u style={{color:'red'}}>Blog</u></h3></center>
      <input type="text" value={post_title} onChange={(e)=>setPost_title(e.target.value)} className='form-control w-100 '  placeholder='Enter Your category_name' /><br/>
      <input type="text"  value={post_content} onChange={(e)=>setPost_content(e.target.value)} className='form-control w-100 '  placeholder='Enter Your post_content' /><br/>
      <input type="text"  value={meta_title} onChange={(e)=>setMeta_title(e.target.value)} className='form-control w-100 '  placeholder='Enter Your meta_title' /><br/>
      <input type="text"  value={meta_description} onChange={(e)=>setMeta_description(e.target.value)} className='form-control w-100 '  placeholder='Enter Your meta_description' /><br/>
      <input type="text"  value={meta_keywords} onChange={(e)=>setMeta_keywords(e.target.value)} className='form-control w-100 '  placeholder='Enter Your meta_keywords' /><br/>
      <input type="date" hidden className='form-control' placeholder='Enter Your Email Updated Date' value={updated_date} onChange={(e) => { setUpdated_date(e.target.value) }} /><br />
     
        <button onClick={updated} className='form-control btn btn-danger w-100'>Update</button>
       
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




