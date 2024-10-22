import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./dash.css";
import { faFacebook, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import instaLogo from "../assets/instaLogo.png";

function Dashboard() {
  return (
    <div>
      <div className="d-flex">
        <Link className="d-flex ms-5 mt-4 " style={{ textDecoration: "none" }}>
          <FontAwesomeIcon icon={faBook} className="fs-2 text-light " />
          <h3 className="fw-bold ms-3 text-light">BlogBoard</h3>
        </Link>

        <Link className="ms-auto me-5 mt-4 dashlnks" to={'/login'}>
          <h6 className="fw-bolder text-light">SIGN IN</h6>
        </Link>
      </div>

      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="text-light firstTExt  fw-bolder mt-4">
            "Unlock a world of ideas and inspiration at BlogVault"
          </h2>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <h5 className="text-light mt-3 secondTxt fw-bolder">
            Please log in to share your thoughts and explore others!
          </h5>
        </div>

        <div className="d-flex align-items-center justify-content-center mt-4">
          <Link to={'/login'}>
            <button className="btn btn-warning  button text-dark fw-bold">
              START HERE
            </button>
          </Link>
        </div>

        <div className="d-flex align-items-center justify-content-center  images ">
          <img
            
            className="image1"
            src="https://static.vecteezy.com/system/resources/thumbnails/027/008/949/small_2x/seamless-pattern-with-autumn-fall-brown-orange-red-leaves-of-birch-tree-perfect-for-wallpaper-wrapping-paper-web-sites-background-social-media-blog-and-greeting-cards-vector.jpg"
            alt=""
          />
        </div>

        <div>
          <hr className="mt-5" />
          <div className="dashfooter d-flex align-items-center justify-content-center mt- pt-5">
            <Link style={{ textDecoration: "none" }} to={'/'}>
              <h4 className="text-light">
                <FontAwesomeIcon className="me-2" icon={faBook} /> BlogBoard
              </h4>
            </Link>
          </div>

          <div className="d-flex align-items-center justify-content-center mt-3">
            <input
              type="text"
              placeholder="Enter a message"
              className="form-control w-50"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-primary mt-4">SEND MESSAGE</button>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-4">
            <Link>
              <FontAwesomeIcon
                icon={faFacebook}
                className="fs-2 text-primary"
              />
            </Link>
            <Link>
              <FontAwesomeIcon
                icon={faXTwitter}
                className="fs-2 ms-3 text-dark"
              />
            </Link>
            <Link>
              <img src={instaLogo} width={"60px"} alt="" />
            </Link>
            <Link >
            <FontAwesomeIcon icon={faYoutube} className="text-light fs-2 " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
