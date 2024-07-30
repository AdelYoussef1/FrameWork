import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
   <>
   <footer id='Footer'>
        <section className=' pt-5 container location-freelancer'>
            <div className="row py-5 text-black">
                <div className="col-md-4 text-center mb-3">
                    <h3 className='fw-semibolder'>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 text-center mb-5">
                    <h3 className='fw-semibolder'>AROUND THE WEB</h3>
                    <div className='social-icons d-flex justify-content-center'>
                        <div className="icon-item rounded-circle border border-white border-1">
                        <i className="fa-brands fa-facebook-f text-white m-2 "></i>
                        </div>
                        <div className="icon-item mx-3 rounded-circle border border-white border-1">
                        <i className="fa-brands fa-twitter text-white m-2 "></i>
                        </div>
                        <div className="icon-item rounded-circle border me-3 border-white border-1">
                        <i className="fa-brands fa-linkedin-in text-white m-2 "></i>
                        </div>
                        <div className="icon-item rounded-circle border border-white border-1">
                        <i className="fa-solid fa-globe text-white m-2 "></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center text-white mb-3">
                    <h3 className=' fw-semibold'>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </section>

        <section className='really-footer py-3'>
        <p className='text-center text-white'>Copyright © Your Website 2021</p>
        </section>
    </footer>
   </>
  )
}
