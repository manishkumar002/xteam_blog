import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import {Table} from "react-bootstrap"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function VeiwCategory() {
  const[data,setData]=useState([]);
  function demo(){
    fetch('http://localhost:8000/show_category').then((result)=>{
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
  window.localStorage.setItem('st',JSON.stringify(id))
    }


  return (
    <div style={{background:'#302b63'}}>
   <Table>
    <tr style={{color:'red'}}>
      <th>Id</th>
      <th>Category_Name</th>
      <th>Meta_Title</th>
      <th>Meta_Description</th>
      <th>meta_keywords</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    {
      data.map((item,index)=>
      <tr style={{color:'white'}} className="table table-dark">
        <td>{index+1}</td>
        <td>{item.category_name}</td>
        <td>{item.meta_title}</td>
        <td>{item.meta_description}</td>
        <td>{item.meta_keywords}</td>
        <td><Link to="/cat"><button className='btn btn-info' onClick={()=>edit(index)}>edit</button></Link></td>
        <td><button className='btn btn-info' onClick={()=>del(item._id)}>Delete</button></td>
      </tr>
      )
    }
   </Table>

<ToastContainer/>
    </div>
  )
}
