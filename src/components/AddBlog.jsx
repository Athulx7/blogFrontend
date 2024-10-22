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
      <div className="container d-flex align-items-center justify-content-center mt-5">
        <h4 className="text-warning fw-bold ">ADD BLOGS</h4>
      </div>
      <hr className="text-light" />
      <div className="text-light text-center ms-5 ">
        <h5 className="fs-3">
          WELCOME{" "}
          <span className="text-warning fw-bold ms-1 me-1">
            {logedusername}
          </span>{" "}
          ADD AND EDIT YOUR BLOGS HERE
        </h5>
      </div>

      <div className="container d-flex align-items-center justify-content-center mb-5 mt-5">
        <Link to={"/addpage"}>
          <button className="btn btn-light bg-light fw-bold">
            ADD NEW BLOG{" "}
            <FontAwesomeIcon className="bg-light ms-2" icon={faArrowRight} />
          </button>
        </Link>
      </div>

      {userBLogsetting?.length > 0 ? (
        userBLogsetting.map((item, index) => (
          <div className="container   ">
            <Table striped hoverd className="">
              <thead>
                <tr className="text-center">
                  <th>SL NO</th>
                  <th>IMAGE</th>
                  <th style={{ width: "300px" }}>TITLE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tr className="text-center mt-2  ">
                <td className="bg-light nt-5">{index + 1}</td>
                <td>
                  <img
                    width={"200"}
                    height={"150"}
                    className="bg-light p-2"
                    src={`${BASE_URL}/uploads/${item.blogImage}`}
                    alt=""
                  />
                </td>
                <td className="mt-5 bg-light">{item.blogTitle}</td>
                <td className="bg-light">
                  {item.blogDescription.substring(0, 300)}.............
                </td>
                <td className="bg-light">
                  <div className="d-flex bg-light">
                    {/* <Link to={`/editpage/${item._id}`} blog={{item}} className="bg-light">
                      <FontAwesomeIcon
                        className="fs-2 bg-light text-success ms-3"
                        icon={faPenToSquare}
                      />
                    </Link> */}

                    <Link className="bg-light"  >

                    <FontAwesomeIcon onClick={()=>handleDelete(item._id)}
                      className="fs-2 bg-light text-danger ms-3"
                      icon={faTrash}
                    />
                    </Link>

                      
                  </div>
                </td>
              </tr>
            </Table>
          </div>
        ))
      ) : (
        <div>
          <div className="d-flex align-items-center justify-content-center mb-4 ">
          <img
          className="rounded border border-3 border-warning"
          
          width={500}
          height={300}
          src="https://images.squarespace-cdn.com/content/v1/5ca65730f4e53114161a7503/f9dcf3ae-0dc9-455f-bd7d-1170ec5a02b5/Photographer+shooting+images+for+blog+posts?format=500w"
          alt=""
        />
          </div>
         
          <p className="text-light fw-bold fs-5 text-center">There is no blogs are uploaded by you please add a Blog <Link to={'/addpage'} className="text-warning ms-2">here</Link> </p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default AddBlog;
