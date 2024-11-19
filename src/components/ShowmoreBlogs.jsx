import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import { getAllBlogsAPi } from "../services/allAPI";
import { BASE_URL } from "../services/baseURL";
function ShowmoreBlogs() {
  const [allBlogs, setAllblogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getShomoreBlogs = async () => {
    console.log(searchKey);
    const result = await getAllBlogsAPi(searchKey);
    setAllblogs(result);
  };
  const getedAllblogs = allBlogs.data;
  // console.log(getedAllblogs)

  useEffect(() => {
    getShomoreBlogs();
  }, [searchKey]);

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-auto">
            <h4 className="text-warning fw-bold">ALL BLOGS</h4>
          </div>
        </div>
        <hr className="text-light" />

        <div className="row justify-content-center my-3">
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control text-center fw-bold"
              placeholder="SEARCH BLOG BY NAME ...."
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
        </div>

        <div className="container text-light">
          {getedAllblogs?.length > 0 ? (
            getedAllblogs.map((item) => (
              <div className="border mt-5 rounded p-4" key={item._id}>
                <div className="row">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <Link to={`/selectedblogpage/${item._id}`}>
                      <img
                        className="rounded border border-warning border-3 w-100"
                        src={`${BASE_URL}/uploads/${item.blogImage}`}
                        alt=""
                        style={{
                          height: "auto",
                          maxHeight: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="col-12 col-md-6">
                    <div>
                      <Link
                        to={`/selectedblogpage/${item._id}`}
                        className="blogheadlink"
                      >
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
                        <Link
                          to={`/selectedblogpage/${item._id}`}
                          className="text-warning ms-2"
                        >
                          See More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="row justify-content-center mt-5">
              <div className="col-auto text-center">
                <img
                  className="rounded border border-warning border-5 img-fluid"
                  src="https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png"
                  alt="No Blogs"
                  style={{ maxWidth: "700px" }}
                />
                <p className="mt-5 fw-bold fs-2">No Blogs To Display</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ShowmoreBlogs;
