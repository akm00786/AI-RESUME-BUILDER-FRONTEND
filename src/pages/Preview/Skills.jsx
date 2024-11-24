import { Separator } from '@/components/ui/separator';
import { ResumeContext } from '@/context/ResumeContext';
import React, { useContext } from 'react'

const Skills = () => {
    let { resumeInfo } = useContext(ResumeContext);

    return (
      <div className='mt-4'>
         {
          resumeInfo?.skills?.length>0 ? <>
           <h3 className='text-center font-semibold' style={{color:`${resumeInfo?.themeColor}`}}>
          Skills
          </h3>
          <Separator className='mt-2' style={{backgroundColor:`${resumeInfo?.themeColor}`}} />
          </>:""
         }
          <div className='grid grid-cols-2 gap-2 mt-4'>
                    
          {
             resumeInfo?.skills?.length>0 && resumeInfo?.skills.map (
                  ( i )=>( 
                    <div key={i.skillsId} className='flex justify-between items-center'>

                   <p className='text-sm font-medium'>{i.name}</p>
                   {
                    (i.rating>0) ?<div className='w-28 h-3 bg-gray-200 '>
                    <div className='h-3 ' style={{backgroundColor:`${resumeInfo?.themeColor}` , width:`${i.rating}%`}}>
                    </div>
                  </div>:""
                   }

                    </div>
                  )  
             )
            }


          </div>
          


            </div>

            

)       

}


export default Skills