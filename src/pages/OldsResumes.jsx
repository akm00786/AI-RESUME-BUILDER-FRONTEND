import React, { useState } from 'react'
import { IoMdDownload } from 'react-icons/io'
import { LuTrash2 } from "react-icons/lu";
import { GoEye } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast';
import { FaRegEdit } from 'react-icons/fa';
import GlobalApi from '../../service/GlobalApi';

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





const OldsResumes = ({resume ,setDeletedBool}) => {
  const { toast } = useToast()
  let[loader , setLoader] = useState(false);
  let[dialog , setDialog] = useState(false);

  let navigate = useNavigate();



  function deleteHandler(documentId){
    setLoader(true);

    GlobalApi.deleteAResume(documentId).then((res)=>{

      setDeletedBool((prev)=>!prev) ;
      toast({
        title:'RESUME DELETED'
      });
      
    }).catch((error)=>{ console.log(error)
    }).finally(()=>{setLoader(false); setDialog(false)} ) ;
    
  }
   
  return (
    
    <div className='h-72 w-52    hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out hover: shadow-sm p-4  
    flex  flex-col justify-between bg-[#f5f5f5] border rounded-md border-dashed '>
      <h3 className='text-center text-[#ff6666] font-mono text-sm'>{resume.title}</h3>

      <div className='flex justify-center'>
      <Link to={`/dashboard/resume/${resume.documentId}/edit`} >
      <FaRegEdit className='text-3xl  hover:scale-110 text-[#9F5BFF]'/>
      </Link>
      </div>

      <div className='flex justify-between  '>
        <div>  
           <LuTrash2 className='text-xl hover:scale-125 ' onClick={()=>{setDialog(true)}} />


           <AlertDialog open={dialog}>
  <AlertDialogContent >
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
       {
         `Deleting Resume - ${resume.title}`
       }
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel disabled={loader} onClick={()=>{setDialog(false)}}>Cancel</AlertDialogCancel>
      <AlertDialogAction disabled={loader} onClick={ ()=>{deleteHandler(resume.documentId)}}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

      </div>
      <GoEye className='text-xl hover:scale-125' onClick={()=>{navigate(`/dashboard/resume/${resume.documentId}/view`)}}/>
      <IoMdDownload className='text-xl hover:scale-125 '  onClick={()=>{navigate(`/dashboard/resume/${resume.documentId}/view`)}}/>
     
      </div>
  </div>

  )
}

export default OldsResumes