import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import { getAllBlogsAPi } from "../services/allAPI";
import { BASE_URL } from "../services/baseURL";
function ShowmoreBlogs() {
  const [allBlogs, setAllblogs] = useState([]);
  const [searchKey,setSearchKey] = useState("")

  const getShomoreBlogs = async () => {
    console.log(searchKey)
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
      <div className="container d-flex align-items-center justify-content-center mt-5">
        <h4 className="text-warning fw-bold ">ALL BLOGS</h4>
      </div>
      <hr className="text-light" />
      <div className="d-flex align-items-center justify-content-center">
        <input
          type="text"
          className="form-control w-50 text-center fw-bold"
          placeholder="SEARCH BLOG BY ...."
          onChange={(e)=>setSearchKey(e.target.value)}
        />
        
      </div>
      <div className="container text-light">
        {getedAllblogs?.length > 0 ? (
          getedAllblogs.map((item) => (
            <div className="border mt-5 rounded p-4">
              <Row>
                <Col>
                  <Link to={`/selectedblogpage/${item._id}`} >
                    <img
                       width={"500"}
                       height={"300"}
                      className="rounded border border-warning border-3"
                      src={`${BASE_URL}/uploads/${item.blogImage}`}
                      alt=""
                    />
                  </Link>
                </Col>

                <Col>
                  <div>
                    <Link to={`/selectedblogpage/${item._id}`} className="blogheadlink">
                      <h4 className="fw-bold text-center">
                        {item.blogTitle.toUpperCase()}
                      </h4>
                    </Link>
                    <div className="d-flex">
                      <h6 className="fw-bold">21-01-2024</h6>
                      <h6 className="ms-auto fw-bold">
                        AUTHER :{" "}
                        <span className="text-warning ms-2">
                          {item.blogAuthorname.toUpperCase()}
                        </span>
                      </h6>
                    </div>
                    <hr />
                    <p className="">
                      {item.blogDescription.substring(0, 700)} .....
                      <Link to={`/selectedblogpage/${item._id}`} className="text-warning ms-2">see more</Link>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <div>
            <div className="d-flex align-items-center justify-content-center mt-5 ">
              <img
                width={700}
                className="rounded border border-warning border-5"
                src="https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png"
                alt=""
              />
            </div>
            <p className="text-center mt-5 fw-bold fs-2">No Blogs To Display</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ShowmoreBlogs;
