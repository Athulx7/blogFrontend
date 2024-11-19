import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "../Pages/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";
import { deleteBlog, getUserBlogsAPI } from "../services/allAPI";
import { BASE_URL } from "../services/baseURL";

function AddBlog() {
  const userData = JSON.parse(sessionStorage.getItem("loggeduser"));
  const token = sessionStorage.getItem("token")
  // console.log("logged user data",userData)
  const logedusername = userData.username.toUpperCase();

  const [userBlogs, setUserblog] = useState([]);
  const getUserbloging = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const result = await getUserBlogsAPI(reqHeader);
    // console.log(result)
    setUserblog(result);
  };

  const userBLogsetting = userBlogs.data;
  // console.log(userBLogsetting)

 



  //delete blogs  

  const handleDelete = async(id)=>{
   
   
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const result = await deleteBlog(id,reqHeader)
    console.log(result)

    
  }


  useEffect(() => {
    getUserbloging();
   
  }, []);
  

  return (
    <>
      <Header />
      <div className="container mt-5">
 
  <div className="row justify-content-center">
    <div className="col-auto">
      <h4 className="text-warning fw-bold">ADD BLOGS</h4>
    </div>
  </div>
  <hr className="text-light" />

 
  <div className="row">
    <div className="col-12 text-center">
      <h5 className="fs-3 text-light">
        WELCOME{" "}
        <span className="text-warning fw-bold ms-1 me-1">{logedusername}</span>{" "}
        ADD AND EDIT YOUR BLOGS HERE
      </h5>
    </div>
  </div>

 
  <div className="row justify-content-center mt-5">
    <div className="col-auto">
      <Link to={"/addpage"}>
        <button className="btn btn-light bg-light fw-bold">
          ADD NEW BLOG{" "}
          <FontAwesomeIcon className="bg-light ms-2" icon={faArrowRight} />
        </button>
      </Link>
    </div>
  </div>

  {userBLogsetting?.length > 0 ? (
    <div className="container mt-5">
      <div className="table-responsive">
        <Table   bordered>
          <thead className="text-center">
            <tr>
              <th>SL NO</th>
              <th>IMAGE</th>
              <th style={{ width: "300px" }}>TITLE</th>
              <th>DESCRIPTION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {userBLogsetting.map((item, index) => (
              <tr className="text-center align-middle" key={item._id}>
                <td className="bg-light">{index + 1}</td>
                <td>
                  <img
                    className="rounded bg-light"
                    width="200"
                    height="150"
                    src={`${BASE_URL}/uploads/${item.blogImage}`}
                    alt={item.blogTitle}
                  />
                </td>
                <td className="bg-light">{item.blogTitle}</td>
                <td className="bg-light">
                  {item.blogDescription.substring(0, 300)}.............
                </td>
                <td className="bg-light">
                  <div className="d-flex justify-content-center bg-light">
                    <FontAwesomeIcon
                      className="fs-2 text-danger bg-light "
                      icon={faTrash}
                      onClick={() => handleDelete(item._id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  ) : (
    
    <div className="text-center mt-5">
      <div className="d-flex justify-content-center mb-4">
        <img
          className="rounded border border-3 border-warning"
          width="500"
          height="300"
          src="https://images.squarespace-cdn.com/content/v1/5ca65730f4e53114161a7503/f9dcf3ae-0dc9-455f-bd7d-1170ec5a02b5/Photographer+shooting+images+for+blog+posts?format=500w"
          alt="No blogs available"
        />
      </div>
      <p className="text-light fw-bold fs-5">
        There are no blogs uploaded by you. Please add a Blog{" "}
        <Link to={"/addpage"} className="text-warning ms-2">
          here
        </Link>
        
      </p>
    </div>
  )}
</div>


      <Footer />
    </>
  );
}

export default AddBlog;
