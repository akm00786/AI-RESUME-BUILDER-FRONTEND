import { Separator } from '@/components/ui/separator'
import { ResumeContext } from '@/context/ResumeContext';
import React, { useContext } from 'react'

const PersonalSummary = () => {
    let { resumeInfo } = useContext(ResumeContext);

  return (
    <div className='mt-4'>
{
       resumeInfo?.summory ? <Separator style={{backgroundColor:`${resumeInfo?.themeColor}`}}/>   :<></>


}       <p className='mt-4 text-xs'>{resumeInfo?.summory}</p>   
    </div>
  )
}

export default PersonalSummary

