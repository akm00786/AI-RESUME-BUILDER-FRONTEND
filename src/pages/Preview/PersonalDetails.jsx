import { ResumeContext } from '@/context/ResumeContext'
import React, { useContext } from 'react'

const PersonalDetails = () => {
   let{resumeInfo} = useContext(ResumeContext);
  return (
    <>

    <div className='text-center flex justify-center gap-2  font-bold text-xl' style={{color:`${resumeInfo?.themeColor}`}}>
    <h2 >{resumeInfo?.firstName }</h2>
    <h2>{resumeInfo?.lastName}</h2>

    </div>
     
     <h3 className='text-center font-semibold '>{resumeInfo?.jobTitle}</h3>
     <p className='text-center text-xs'>{resumeInfo?.address}</p>
     <div className='flex justify-between'>
        <h3 className='text-xs ' style={{color:`${resumeInfo?.themeColor}`}}>{resumeInfo?.phone}</h3>
        <h3 className='text-xs' style={{color:`${resumeInfo?.themeColor}`}}>{resumeInfo?.email}</h3>
        
     </div>
     </>
  )
}

export default PersonalDetails