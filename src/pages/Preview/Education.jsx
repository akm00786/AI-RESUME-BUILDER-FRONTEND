import { Separator } from '@/components/ui/separator';
import { ResumeContext } from '@/context/ResumeContext';
import React, { useContext } from 'react'

const Education = () => {
    let { resumeInfo } = useContext(ResumeContext);

    return (
      <div className='mt-4'>
          {
              resumeInfo?.education?.length>0 ? <>
              <h3 className='text-center font-semibold' style={{color:`${resumeInfo?.themeColor}`}}>
          Education
          </h3>
          <Separator className='mt-2' style={{backgroundColor:`${resumeInfo?.themeColor}`}} />
              </> :""
          }
          {
             resumeInfo?.education?.length>0 && resumeInfo?.education.map(
                  ( i )=>(
                  
                  <div key={i.educationId} className='mt-4'>
                 
                 <div className='flex justify-between items-center'>
                 <h3 className='font-semibold ' style={{color:`${resumeInfo?.themeColor}`}}>{`${i.degree} ${i.major?'-':""} ${i.major}`}</h3>
                 <p className='text-xs'>{`${i.startDate} ${i.endDate?'To':""} ${i.endDate}`}</p>
                 </div>
  
                 <p className='text-xs'>{i.universityName}</p>
  
                 <p className='mt-2 text-xs'>{i.description}</p>
                       
  
              </div>) 
              )
          }
  
      </div>
    )
}

export default Education