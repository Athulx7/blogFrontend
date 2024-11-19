import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/home.css'
function Home() {
  return (
    <>

<div className="container mt-5">
  <div className="row justify-content-center text-center">
    <div className="col-12">
      <h2 className="text-light fw-bolder mt-5">
        Create, Write, Add: Join the Blogging Community
      </h2>
    </div>
  </div>

  <div className="row justify-content-center text-center mt-4">
    <div className="col-10 col-md-8">
      <h5 className="text-light fs-3 fw-bolder">
        Share your unique voice with the world
      </h5>
    </div>
  </div>

  <div className="row justify-content-center text-center mt-5">
    <div className="col-auto">
      <Link to="/addblog">
        <button className="btn btn-warning text-dark fw-bold">
          ADD YOUR BLOG <FontAwesomeIcon className="ms-2 bg-warning" icon={faArrowRight} />
        </button>
      </Link>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Home
