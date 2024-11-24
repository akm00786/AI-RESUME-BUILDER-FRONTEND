import { Button } from '@/components/ui/button';
import { IoGridOutline } from "react-icons/io5";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import React, { useContext, useState } from 'react'
import PersonalDetails from './FormPageComp/PersonalDetails';
import PersonalSummary from './FormPageComp/PersonalSummary';
import Experiance from './FormPageComp/Experiance';
import Education from './FormPageComp/Education';
import Skills from './FormPageComp/Skills';
import { ResumeContext } from '@/context/ResumeContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { HexColorPicker } from 'react-colorful';

const FormPage = () => {
  let { resumeInfo , setResumeInfo } = useContext( ResumeContext ) ;

  let [page , setPage] = useState(1);
  return (
    <div>
    
    <div className='flex justify-between'>
    <DropdownMenu >
  <DropdownMenuTrigger className='bg-black text-white flex items-center gap-3 '><IoGridOutline className='text-xl' />Theme</DropdownMenuTrigger>
  
  <DropdownMenuContent>
  <HexColorPicker color={resumeInfo.themeColor} onChange={(e)=>{setResumeInfo((prev)=>(
    {
      ...prev,
      themeColor:e
    }
  ))}}  />
  </DropdownMenuContent>

</DropdownMenu>

    <div className='flex gap-4'>
    <Button disabled={page==1} onClick={()=>{setPage(page-1)}}> <GrLinkPrevious /> Prev </Button>
    <Button type="submit" disabled={page==5} onClick={()=>{setPage(page+1)}}>Next <GrLinkNext /> </Button>
    </div>
    </div>

    <div className='shadow-xl rounded-md mt-8' style={{borderTop:`5px solid #9F5BFF`}}>


    { 
       // conditional rendering on the base of Pgae NUMBER
       (page==1)? <PersonalDetails/>: (page==2)?<PersonalSummary/> :(page==3)?<Experiance/> : (page==4)?<Education/> :<Skills/> 
   }


    </div>

  
   
   </div>

    
  )
}

export default FormPage ;