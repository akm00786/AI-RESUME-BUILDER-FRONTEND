import React, { useState } from 'react'
import { FaRegPlusSquare } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import {  Loader2 } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';


const ResumeBox = () => {
  let navigate = useNavigate();

 let [resumeName , setResumeName] = useState ("") ;
 let {user} = useUser() ;
 let [loader , setLoader] = useState(false) ;

 async function create(){

  setLoader(true);
  
   
     let data={
      data: {
        title : resumeName ,
        userEmail : user.primaryEmailAddress.emailAddress,
        firstName:'',
         lastName:'',
         jobTitle:'',
         address:'',
         phone:'',
         email:'',
         themeColor:'#eb5834',
         summory:'',

         
         skills:[],
         education:[],
         experience:[],

       }
     }
    
     GlobalApi.createResume(data).then( res=>{ console.log(res) ;  navigate(`/dashboard/resume/${res.data.data.documentId}/edit`)} ).catch((error)=>{  console.log(error)}).finally(()=>{setLoader(false) ;  } )
     setResumeName("") ;
    

 }

  return (
   

<Dialog>
      <DialogTrigger asChild>
        
       
      <div className=' flex justify-center items-center bg-[#f5f5f5] h-72 w-52 border rounded-md border-dashed 
    hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out hover: shadow-sm '>
      <FaRegPlusSquare className='text-3xl hover:scale-110 text-[#9F5BFF]' />
      </div>


      </DialogTrigger>
      <DialogContent className="sm:max-w-lg ">
        <DialogHeader>
          <DialogTitle>Create New Resume</DialogTitle>
          <DialogDescription>
          Add a title for your new resume
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
           
            <Input
             placeholder="Ex.Full Stack Resume"
              value={resumeName}
              onChange={(e)=>{setResumeName(e.target.value)}}
              
            />

          </div>
        </div>
        <DialogFooter className="justify-end">
          
            <Button type="button" disabled={!resumeName || loader} 
               onClick={create}
            >
             {loader?<Loader2 className='animate-spin'/>:'Create'}
            </Button>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
        
 
    

  )
}

export default ResumeBox