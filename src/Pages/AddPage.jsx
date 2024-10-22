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
 const navigae = useNavigate()

  const [addBlog, setAddBlog] = useState({
    blogTitle: "",
    blogDescription: "",
    blogAuthorname: "",
    blogImage:""
  });


  const [token,setToken]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))

    }
  },[])

  


 


  
    





const handelUpload= async(e)=>{
  e.preventDefault();
  const {blogTitle,blogDescription,blogAuthorname,blogImage} = addBlog
    if(!blogTitle || !blogDescription || !blogAuthorname || !blogImage){
        alert("please fill the form completely")
    }else{
        const reqBody = new FormData()
        reqBody.append("blogTitle",blogTitle)
        reqBody.append("blogDescription",blogDescription)
        reqBody.append("blogAuthorname",blogAuthorname)
        reqBody.append("blogImage",blogImage)


        const reqHeader = {
         "Content-Type": "multipart/form-data",
         Authorization : `Bearer ${token}`
        }
        const result = await addBlogAPI(reqBody,reqHeader)
        // console.log(result)
        if(result.status === 200){
          // setAddBlodResponce(result.data)
          alert(`${blogTitle} was uploaded successfully`)
          setAddBlog({
            blogTitle: "",
            blogDescription: "",
            blogAuthorname: "",
            blogImage:""

          })
          setPreview("")
          navigae('/addblog')

        }
        else if(result.status === 409){
          alert(`${blogTitle} was uploaded faild`)
        }
        else{
          alert("upload faild")
        }
    }

}

const [preview,setPreview]= useState("")
useEffect(()=>{
  if(addBlog.blogImage){
    setPreview(URL.createObjectURL(addBlog.blogImage))
  }
},[addBlog.blogImage])



//edit page 

const {id} = useParams()
// console.log(id)
const userdata = sessionStorage.getItem("loggeduser")
const [selecteditBlog,setSelectEditblog] = useState([])
const setSeletecteduserblogging = async()=>{
  const token = sessionStorage.getItem("token");
    // const reqHeader = {
    //   "Content-Type": "application/json",
    //   Authorization: `Bearer ${token}`,
    // };

    // const result = await getseleceditBlogAPI(id)
    setSelectEditblog(result.data)
}
// console.log(selecteditBlog)

useEffect(()=>{
  setSeletecteduserblogging()
},[])


const [editPreview,setEditPreview] = useState("")

const title = selecteditBlog?.blogTitle
const description = selecteditBlog?.blogDescription
const author = selecteditBlog?.blogAuthorname
const image = selecteditBlog?.blogImage


const [finalEdit,setFinalEdit] = useState({
  
   title ,
  blogDescription:"",
  blogAuthorname:"",
  blogImage:''

})
// console.log(finalEdit)
















  const editingpage = editpage ? false : true;
  return (
    <>
      <Header />

      <div className="container d-flex align-items-center justify-content-center mt-5">
        <h4 className="text-warning fw-bold ">ADD BLOGS</h4>
      </div>
      <hr className="text-light" />
      

      {editingpage ? (
        <div>
            <Link to={'/addblog'} className="text-light fw-bold ms-5" style={{textDecoration:"none"}}>
                <FontAwesomeIcon icon={faArrowLeft} /> back to
                
                </Link>
          <div className="d-flex align-items-center justify-content-center">
            <div className="">
                
              <h3 className="fw-bold text-light">ADD YOUR BLOG</h3>
            </div>
          </div>

          <div className="container mt-5 rounded border  border-warning p-5 border-3">
            <input
              value={addBlog.blogTitle}
              onChange={(e) =>
                setAddBlog({ ...addBlog, blogTitle: e.target.value })
              }
              type="text"
              className="form-control w-50 ms-auto me-auto"
              placeholder="ENTER THE TITLE OF YOUR BLOG"
            />
            <textarea
              value={addBlog.blogDescription}
              onChange={(e) =>
                setAddBlog({ ...addBlog, blogDescription: e.target.value })
              }
              name=""
              style={{ height: "250px" }}
              className="form-control w-50 mt-4 ms-auto me-auto"
              placeholder="ENTER THE DESCRIPTION OF YOUR BLOG"
              id=""
            ></textarea>
            <div className="">
                <label className="d-flex align-items-center justify-content-center mt-4">
                <input

                onChange={(e)=>setAddBlog({...addBlog,blogImage:e.target.files[0]})}
              
                type="file"
                className="form-control  w-25"
                
              />
              
              <img
                className="ms-3 rounded border border-warning border-4"
                src= {preview?preview:"https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"}
                width={"200px"}
                alt=""
              />
                </label>
              
            </div>

            <input
            value={addBlog.blogAuthorname}
            onChange={(e)=>setAddBlog({...addBlog,blogAuthorname:e.target.value})}
              type="text"
              className="form-control w-50 ms-auto me-auto mt-4"
              placeholder="ENTER YOUR NAME"
            />
            <div className="d-flex align-items-center justify-content-center  mt-4">
              <button className="btn btn-warning fw-bolder" onClick={handelUpload}>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; UPLOAD
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </button>
            </div>
          </div>
         
        </div>
      ) : (

       
        <div>
            <Link to={'/addblog'} className="text-light fw-bold ms-5" style={{textDecoration:"none"}}>
                <FontAwesomeIcon icon={faArrowLeft} /> back to
                
                </Link>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <h3 className="fw-bold text-light">EDIT YOUR BLOG</h3>
            </div>
          </div>


       

          <div className="container mt-5 rounded border  border-warning p-5 border-3">
            <input
            value={selecteditBlog.blogTitle}
            onChange={(e)=>setFinalEdit({...finalEdit,title:e.target.value})}
            
              type="text"
              className="form-control w-50 ms-auto me-auto"
              placeholder="ENTER THE TITLE OF YOUR BLOG"
            />
            <textarea
            value={selecteditBlog.blogDescription}
            onChange={(e)=>setFinalEdit({...finalEdit,blogDescription:e.target.value})}
              name=""
              style={{ height: "250px" }}
              className="form-control w-50 mt-4 ms-auto me-auto"
              placeholder="ENTER THE DESCRIPTION OF YOUR BLOG"
              id=""
            ></textarea>
            <div className="d-flex align-items-center justify-content-center mt-4">
              
              <input type="file" className="form-control  w-25" />
              <img
                className="ms-3 rounded border border-warning border-4"
                src={`${BASE_URL}/uploads/${selecteditBlog.blogImage}`}
                width={"200px"}
                height={156}
                alt=""
              />
            </div>

            <input
            value={selecteditBlog.blogAuthorname}
              type="text"
              className="form-control w-50 ms-auto me-auto mt-4"
              placeholder="ENTER YOUR NAME"
            />
            <div className="d-flex align-items-center justify-content-center  mt-4">
              <button className="btn btn-warning fw-bolder">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; EDIT
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default AddPage;
