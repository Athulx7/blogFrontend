import axios from 'axios'
export const commonAPI = async (httMethod,url,reqBody,reqHeader)=>{
    const config = {
        method:httMethod,
        url:url,
        data:reqBody,
        headers:reqHeader?reqHeader:{'Content-Type':'application/json'}
    }
    return await axios(config).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
} 