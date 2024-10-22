import { faBars, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const [token, setToken] = useState(false);

  const handleLogout = () => {
    if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("loggeduser");
      sessionStorage.removeItem("token");
      navigate("/");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(true);
    }
  }, []);



  const [responsiveDiv,setResponsiveDiv] = useState(false)



  const handleResponsiveDiv = ()=>{
    setResponsiveDiv(!responsiveDiv)

  }
  return (
    <>
      <div className=" fw-bold">
        <div className="d-flex justify-content-between align-items-center">
          <div className="ms-5 mt-4 d-flex">
            <Link
              to={"/maindash"}
              style={{ textDecoration: "none", color: "white" }}
              className="d-flex"
            >
              <FontAwesomeIcon icon={faBook} className="fs-2 " />
              <h3 className="text-light ms-3">Blogger</h3>
            </Link>
          </div>

          <div className=" contrnd  ">
            <div className="d-flex">
              <Link to={"/maindash"} className="mt-4 headerlinks">
                <h4 className="fw-bold">Home</h4>
              </Link>

              <Link to={"/showmore"} className="mt-4 ms-4 headerlinks">
                <h4 className="fw-bold">Blogs</h4>
              </Link>

              <Link to={"/addblog"} className="mt-4 ms-4 headerlinks">
                <h4 className="fw-bold">Add Blog</h4>
              </Link>
            </div>
          </div>

          <div className="me-5 logoutb">
            <button
              className="ms-auto btn bg-light btn-light me-5 mt-4 dashlnks"
              to={""}
              onClick={handleLogout}
            >
              <h6 className="fw-bold mt-1 bg-light ">LOG OUT</h6>
            </button>
          </div>

          <div className="respoButton ">
            <button
              className="btn  mt-2 " style={{backgroundColor:'white'}}
              onClick={handleResponsiveDiv}
            >
              <FontAwesomeIcon className="bg-light " icon={faBars} />
            </button>
          </div>
        </div>

        {
          responsiveDiv && (
            <div className="max800px   ms-5 mt-2 ">
          <div className="">
            <h6 className="fs-4 fw-bold">
              <Link style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </h6>
            <h6 className="fs-4 fw-bold">
              <Link style={{ textDecoration: "none", color: "white" }}>
                Blogs
              </Link>
            </h6>
            <h6 className="fs-4 fw-bold">
              <Link style={{ textDecoration: "none", color: "white" }}>
                Add Blogs
              </Link>
            </h6>
          </div>
        </div>
          )
        }
        
      </div>
    </>
  );
}

export default Header;
