import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ResumeContext } from '@/context/ResumeContext';
import React, { useContext } from 'react'
import {  GrTrash } from 'react-icons/gr';
import { IoAdd } from 'react-icons/io5';
import { RiBrainLine } from 'react-icons/ri';

const Experiance = () => {

  let { resumeInfo  , setResumeInfo} = useContext( ResumeContext ) ;



  function changeHandler ( id , e ){

     setResumeInfo(( prev )=>(
      {

         ...prev,
         experience : prev.experience?.map((i)=>(  // map is immuatble
          ( i.experienceId === id ) ? {  
            
            ...i,
            [e.target.name]:e.target.value

          }   : i
         ))
      }       
     ))
  }

  function deleteHandler(id){

    setResumeInfo((prev)=>(


      {
        ...prev,
        experience:prev?.experience?.filter( (i)=>i.experienceId !== id )
      }
    ))

  }

  function addHandler(){
   
    let data ={
           experienceId:resumeInfo.experience.length +1,
            title:'',
            companyName:'',
            city : '',
            state : '',
            startDate:'',
            endDate:'',
            workSummery:''
    }

    setResumeInfo((prev)=>(

      {
        ...prev,
        experience:[ ...prev?.experience , data  ]
      }
    ))
  }


  return (
    <div className='p-4' >

       <h2 className='font-bold text-lg'>Professional Experience
      </h2>
       <h2> Add Your previous Job experience</h2>

       {

        resumeInfo?.experience?.map((i)=>(
        
          <div key={i.experienceId} className='p-2 border rounded-sm mt-8 grid grid-cols-2 gap-2'>

            <div className='col-span-2 flex justify-end'>
            <GrTrash className='text-2xl cursor-pointer hover:scale-125' onClick={()=>{deleteHandler(i.experienceId)}}/>
              </div>

              
            <div>
            <label className='text-xs'>Position</label>
            <Input name='title' value={i.title} onChange={(e)=>{changeHandler(i.experienceId , e)}}/>
              </div>

          
            <div>
            <label className='text-xs'>Company</label>
            <Input name='companyName' value={i.companyName} onChange={(e)=>{changeHandler(i.experienceId , e)}}/>
              </div>

              <div>
            <label className='text-xs'>city</label>
            <Input name='city' value={i.city} onChange={(e)=>{changeHandler(i.experienceId , e)}}/>
              </div>

              <div>
            <label className='text-xs'>State</label>
            <Input name='state' value={i.state} onChange={(e)=>{changeHandler(i.experienceId , e)}}/>
              </div>

              <div>
            <label className='text-xs'>Start Date</label>
            <Input className='text-black bg-gray-300' type='date' name='startDate' value={i.startDate} onChange={(e)=>{changeHandler(i.experienceId , e)}}/>
              </div>

              <div>
            <label className='text-xs'>End Date</label>
            <Input className='text-black bg-gray-300' type='date' name='endDate' value={i.endDate} onChange={(e)=>{changeHandler(i.experienceId , e)}}/>
              </div>



              <div className='col-span-2'>
                <div className='flex justify-between my-4 items-center text-sm '>
                  <h3>Description</h3>
                
                </div>
      
              <Textarea className='h-28' name='workSummery' value={i.workSummery} onChange={(e)=>{ changeHandler(i.experienceId , e) } } />


              </div>
               
            </div>

            

        ))
       }

              <Button className='mt-4' onClick={addHandler}><IoAdd/> Add Experience</Button>
       
    </div>
  )
}

export default Experiance