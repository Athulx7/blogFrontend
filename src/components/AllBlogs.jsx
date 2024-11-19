import React, { useContext, useEffect, useState } from "react";
import "./css/allblog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getThreeBlogAPI } from "../services/allAPI";
import { BASE_URL } from "../services/baseURL";
import { addBlogResponceContext } from "../Context/ContextShare";

function AllBlogs() {
  const [threeBlog, setThreeBlog] = useState([]);
  const getThreeBlogsForMaindash = async () => {
    const result = await getThreeBlogAPI();
    setThreeBlog(result);
  };
  const finalthree = threeBlog.data;
  // console.log(finalthree)

  // const {addBlogResponce, setAddBlodResponce} = useContext(addBlogResponceContext)

  useEffect(() => {
    getThreeBlogsForMaindash();
  }, []);
  return (
    <>
      <>
      <div className="container allblogmain text-light mt-5">
  <div className="row justify-content-center text-center">
    <div className="col-12">
      <h2 className="fw-bolder rounded border border-warning border-3 p-3">
        <FontAwesomeIcon icon={faArrowDown} className="me-4" />
        ALL BLOGS
        <FontAwesomeIcon className="ms-4" icon={faArrowDown} />
      </h2>
    </div>
  </div>

  <div className="container mt-5">
    {finalthree?.length > 0 ? (
      finalthree.map((item) => (
        <div className="border mt-5 rounded p-4" key={item._id}>
          <div className="row">
            <div className="col-md-6">
              <Link to={`/selectedblogpage/${item._id}`}>
                <img
                  width="100%"
                  className="rounded border border-warning border-3"
                  src={`${BASE_URL}/uploads/${item.blogImage}`}
                  alt=""
                  style={{ height: "auto", maxHeight: "300px", objectFit: "cover" }}
                />
              </Link>
            </div>

            <div className="col-md-6">
              <Link to={`/selectedblogpage/${item._id}`} className="blogheadlink">
                <h4 className="fw-bold text-center">
                  {item.blogTitle.toUpperCase()}
                </h4>
              </Link>
              <div className="d-flex mt-3">
                <h6 className="fw-bold">21-01-2024</h6>
                <h6 className="ms-auto fw-bold">
                  AUTHOR:
                  <span className="text-warning ms-2">
                    {item.blogAuthorname.toUpperCase()}
                  </span>
                </h6>
              </div>
              <hr />
              <p>
                {item.blogDescription.substring(0, 700)} ...
                <Link to={`/selectedblogpage/${item._id}`} className="text-warning ms-2">
                  See More
                </Link>
              </p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <img
            width="100%"
            className="rounded border border-warning border-5"
            src="https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png"
            alt="No Blogs"
            style={{ maxWidth: "700px", height: "auto" }}
          />
          <p className="text-center mt-5 fw-bold fs-2">No Blogs To Display</p>
        </div>
      </div>
    )}

    <div className="row justify-content-center text-center mt-5">
      <div className="col-auto">
        <Link to={"/showmore"}>
          <button className="btn btn-warning fw-bold rounded-5">
            SHOW MORE BLOG
            <FontAwesomeIcon className="bg-warning ms-2" icon={faArrowRight} />
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

      </>
    </>
  );
}

export default AllBlogs;
