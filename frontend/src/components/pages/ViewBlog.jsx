import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function VeiwBlog() {
  const[data,setData]=useState([]);
  function demo(){
    fetch('http://localhost:8000/show_blog').then((result)=>{
      result.json().then((res)=>{
        setData(res)
      })
    })
  }
 useEffect(()=>{
  demo()
 },[])


function del(id) {
  if (window.confirm('are you sure want to delete?')) {
      fetch(`http://localhost:8000/show_category/${id}`, {
          method: "DELETE"
      }).then((result) => {
          result.json((res) => {
              console.log(res)
          })
          toast.success('Delete Record SuccessFully', {
              position: "top-center"
          })
          demo();
      })
  }
  else {
      toast.error('Record Not Delete', {
          position: 'top-center'
      })
  }
}

 function edit(id){
  window.localStorage.setItem('stt',JSON.stringify(id))
    }


  return (
    <div style={{background:'#302b63'}}>
   <table className='table table hover'>
    <tr style={{color:'red'}}>
      <th>Id</th>
      <th>Post_Title</th>
      <th>Post_Content</th>
      <th>Meta_Title</th>
      <th>Meta_Description</th>
      <th>Meta_keywords</th>
      <th>Create_Date</th>
      <th>Update_Date</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    {
      data.map((item,index)=>
      <tr style={{color:'white'}} className="table table-dark">
        <td>{index+1}</td>
        <td>{item.post_title}</td>
        <td>{item.post_content}</td>
        <td>{item.meta_title}</td>
        <td>{item.meta_description}</td>
        <td>{item.meta_keywords}</td>
        <td>{item.created_date}</td>
        <td>{item.updated_date}</td>
        <td><Link to="/blog"><button className='btn btn-info' onClick={()=>edit(index)}>edit</button></Link></td>
        <td><button className='btn btn-info' onClick={()=>del(item._id)}>Delete</button></td>
      </tr>
      )
    }
   </table>

   <ToastContainer/>
    </div>
  )
}