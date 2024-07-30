import React from 'react'
import img1 from "../../img/poert1.png";
import img2 from "../../img/port2.png";
import img3 from "../../img/port3.png";
import "./Portfolio.css"

export default function Portfolio() {
  return (
   <>
    <section id='Portfolio' >
      <div className="container">
    <h1 className='fw-bolder text-center mt-5 position-relative top-50 '>PORTFOLIO COMPONENT</h1>
        <div className="d-flex my-3 justify-content-center">
        <div  className="line me-3"></div>
        <i  className="fa-solid fa-star"></i>
        <div className="line ms-3"></div>
      </div>
      <div className="row g-5">
        <div className="col-md-4 position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal1">
        <img src={img1} alt="" className=' img-fluid img-item rounded-3 img-tar'/>
          <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i className="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal2">
        <img src={img2} alt="" className=' img-fluid img-item rounded-3 img-tar' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i className="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal3">
        <img src={img3} alt="" className=' img-fluid img-item rounded-3 img-tar' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i className="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 mb-4 position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal4">
        <img src={img1} alt="" className=' img-fluid img-item rounded-3 img-tar' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i className="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 mb-4 position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal5">
        <img src={img2} alt="" className=' img-fluid img-item rounded-3 img-tar' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i className="fa-solid fa-plus display-1  fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 mb-4 position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal6">
        <img src={img3} alt="" className=' img-fluid img-item rounded-3 img-tar' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i className="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
      </div>
      </div>


<div className="modal fade mt-5" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mt-5">
    <div className="modal-content mt-5">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      
      <img src={img1} alt="" className=' w-100 rounded-3' />
      </div>
    </div>
  </div>
</div>

<div className="modal fade mt-5" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mt-5">
    <div className="modal-content mt-5">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      
      <img src={img2} alt="" className=' w-100 rounded-3' />
      </div>
    </div>
  </div>
</div>

<div className="modal fade mt-5" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mt-5">
    <div className="modal-content mt-5">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      
      <img src={img3} alt="" className=' w-100 rounded-3' />
      </div>
    </div>
  </div>
</div>

<div className="modal fade mt-5" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mt-5">
    <div className="modal-content mt-5">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      
      <img src={img1} alt="" className=' w-100 rounded-3' />
      </div>
    </div>
  </div>
</div>

<div className="modal fade mt-5" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mt-5">
    <div className="modal-content mt-5">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      
      <img src={img2} alt="" className=' w-100 rounded-3' />
      </div>
    </div>
  </div>
</div>

<div className="modal fade mt-5" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mt-5">
    <div className="modal-content mt-5">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
      
      <img src={img3} alt="" className=' w-100 rounded-3' />
      </div>
    </div>
  </div>
</div>

    </section>
   </>
  )
}
