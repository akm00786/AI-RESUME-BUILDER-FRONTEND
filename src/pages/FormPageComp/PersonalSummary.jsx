import { Button } from '@/components/ui/button'
import { RiBrainLine } from "react-icons/ri";
import React, { useContext, useState } from 'react'
import { Textarea } from '@/components/ui/textarea';
import { ResumeContext } from '@/context/ResumeContext';
import { chatSession } from '../../../service/AiModel';
import { LuLoader2 } from 'react-icons/lu';

const PersonalSummary = () => {

  let { resumeInfo  , setResumeInfo} = useContext( ResumeContext ) ;
  let [loader , setLoader] = useState(false);

  async function generateSummary(){

    setLoader(true);
   
 
    try{
          let promt = `Genarate a 4-5 line summary for my Resume having job title ${resumeInfo.jobTitle} in JSON format with field as summary`
      const result = await chatSession.sendMessage(promt);
      let response=result.response.text()
      const cleanedResponse = response.replace(/```(json)?/g, "").trim(); // remove triple tick came with json they are part of md(markdown) language
      console.log(JSON.parse(cleanedResponse).summary);

      setResumeInfo( (resumeInfo)=>({
        ...resumeInfo,
        summory : JSON.parse(cleanedResponse).summary
       })) 


    }
    catch(e){
                console.log(e)
    }
    finally{
          setLoader(false);
    }




  }

  return (
    <div className='p-4' >

       <h2 className='font-bold text-lg'>Summary</h2>
       <h2>Add summary for your Job Title</h2>

       <div className='flex justify-end my-4 '>
        <Button className='bg-white text-[#9F5BFF] hover:bg-white border border-[#9F5BFF]' disabled={loader} onClick={generateSummary}>{loader?<LuLoader2 className='animate-spin'/>:<RiBrainLine />}Generate From AI</Button>
       </div>
      
       <Textarea className='h-36' value={resumeInfo?.summory} onChange={(e)=>{
        setResumeInfo( (resumeInfo)=>({
          ...resumeInfo,
          summory : e.target.value
         })) 
      }
       } />


    </div>
  )
}

export default PersonalSummary