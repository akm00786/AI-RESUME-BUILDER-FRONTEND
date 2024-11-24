import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeContext } from '@/context/ResumeContext';
import {  Rating } from '@mui/material';
import React, { useContext, useState } from 'react'
import {  GrTrash } from 'react-icons/gr';
import { IoAdd } from 'react-icons/io5';
import GlobalApi from '../../../service/GlobalApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  
} from "@/components/ui/alert-dialog"
import { LuLoader2 } from 'react-icons/lu';

const Skills = () => {
 
  const { resumeId } = useParams();
  const { toast } = useToast()
  let navigate = useNavigate();
  let { resumeInfo  , setResumeInfo} = useContext ( ResumeContext ) ;
  let [loader , setLoader] = useState(false) ;
  let [dialog , setDialog] = useState(false) ;

  function deleteHandler(id){
    setResumeInfo((prev)=>(

      {
         ...prev ,
          skills : prev?.skills?.filter( (i)=>( i.skillsId !== id ) )
      }
))



  }
  function addHandler(){

    setResumeInfo((prev)=>(
  
      {
         ...prev ,
       skills : [...prev?.skills , {
        skillsId:prev?.skills?.length+1 ,
        rating:0,
        name:''
       }
      ]
      }
    )
  )
  
  }

  function saveHandler( ) {

    setLoader(true);
    console.log(resumeInfo);

    let data={
      
      data:resumeInfo
    }

    GlobalApi.updateAResume(resumeId , data ).then((res)=>{
      toast({
      title: resumeInfo.title ,
      description: "Resume Details Updated and Saved" ,
    } )
    navigate(`/dashboard/resume/${resumeId}/view`);
    //       `/dashboard/resume/${resume.documentId}/view`

  }).catch((error)=>{console.log(error)}).finally(()=>{setLoader(false); setDialog(false)});



  }

  return (
    <div className='p-4' >

       <h2 className='font-bold text-lg'> Skills </h2>
      
       <h2> Add Your Top Skills </h2>
       {

              resumeInfo?.skills?.map((i)=>(
                   <div key={i.skillsId} className='p-2 mt-8 border rounded-md grid grid-cols-3 gap-4'>

                    <div>
                      <label className='text-xs'>Name</label>
                      <Input value={i.name} onChange={(e)=>{

                           setResumeInfo((prev)=>(

                                 {
                                  ...prev,
                                  skills:prev.skills.map((askill)=>(
                                       (askill.skillsId==i.skillsId) ? {...askill , name:e.target.value} :askill
                                  ))
                                 }
                           ))

                      }} />
                      </div>

                   <Rating
                      className='ml-6 mt-7'
                      name="simple-controlled"
                      value={(i.rating)/20}
                      onChange={(event, newValue) => {

                        setResumeInfo( ( prev )=>(
                          { 
                            ...prev ,
                           skills : prev.skills.map((askill)=>(
                                (askill.skillsId==i.skillsId) ? {...askill , rating:newValue*20} : askill
                           ))
                        }
                    ))                     
                  }}
                  />

                      <button className='bg-white text-xl mt-8 ml-12 cursor-pointer hover:border-white  '>
                        <GrTrash className='hover:text-[#9F5BFF] hover:scale-110' onClick={()=>{deleteHandler(i.skillsId)}}/>
                       </button>
                    </div>
              ))
       }

        <div className='flex justify-between'>
        <Button className='mt-4 outline-none bg-[#9F5BFF] ' onClick={addHandler}><IoAdd/> Add Skills</Button>
     <button className='mt-4 bg-[#9F5BFF] text-white flex items-center gap-2' onClick={()=>{setDialog(true)}}> Save</button>

     <AlertDialog open={dialog}>
  <AlertDialogContent >
    <AlertDialogHeader>
      <AlertDialogTitle className='flex justify-between'><span>Are you absolutely sure ? </span>{loader?<LuLoader2 className='text-4xl animate-spin'/>:""}</AlertDialogTitle>
      <AlertDialogDescription>
       Resume will be Permanently Saved !
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel disabled={loader} onClick={()=>{setDialog(false)}}>Cancel</AlertDialogCancel>
      <AlertDialogAction disabled={loader} onClick={ saveHandler}>Save</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        </div>

        
</div>
  )
}
export default Skills
