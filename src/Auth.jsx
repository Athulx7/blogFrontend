import { faArrowLeft, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loginimage from "./assets/blogLogin.png";
import { toast, ToastContainer } from "react-toastify";
import { userLogin, UserRegister } from "./services/allAPI";
import './auth.css'

function Auth({ register }) {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  // console.log(userdata.username)
  //   console.log(userdata.email)
  //   console.log(userdata.password)

  const { username, email, password } = userdata;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("please fill the form completely", {
        className:'text-light fw-bold',
        position:'top-center'
      });
    } else {
      const result = await UserRegister(userdata);
      console.log(result);
      if (result.status === 201) {
        setUserdata({
          username: "",
          email: "",
          password: "",
        });
        alert(`${username} successfully registerd`, {
          className:'text-light fw-bold',
          position:'top-center'
        });
        navigate("/login");
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userdata;
    if (!email || !password) {
      alert("please fill the form completely",
        {
          className:'text-light fw-bold',
          position:'top-center'
        }
       
      );
    } else {
      const result = await userLogin(userdata);
      console.log(result);
      if (result.status === 200) {
        sessionStorage.setItem("loggeduser", JSON.stringify(result.data.data));
        sessionStorage.setItem("token",result.data.token)
        alert(`${result.data.data.username} logged in successfully`, {
          className:'text-light fw-bold',
          position:'top-center'
        });
        navigate("/maindash");
        setUserdata({
          email: "",
          password: "",
        });
      } else if (result.status === 401) {
        alert("invalid username or email", {
          className:'text-light fw-bold',
          position:'top-center'
        });
      } else {
        alert("something went wrong", {
          className:'text-light fw-bold',
          position:'top-center'
        });
      }
    }  
  };

  const registerForm = register ? true : false;
  return (
    <>
      <div>
        <div className="d-flex">
          <Link
            className="d-flex ms-5 mt-4 "
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faBook} className="fs-2 text-light " />
            <h3 className="fw-bold ms-3 text-light">BlogBoard</h3>
          </Link>

          <Link className="ms-auto me-5 mt-4 dashlnks" to={"/"}>
            <h6 className="fw-bolder text-light">
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> BACK TO
            </h6>
          </Link>
        </div>

        <div className="container">
          <Row className="mt-5">
            <Col className="mt-5 ms-3 p-4 imgage">
              <img className="" src={Loginimage} width={"70%"} alt="" />
            </Col>

            <Col className="">
              <div className="borderd subu shadow bg-light">
                <div className="p-5">
                  {register ? (
                    <div>
                      <h4 className="text-center fw-bold text-light pt-3">
                        SIGN UP
                      </h4>
                      <hr />
                      <input
                        value={userdata.username}
                        onChange={(e) =>
                          setUserdata({ ...userdata, username: e.target.value })
                        }
                        type="text"
                        className="form-control mt-5"
                        placeholder="Enter the Name"
                      />
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-light fw-bold text-center  pt-3">
                        SIGN IN
                      </h4>
                      <hr />
                    </div>
                  )}

                  <form action="">
                    <input
                      value={userdata.email}
                      onChange={(e) =>
                        setUserdata({ ...userdata, email: e.target.value })
                      }
                      type="email"
                      className="form-control mt-3"
                      placeholder="Enter the Email id"
                    />
                    <input
                      value={userdata.password}
                      onChange={(e) =>
                        setUserdata({ ...userdata, password: e.target.value })
                      }
                      type="password"
                      className="form-control mt-4"
                      placeholder="Enter the Password"
                    />
                    {registerForm ? (
                      <div>
                        <button
                          className="btn btn-warning mt-4 w-100 "
                          onClick={handleRegister}
                        >
                          SIGN UP
                        </button>
                        <h6 className="text-center text-light mt-5 fs-5 fw-bold">
                          ALready have Account please{" "}
                          <Link to="/login" className="text-info">
                            Login
                          </Link>
                        </h6>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="btn btn-warning mt-4 w-100 "
                          onClick={handleLogin}
                        >
                          SIGN IN
                        </button>
                        <h6 className="text-center text-light mt-5 fs-5 fw-bold">
                          Don't have Account please{" "}
                          <Link className="text-info" to={"/register"}>
                            Register
                          </Link>
                        </h6>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <ToastContainer toastStyle={{backgroundColor:'#bc382e'}}  />
       
      </div>
      
    </>
  );
}

export default Auth;
