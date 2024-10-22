import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Col, Row } from "react-bootstrap";
import { getSelectedBlogsAPI } from "../services/allAPI";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../services/baseURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SelectedBlog() {
  const { id } = useParams();
  console.log(id);

  const [selectedBlog, setSelectedBlog] = useState([]);
 
  const selectedBloging = async () => {
    const result = await getSelectedBlogsAPI(id);
    const data = await result;
    setSelectedBlog(data.data);
  };
  //   const settingselectedblog = selectedBlog;
 
  console.log(selectedBlog.blogTitle)
  // if(typeof selectedBlog.blogTitle === "string"){
  //   console.log(selectedBlog.blogTitle.toUpperCase())
  // const CapitalTitle = selectedBlog.blogTitle.toUpperCase()
  // }

  useEffect(() => {
   
    selectedBloging();
  }, [id]);

  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center ">
          <h3 className="text-warning fw-bold fs-1 mt-5">
            {selectedBlog?.blogTitle?.toUpperCase()}
          </h3>
        </div>

        <div>
          <Link to={'/maindash'}>

          <button className="btn btn-light bg-light"><FontAwesomeIcon className="bg-light me-2" icon={faArrowLeft} /> Back To</button>
          
          </Link>
        </div>
        <hr className="text-light" />

        <div>
          <div className="mt-5">
            <Row>
              <Col>
                <p className="text-light mt-5" style={{ textAlign: "justify" }}>
                  &nbsp; &nbsp; &nbsp; &nbsp; {selectedBlog?.blogDescription?.substring(0,1500)}.
                </p>
              </Col>
              <Col className="mt-5">
                <img
                  width={700}
                  height={400}
                  className="rounded border border-warning border-3  "
                  src={`${BASE_URL}/uploads/${selectedBlog.blogImage}`}
                  alt=""
                />
              </Col>
            </Row>
          </div>

          <div className="">
            <p className="text-light mt-5" style={{ textAlign: "justify" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {selectedBlog?.blogDescription?.substring(1500)}.
            </p>
          </div>

          <div>
            <div className="d-flex align-items-center justify-content-center mt-5">
              <h5 className="text-light ">BLOG BY</h5>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <h5 className=" fw-bold text-warning ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <u>{selectedBlog.blogAuthorname}</u>
              </h5>
            </div>
          </div>

          <div>
            <p className="text-light">21-01-2024</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SelectedBlog;
