import { ResumeContext } from '@/context/ResumeContext'
import React, { useContext } from 'react' 
import PersonalDetails from './Preview/PersonalDetails';
import PersonalSummary from './Preview/PersonalSummary';
import Experiance from './Preview/Experiance';
import Education from './Preview/Education';
import Skills from './Preview/Skills';

const PreviewPage = () => {


    let { resumeInfo } = useContext(ResumeContext);
  return (
    <div className='shadow-lg'>

       <div className={ `h-8 w-full` } style={{backgroundColor:resumeInfo.themeColor}}></div>
       <div className='p-10'>
       

       <PersonalDetails />
       <PersonalSummary/>
       <Experiance/>
       <Education/>
       <Skills/>
        
       </div>

    </div>
  )
}

export default PreviewPage