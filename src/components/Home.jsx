import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/home.css'
function Home() {
  return (
    <>

    <div className='container mt-5'>
        <div className='d-flex justify-content-center firstHead align-items-center'>
            <h2 className='text-light fw-bolder firstHeadS   mt-5 '> 
            Create, Write, Add: Join the Blogging Community
            </h2>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
            <h5 className='text-light mt-4 fs-3 fw-bolder'>Share your unique voice with the world</h5>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
            <Link to={'/addblog'} className='mt-5'>

            <button className='btn btn-warning text-dark fw-bold '>ADD YOUR BLOG <FontAwesomeIcon className='bg-warning ms-2' icon={faArrowRight} /></button>
            
            </Link>
        </div>
   
        
    </div>
    
    </>
  )
}

export default Home
