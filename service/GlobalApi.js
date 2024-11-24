import axios from "axios";

    
    
    const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;

    const axiosClient = axios.create( {
        baseURL : `${import.meta.env.VITE_STRAPI_BASE_URL}/api/` ,
        headers : {
            'Content-Type':'application/json' ,
            'Authorization':`Bearer ${API_KEY}` ,
        }
    })

    const createResume=(data)=> axiosClient.post( '/user-resumes' , data ) ;
    const getResumes = (userEmail)=>axiosClient.get( `/user-resumes?filters[userEmail][$eq]=${userEmail}`) ;
    const getAResume = (resumeId)=>axiosClient.get( `/user-resumes/${resumeId}?populate=*`) ; // for populating componenets as well
    const updateAResume = (resumeId , data)=>axiosClient.put( `/user-resumes/${resumeId}` , data ) ; 
    const deleteAResume = (resumeId )=>axiosClient.delete( `/user-resumes/${resumeId}`  ) ; 
     

export default{
    createResume,
    getResumes,
    getAResume,
    updateAResume,
    deleteAResume
}
