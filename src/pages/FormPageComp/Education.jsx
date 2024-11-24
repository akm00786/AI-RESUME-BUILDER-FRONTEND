import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ResumeContext } from '@/context/ResumeContext';
import React, { useContext } from 'react'
import {  GrTrash } from 'react-icons/gr';
import { IoAdd } from 'react-icons/io5';
import { RiBrainLine } from 'react-icons/ri';

const Education = () => {
  let { resumeInfo  , setResumeInfo} = useContext( ResumeContext ) ;



  function changeHandler ( id , e ){

     setResumeInfo(( prev )=>(
      {

         ...prev,
         education : prev?.education?.map((i)=>(  // map is immuatble
          ( i.educationId === id ) ? {  
            
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
        education:prev?.education?.filter((i)=>i.educationId !== id)
      }
    ))

  }

  function addHandler(){
   
    let data ={
             educationId:resumeInfo?.education?.length +1,
            universityName:'',
            degree:'',
            major : '',
             startDate:'',
            endDate:'',
            description:''
    }

    setResumeInfo((prev)=>(

      {
        ...prev,
        education:[ ...prev?.education , data  ]
      }
    ))
  }


  return (
    <div className='p-4' >

       <h2 className='font-bold text-lg'> Education </h2>
       <h2> Add Your Education Details</h2>

       {

        resumeInfo?.education?.map( ( i )=>(
        
          <div key={i.educationId} className='p-2 border rounded-sm mt-8 grid grid-cols-2 gap-2'>

            <div className='col-span-2 flex justify-end'>
            <GrTrash className='text-2xl cursor-pointer hover:scale-125' onClick={()=>{deleteHandler(i.educationId)}}/>
              </div>

              
            <div className='col-span-2'>
            <label className='text-xs'>University Name</label>
            <Input name='universityName' value={i.universityName} onChange={(e)=>{changeHandler(i.educationId , e)}}/>
              </div>


              <div>
            <label className='text-xs'>Degree</label>
            <Input name='degree' value={i.degree} onChange={(e)=>{changeHandler(i.educationId , e)}}/>
              </div>

              <div>
            <label className='text-xs'>Major</label>
            <Input name='major' value={i.major} onChange={(e)=>{changeHandler(i.educationId , e)}}/>
              </div>

              <div>
            <label className='text-xs'>Start Date</label>
            <Input className='text-black bg-gray-300' type='date' name='startDate' value={i.startDate} onChange={(e)=>{changeHandler(i.educationId , e)}}/>
              </div>

              <div>
            <label className='text-xs'>End Date</label>
            <Input className='text-black bg-gray-300' type='date' name='endDate' value={i.endDate} onChange={(e)=>{changeHandler(i.educationId , e)}}/>
              </div>



              <div className='col-span-2'>
                <div className='flex justify-between my-4 items-center text-sm '>
                  <h3>Description</h3>
                 
                </div>
      
              <Textarea className='h-28' name='description' value={i.description} onChange={(e)=>{ changeHandler(i.educationId , e) } } />


              </div>
               
            </div>

            

        ))
       }

              <Button className='mt-4' onClick={addHandler}><IoAdd/> Add Education</Button>
       
    </div>
  )
}

export default Education