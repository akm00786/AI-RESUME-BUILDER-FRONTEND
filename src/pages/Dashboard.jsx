import React, { useEffect, useState } from 'react'
import ResumeBox from './ResumeBox'
import GlobalApi from '../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import OldsResumes from './OldsResumes';
import OldResumeLoader from './OldResumeLoader';


const Dashboard = () => {
  let [oldResume,setOldResume] = useState([] ) ;
  let {user , isLoaded} = useUser() ;
  let [deletedBool , setDeletedBool] = useState(false);
  
  useEffect(()=>{
    
    
   if(isLoaded &&user){
    GlobalApi.getResumes(user?.primaryEmailAddress.emailAddress).then((res)=>{ console.log(res.data.data); setOldResume(res.data.data) ;  }).catch((error)=>{console.log(error) } ) ;

   }

  } , [user , deletedBool] ) ;

  return  (

    <div className='my-10 ml-24 mr-8'>

      <h2 className='text-3xl font-bold'> My Resume </h2>
      <p className='text-gray-500 mb-10 '> Start Creating AI resume to your next Job role </p>

      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4  gap-8'>
      <ResumeBox/>
    
      {
      (oldResume.length>0) ?  oldResume.map((i , index)=> <OldsResumes key={index} resume={i} setDeletedBool={setDeletedBool}/>) : <>
        <OldResumeLoader/>
        <OldResumeLoader/>
        <OldResumeLoader/>
        
     
        </>
      
      }
      </div>

    </div>
    
  )
}

export default Dashboard