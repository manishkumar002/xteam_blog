import React, { useEffect } from 'react'
import Slider from './Slider'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(()=>{
    AOS.init({
        duration:8000,
    })
},[])
  return (
    <>
    <div className=' container-fluid'>
        <div className='row'>
            <div className='col-sm-6'>
        <Slider/>
        </div>
        <div className='col-sm-6 py-5'>
          <h1 className='text-danger'>img elements must have an alt prop</h1>
        <b>
        img elements must have an alt prop, either with meaningful text
        img elements must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful text mg 
        </b>
        <b className='text-danger'>
         must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful text
        mg elements must have an alt prop, either with meaningful textmg elements
         must have an alt prop, either with meaningful text
         </b>
         <p>
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
         mg elements must have an alt prop, either with meaningful text
        </p>
        </div>
        </div><br/>
        <div className='row'>
          
        <div className='col-sm-4'>
        <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
         <img src='https://media.istockphoto.com/id/1455755410/photo/portrait-of-early-20s-female-stem-student.jpg?s=2048x2048&w=is&k=20&c=LDny3MP-lg-sUIhs5doGNMtDJ9rZCd0beSQggflrntI='/> 
           </div>
        </div>
        <div className='col-sm-4'>
        <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
         <img src='https://media.istockphoto.com/id/1487517878/photo/shocked-businessman-sitting-at-the-desk-in-the-office-and-holding-a-credit-card-in-his-hand.jpg?s=2048x2048&w=is&k=20&c=wLH9Wehhoyo-l2rJH6-LnUUEOqyPICcCXcsrl2HZMIc='/> 
           </div>  
        </div>
        <div className='col-sm-4'>
        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="400">
         <img src='https://media.istockphoto.com/id/1193091846/photo/we-get-more-done-when-we-work-together.jpg?s=2048x2048&w=is&k=20&c=B5bMk2U10fjThP60Vqxjcmg8Vpup_Nscbc6KD61BMck='/> 
           </div> 
        </div>
       
            
        </div>
    </div>
    </>
  )
}
