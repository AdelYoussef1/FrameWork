import React from 'react'
import "./Home.css"
import svgImg from "../../img/avataaars.svg"

export default function Home() {
  return (
    <>
     <section className='vh-100 ' id='Framework'>
        <div className=' container pt-3 d-flex justify-content-center align-items-center'>
        <div>
        <img src={svgImg} className=" w-75 ms-5" alt="" /> 
        <h1 className='fw-bolder text-white text-center mt-8'>START FRAMEWORK</h1>
        <div className="d-flex my-3 text-white justify-content-center">
        <div  className="line me-3"></div>
        <i  className="fa-solid fa-star"></i>
        <div className="line ms-3"></div>
      </div>
      <p className='text-white text-center'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </div>

    </section>
    </>
  )
}
