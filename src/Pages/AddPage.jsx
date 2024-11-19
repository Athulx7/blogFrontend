import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { faArrowLeft, faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addBlogAPI } from "../services/allAPI";
import { toast, ToastContainer } from "react-toastify";
import { addBlogResponceContext } from "../Context/ContextShare";
import { BASE_URL } from "../services/baseURL";

function AddPage({ editpage }) {
  // const {addBlogResponce, setAddBlodResponce} = useContext(addBlogResponceContext)
  const navigae = useNavigate();

  const [addBlog, setAddBlog] = useState({
    blogTitle: "",
    blogDescription: "",
    blogAuthorname: "",
    blogImage: "",
  });

  const [token, setToken] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  const handelUpload = async (e) => {
    e.preventDefault();
    const { blogTitle, blogDescription, blogAuthorname, blogImage } = addBlog;
    if (!blogTitle || !blogDescription || !blogAuthorname || !blogImage) {
      alert("please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("blogTitle", blogTitle);
      reqBody.append("blogDescription", blogDescription);
      reqBody.append("blogAuthorname", blogAuthorname);
      reqBody.append("blogImage", blogImage);

      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      const result = await addBlogAPI(reqBody, reqHeader);
      // console.log(result)
      if (result.status === 200) {
        // setAddBlodResponce(result.data)
        alert(`${blogTitle} was uploaded successfully`);
        setAddBlog({
          blogTitle: "",
          blogDescription: "",
          blogAuthorname: "",
          blogImage: "",
        });
        setPreview("");
        navigae("/addblog");
      } else if (result.status === 409) {
        alert(`${blogTitle} was uploaded faild`);
      } else {
        alert("upload faild");
      }
    }
  };

  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (addBlog.blogImage) {
      setPreview(URL.createObjectURL(addBlog.blogImage));
    }
  }, [addBlog.blogImage]);

  //edit page

  const { id } = useParams();
  // console.log(id)
  const userdata = sessionStorage.getItem("loggeduser");
  const [selecteditBlog, setSelectEditblog] = useState([]);
  const setSeletecteduserblogging = async () => {
    const token = sessionStorage.getItem("token");
    // const reqHeader = {
    //   "Content-Type": "application/json",
    //   Authorization: `Bearer ${token}`,
    // };

    // const result = await getseleceditBlogAPI(id)
    setSelectEditblog(result.data);
  };
  // console.log(selecteditBlog)

  useEffect(() => {
    setSeletecteduserblogging();
  }, []);

  const [editPreview, setEditPreview] = useState("");

  const title = selecteditBlog?.blogTitle;
  const description = selecteditBlog?.blogDescription;
  const author = selecteditBlog?.blogAuthorname;
  const image = selecteditBlog?.blogImage;

  const [finalEdit, setFinalEdit] = useState({
    title,
    blogDescription: "",
    blogAuthorname: "",
    blogImage: "",
  });
  // console.log(finalEdit)

  const editingpage = editpage ? false : true;
  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-auto">
            <h4 className="text-warning fw-bold">
              {editingpage ? "ADD BLOGS" : "EDIT BLOGS"}
            </h4>
          </div>
        </div>
        <hr className="text-light" />

        <div className="row">
          <div className="col-auto">
            <Link
              to={"/addblog"}
              className="text-light fw-bold"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Back To
            </Link>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h3 className="fw-bold text-center text-light">
              {editingpage ? "ADD YOUR BLOG" : "EDIT YOUR BLOG"}
            </h3>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 p-4 rounded border border-warning">
            <input
              type="text"
              className="form-control mb-4"
              value={editingpage ? addBlog.blogTitle : selecteditBlog.blogTitle}
              onChange={(e) =>
                editingpage
                  ? setAddBlog({ ...addBlog, blogTitle: e.target.value })
                  : setFinalEdit({ ...finalEdit, title: e.target.value })
              }
              placeholder="Enter the title of your blog"
            />

            <textarea
              className="form-control mb-4"
              rows="6"
              value={
                editingpage
                  ? addBlog.blogDescription
                  : selecteditBlog.blogDescription
              }
              onChange={(e) =>
                editingpage
                  ? setAddBlog({ ...addBlog, blogDescription: e.target.value })
                  : setFinalEdit({
                      ...finalEdit,
                      blogDescription: e.target.value,
                    })
              }
              placeholder="Enter the description of your blog"
            ></textarea>

            <div className="mb-4">
              <label className="d-flex align-items-center">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) =>
                    editingpage
                      ? setAddBlog({ ...addBlog, blogImage: e.target.files[0] })
                      : setFinalEdit({
                          ...finalEdit,
                          blogImage: e.target.files[0],
                        })
                  }
                />
                <img
                  src={
                    editingpage
                      ? preview ||
                        "https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
                      : `${BASE_URL}/uploads/${selecteditBlog.blogImage}`
                  }
                  alt=""
                  className="ms-3 img-fluid rounded border border-warning"
                  style={{ width: "200px", height: "auto" }}
                />
              </label>
            </div>

            <input
              type="text"
              className="form-control mb-4"
              value={
                editingpage
                  ? addBlog.blogAuthorname
                  : selecteditBlog.blogAuthorname
              }
              onChange={(e) =>
                editingpage
                  ? setAddBlog({ ...addBlog, blogAuthorname: e.target.value })
                  : setFinalEdit({
                      ...finalEdit,
                      blogAuthorname: e.target.value,
                    })
              }
              placeholder="Enter your name"
            />

            <div className="text-center">
              <button
                className="btn btn-warning fw-bold"
                onClick={editingpage ? handelUpload : undefined}
              >
                {editingpage ? "UPLOAD" : "EDIT"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddPage;
