import { BASE_URL } from "./baseURL";
import { commonAPI } from "./commonAPI";

//user regis

export const UserRegister = async(useredetails)=>{
    return await commonAPI('POST',`${BASE_URL}/user/register`,useredetails,'')
}

//user login

export const userLogin = async(useredetails)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,useredetails,'')
}

//add Blog

export const addBlogAPI = async(blogdetails,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/userblog/addblogs`,blogdetails,reqHeader)
}


// get 3 blogs for maindash page

export const getThreeBlogAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/userblog/getthreeblogs`,"","")
}

//get all blogs for showmoreblogs

export const getAllBlogsAPi = async(searchKey)=>{
    return await commonAPI("GET",`${BASE_URL}/userblog/getallblogs?search=${searchKey}`,"","")
}

//get specifc user blogs 
export const getUserBlogsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/userblog/getuserblog`,'',reqHeader)
}


//get selected blogs 

export const getSelectedBlogsAPI = async(blogid)=>{

    return await commonAPI("GET",`${BASE_URL}/userblog/getselected/${blogid}`,'','')

}

//editBog 

// export const getseleceditBlogAPI = async(blogid) =>{
//     return await commonAPI("GET",`${BASE_URL}/userblog/editblog/${blogid}`,'','')
// }



//delete blog 

export const deleteBlog = async(blogId,reqHeader) =>{
    return await commonAPI("DELETE",`${BASE_URL}/userblog/delete/${blogId}`,{},reqHeader)
}