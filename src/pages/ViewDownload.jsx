import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GlobalApi from '../../service/GlobalApi';
import PreviewPage from './PreviewPage';
import { Skeleton } from '@/components/ui/skeleton';
import { ResumeContext } from '@/context/ResumeContext';
import { Button } from '@/components/ui/button';
import { FiShare2 } from "react-icons/fi";
import { IoMdDownload } from 'react-icons/io';
import { LuPartyPopper } from 'react-icons/lu';
import { IoHomeOutline } from 'react-icons/io5';
import { RWebShare } from 'react-web-share';

const ViewDownload = () => {

  let navigate = useNavigate();

    let{resumeId} = useParams();
    let [resumeInfo , setResumeInfo] = useState( {} ) ;
    let [loader , setLoader] = useState(false) ;
  
    useEffect ( ()=>{
  
       setLoader(true);
      GlobalApi.getAResume(resumeId).then((res)=>{     
  
         console.log(res.data.data);
        setResumeInfo ( res.data.data ) 
  
      }
          ).catch((error)=>{console.log(error);} 
    ).finally(()=>{setLoader(false)}) ;
  
    } , [resumeId]  ) ;



    function downloadHandler (){
      window.print();
    }


  return (
    <ResumeContext.Provider value={{resumeInfo , setResumeInfo}}>
    <div className='px-2 py-6 sm:px-24 md:px-36 lg:px-56' >
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
                </>
              ):(
             <>
             
             <div id='notMainPage'>
             <h2 className=' flex gap-2 text-3xl font-bold mt-8 justify-center'> Congrats <span><LuPartyPopper/></span> Your AI generated Resume is Ready !</h2>
             <p className='text-gray-500 text-center mb-10 '> Now you can Download and Share your resume with Anybody ! </p>

             <div className=' flex justify-between mb-6'>
              
              <div className='flex gap-2'>
              <Button className='bg-[#9F5BFF]' onClick={downloadHandler}>Download <IoMdDownload/></Button>

              <RWebShare
        data={{
          text: "Hello everyone , This is my Resume please open the url to see",
          url: `${import.meta.env.VITE_BASE_URL}/dashboard/resume/${resumeId}/view`, // LINK TO BE SHARED
          title: "Resume",
        }}
        onClick={() => console.log("Resume Shared Successfully!")}
      >
        <Button className='bg-[#9F5BFF]' >Share <FiShare2/></Button>
      </RWebShare>
            
              </div>
              <Button className='bg-[#9F5BFF]' onClick={()=>{navigate('/')}}>Home <IoHomeOutline/></Button>
             </div>
             </div>
              
              <PreviewPage id='mainPage'/>
      

              </>
              )
        }
    
    </div>
    </ResumeContext.Provider>
  )
}

export default ViewDownload