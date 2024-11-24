import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import Header from './pages/Header';

function App() {
   
  const {user , isLoaded , isSignedIn}=useUser();

  if(isLoaded&& !isSignedIn){
  return  <Navigate to={'auth/signin'}/>   // return the navigate allways
  }
   
  return (
  <div className=''> 
    <Header/>
    <Outlet/>
    </div> // APP --apply security logic to its childeren
)

}

export default App
