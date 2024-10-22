import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import instaLogo from "../assets/instaLogo.png";

function Footer() {
  return (
    <>
      <div className="bg-light ">
        <div className="container bg-light mt-5  ">
          <div className="d-flex bg-light align-items-center   justify-content-between">
            <Link
              className="bg-light mt-3"
              style={{ textDecoration: "none" }}
              to={"/maindash"}
            >
              <h4 className="bg-light" style={{ color: "#bc382e" }}>
                <FontAwesomeIcon
                  style={{ color: "#bc382e" }}
                  className="me-2 bg-light"
                  icon={faBook}
                />{" "}
                BlogBoard
              </h4>
            </Link>

            <div className="bg-light mt-5 mb-5 ms-5">
              <Link
                style={{ textDecoration: "none", color: "#bc382e" }}
                className="bg-light mt-5"
              >
                <h5 className="bg-light">Home</h5>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "#bc382e" }}
                className="bg-light mt-5"
              >
                <h5 className="bg-light">Blogs</h5>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "#bc382e" }}
                className="bg-light mt-5"
              >
                <h5 className="bg-light">Add Blog</h5>
              </Link>
            </div>

            <div className="bg-light ms-5 ">
              <div className="d-flex rounded bg-light mt-5 me-5">
                <input
                  type="text"
                  className="form-control fw-bold"
                  placeholder="Type a message "
                  style={{ backgroundColor: "#bc382e" }}
                />
                <button className="btn btn-success fw-bold ms-3 w-50">
                  SEND
                </button>
              </div>

              <div className="d-flex align-items-center justify-content-center bg-light mt-4 ">
                <Link style={{ textDecoration: "none" }} className="bg-light">
                  <FontAwesomeIcon
                    className="bg-light text-primary fs-2"
                    icon={faFacebook}
                  />
                </Link>
                <Link style={{ textDecoration: "none" }} className="bg-light">
                  <img
                    className="bg-light"
                    src={instaLogo}
                    width={"60px"}
                    alt=""
                  />
                </Link>
                <Link style={{ textDecoration: "none" }} className="bg-light">
                  <FontAwesomeIcon
                    className="bg-light text-primary fs-2"
                    icon={faLinkedin}
                  />
                </Link>
                <Link className="bg-light">
                  <FontAwesomeIcon
                    className="fs-2 text-danger ms-3 bg-light"
                    icon={faYoutube}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
