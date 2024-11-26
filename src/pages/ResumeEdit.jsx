import React, { useEffect, useState } from 'react'
import FormPage from './FormPage';
import PreviewPage from './PreviewPage';
import { ResumeContext } from '@/context/ResumeContext';
import GlobalApi from '../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';


const ResumeEdit = () => {

  
  const { resumeId } = useParams();
  let [resumeInfo , setResumeInfo] = useState( {} ) ;
  let [loader , setLoader] = useState(false) ;

  useEffect ( ()=>{

     setLoader(true);
    GlobalApi.getAResume(resumeId).then((res)=>{
       

       let obj = res.data.data
       delete obj.id
       delete obj.documentId
       delete obj.createdAt
       delete obj.publishedAt
       delete obj.updatedAt

        obj?.education?.map((i)=>{
          delete i.id;
        });
        obj?.experience?.map((i)=>{
          delete i.id;
        })
        obj?.skills?.map((i)=>{
          delete i.id;
        })

       console.log(obj);
      setResumeInfo ( obj ) 

    }
        ).catch((error)=>{console.log(error);} 
  ).finally(()=>{setLoader(false)}) ;

  } , [resumeId]  ) ;

  return (

    <ResumeContext.Provider value={{resumeInfo , setResumeInfo}}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-2'>
    {
      loader?(
        <>
        <div className="flex flex-col space-y-3">

      <div className="space-y-2">
          <Skeleton className="h-16 " />
          <Skeleton className="h-28 " />
        </div>
        <Skeleton className="h-[125px] rounded-xl" />
        <Skeleton className="h-36 rounded-xl" />
        
      </div>

      <div className="flex flex-col space-y-3">

      <div className="space-y-2">
          <Skeleton className="h-16 " />
          <Skeleton className="h-28 " />
        </div>
        <Skeleton className="h-[125px] rounded-xl" />
        <Skeleton className="h-36 rounded-xl" />
        
      </div>
        </>
      ):(
     <>
      <FormPage/>
      <PreviewPage/>
      </>
    )
    }
    </div>
    </ResumeContext.Provider>
  )
}

export default ResumeEdit


