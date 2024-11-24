import { Separator } from '@/components/ui/separator';
import { ResumeContext } from '@/context/ResumeContext';
import React, { useContext } from 'react'

const Experiance = () => {
    let { resumeInfo } = useContext(ResumeContext);

  return (
    <div className='mt-4'>
       {
        resumeInfo?.experience?.length>0 ? ( <>
          <h3 className='text-center  font-semibold ' style={{color:`${resumeInfo?.themeColor}`}}>
          Professional Experience
          </h3>
          <Separator className='mt-2' style={{backgroundColor:`${resumeInfo?.themeColor}`}}/>
          </>
        ) : <></>
       }
        {
           resumeInfo?.experience?.length>0 && resumeInfo?.experience.map(
                (i )=>(
                
                <div key={i.experienceId} className='mt-4'>

               <div className='flex justify-between items-center'>
               <h3 className='font-semibold ' style={{color:`${resumeInfo?.themeColor}`}}>{i.companyName}</h3>
              {
                i.startDate ? <p className='text-xs'>{`${i.startDate} To ${i.endDate}`}</p>:""
              }
               </div>

               <h3 className={`text-xs font-semibold `}>{i.title}</h3>
              
               {
                  i.city?<p className='text-xs'>{`${i.city} , ${i.state}`}</p>:""
               }

               <p className='mt-2 text-xs'>{i.workSummery}</p>
                     

            </div>) 
            )
        }

    </div>
  )
}

export default Experiance