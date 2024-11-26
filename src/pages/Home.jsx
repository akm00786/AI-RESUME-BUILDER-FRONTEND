import { Button } from '@/components/ui/button'
import { FaArrowRight, FaGithub, FaHeart, FaRegEdit } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <>
    <div className='flex justify-center'> 

    <div className='mt-40'>

    <h1 className='text-center font-extrabold text-6xl  '>Build Your Resume <span className='text-[#9F5BFF]'>With AI</span></h1>
    <p className='text-center mt-8 mb-10 text-gray-500 text-xl'>Effortlessly Craft a Standout Resume with Our AI-Powered Builder</p>
    <div className='flex justify-center'>
    <Link to={'/dashboard'}><Button className='bg-[#9F5BFF]'>Get Started <FaArrowRight /></Button></Link>
    </div>

    </div>

     </div>
     <h2 className='text-center text-4xl font-bold mt-20'>How it Works?</h2>


     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10  mt-14 mb-20  '>

     <Card>
      <FaRegEdit className='ml-4 mt-4 text-3xl'/>
    <CardHeader>
    <CardTitle > <h1 className='text-xl font-semibold'>Edit Your Form</h1></CardTitle>
    <CardDescription>Add Objectives , Education Details , Experience Details ,  Skills , Projects , Acheivements etc.</CardDescription>
    </CardHeader>
   </Card>

   
   <Card>
      <TbBrandReactNative className='ml-4 mt-4 text-3xl'/>
    <CardHeader>
    <CardTitle > <h1 className='text-xl font-semibold'>Generate Content from AI</h1></CardTitle>
    <CardDescription>Generate Content for projects  , Objectives , Skills, etc... and use them in the resume. </CardDescription>
    </CardHeader>
   </Card>


   
   <Card>
      <IoMdShare className='ml-4 mt-4 text-3xl'/> 
      
    <CardHeader>
    <CardTitle > <h1 className='text-xl font-semibold'>Save And Share</h1></CardTitle>
    <CardDescription>Download pdf file of the Resume and also share it through sharing platforms </CardDescription>
    </CardHeader>
   </Card>
      
     </div>

     <p className=' flex gap-4 justify-center items-center font-semibold text-xl mb-10'>Made with
     <FaHeart className='text-red-500' /> 
       by MD AKMAL   
     <a href='https://github.com/akm00786' className='text-black text-2xl'><FaGithub/></a>
     
      </p>
   
     </>
     

  )
}

export default Home