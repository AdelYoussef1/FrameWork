import React from 'react'

export default function Contact() {
  return (
    <div>
     <section id='Contact'>
    <div className=' container pt-3 d-flex justify-content-center align-items-center'>
    <div className='mb-5'>
    <h1 className='fw-bolder text-center mt-5'>CONATCT SECTION</h1>
        <div className="d-flex my-3 justify-content-center">
        <div  className="line me-3"></div>
        <i  className="fa-solid fa-star"></i>
        <div className="line ms-3"></div>
    </div>


        </div>
        </div>
        <div className=" form-side  w-50 mt-5 m-auto  ">
        <input type="text" id='userName' className="w-100 border-0 mb-5 p-3 rounded-3 shadow-sm" placeholder="UserName" />
        <input type="number" className="w-100 border-0 mb-5 p-3 rounded-3 shadow-sm" placeholder="UserAge" />
        <input type="email" className="w-100 border-0 mb-5 p-3 rounded-3 shadow-sm" placeholder="UserEmail" />
        <input type="password" className="w-100 border-0 mb-4 p-3 rounded-3 shadow-sm" placeholder="UserPassword" />
        <button className='btn btn-success text-white mb-5 text-center'> Send Messege</button>

    </div>
        </section>
    </div>
  )
}
