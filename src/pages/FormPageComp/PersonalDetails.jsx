import { Input } from '@/components/ui/input';
import { ResumeContext } from '@/context/ResumeContext';
import React, { useContext } from 'react'

const PersonalDetails = () => {
 
    let { resumeInfo  , setResumeInfo} = useContext( ResumeContext ) ;

    function changeHandler(e){

       setResumeInfo( (resumeInfo)=>({
        ...resumeInfo,
        [e.target.name] : e.target.value
       })) 


       // name is used to refer the key value pair according the input BOX

    }


   
  return (
    <div className='p-4' >

       <h2 className='font-bold text-lg'>Personal Detail</h2>
       <h2>Get Started with the basic information</h2>

       <form className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-3' >

        <div >
        <label>First Name</label>
        <Input value={resumeInfo?.firstName} required  name="firstName" onChange={changeHandler}/>
        </div>
        <div>
        <label>Last Name</label>
        <Input value={resumeInfo?.lastName} required name="lastName" onChange={changeHandler}/>
        </div>

        <div className='col-span-2'>
        <label>Job Title</label>
        <Input value={resumeInfo?.jobTitle} required name="jobTitle" onChange={changeHandler}/>
        </div>

        <div className='col-span-2'>
        <label>Address</label>
        <Input value={resumeInfo?.address} required name="address" onChange={changeHandler}/>
        </div>

        <div>
        <label>Phone</label>
        <Input value={resumeInfo.phone} required name="phone" onChange={changeHandler} />
        </div>
        <div>
        <label>email</label>
        <Input value={resumeInfo.email} required  name="email" onChange={changeHandler}/>
        </div>


       </form>


      </div>
  )

}

export default PersonalDetails