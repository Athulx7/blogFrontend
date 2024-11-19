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

  console.log(selectedBlog.blogTitle);
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
        <div className="row justify-content-center">
          <div className="col-auto">
            <h3 className="text-warning fw-bold fs-1 text-center mt-5">
              {selectedBlog?.blogTitle?.toUpperCase()}
            </h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-auto">
            <Link to={"/maindash"}>
              <button className="btn btn-light bg-light">
                <FontAwesomeIcon className="me-2 bg-light" icon={faArrowLeft} />{" "}
                Back To
              </button>
            </Link>
          </div>
        </div>
        <hr className="text-light" />

        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <p className="text-light mt-5 text-justify">
              {selectedBlog?.blogDescription?.substring(0, 1500)}.
            </p>
          </div>

          <div className="col-12 col-md-6 mt-4 mt-md-0 text-center">
            <img
              className="img-fluid rounded border border-warning border-3"
              src={`${BASE_URL}/uploads/${selectedBlog.blogImage}`}
              alt=""
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <p className="text-light text-justify">
              {selectedBlog?.blogDescription?.substring(1500)}.
            </p>
          </div>
        </div>

        <div className="row mt-5 text-center">
          <div className="col-12">
            <h5 className="text-light">BLOG BY</h5>
          </div>
          <div className="col-12">
            <h5 className="fw-bold text-warning">
              <u>{selectedBlog?.blogAuthorname}</u>
            </h5>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="text-light">21-01-2024</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SelectedBlog;
