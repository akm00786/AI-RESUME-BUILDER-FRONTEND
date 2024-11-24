import { SignIn, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom';

const Signin = () => {

  let  {  user , isLoaded , isSignedIn } = useUser() ;

  if( isSignedIn ) {

    return <Navigate to={'/'}/>

  }
  return (
   <div className='flex justify-center items-center h-screen'>

    <SignIn/>
    
    </div>
   
  )
}

export default Signin