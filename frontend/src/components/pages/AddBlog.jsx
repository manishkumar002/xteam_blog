import React, { useState } from 'react'
import "../styles/Addblog.css"
 import { useNavigate } from 'react-router-dom';
export default function AddBlog() {
  const[post_title,setPost_title]=useState('')
  const[post_content,setPost_content]=useState('')
  const[meta_title,setMeta_title]=useState('')
  const[meta_description,setMeta_description]=useState('')
  const[meta_keywords,setMeta_keywords]=useState('')
  const [created_date, setCreated_date] = useState(new Date().toLocaleDateString())
  const [updated_date, setUpdated_date] = useState(new Date().toLocaleDateString())
   const navigate = useNavigate()
  function addblog(){
    fetch('http://localhost:8000/add_blog',{
     method:'POST',
     headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify({post_title,post_content,meta_title,meta_description,meta_keywords, created_date,updated_date})
    }).then((result)=>{
      result.json().then((res)=>{
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
        <center className='py-3'><h3 style={{color:'white'}}>Add<u style={{color:'red'}}>Blog</u></h3></center>
      <input type="text" value={post_title} onChange={(e)=>setPost_title(e.target.value)} className='form-control w-100 '  placeholder='Enter Your post_title' /><br/>
      <input type="text"  value={post_content} onChange={(e)=>setPost_content(e.target.value)} className='form-control w-100 '  placeholder='Enter Your post_content' /><br/>
      <input type="text"  value={meta_title} onChange={(e)=>setMeta_title(e.target.value)} className='form-control w-100 '  placeholder='Enter Your meta_title' /><br/>
      <input type="text"  value={meta_description} onChange={(e)=>setMeta_description(e.target.value)} className='form-control w-100 '  placeholder='Enter Your meta_description' /><br/>
      <input type="text"  value={meta_keywords} onChange={(e)=>setMeta_keywords(e.target.value)} className='form-control w-100 '  placeholder='Enter Your meta_keywords' /><br/>
      <input type="date" hidden className='form-control' placeholder='Enter Your Created Date' value={created_date} onChange={(e) => { setCreated_date(e.target.value) }} /><br />
      <input type="date" hidden className='form-control' placeholder='Enter Your Email Updated Date' value={updated_date} onChange={(e) => { setUpdated_date(e.target.value) }} /><br />
      <div>
        <button  onClick={addblog} className='form-control btn btn-danger w-100 '>AddBlogs</button>
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
