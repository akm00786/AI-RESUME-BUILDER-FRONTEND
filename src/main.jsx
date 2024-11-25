import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { ClerkProvider } from '@clerk/clerk-react'
import ResumeEdit from './pages/ResumeEdit'
import { Toaster } from './components/ui/toaster'
import ViewDownload from './pages/ViewDownload'




const router = createBrowserRouter( [

  {
   
    element:<App/>, // in this we will have the logic by grouping( /dashboard , '/')routes as children of app where we will apply security logic
    children:[{
       path:'/',
       element:<Home/>
    },
    {
    path:'/dashboard',
    element:<Dashboard/>
    },
    {
      path:'/dashboard/resume/:resumeId/edit', // dynamic route
      element:<ResumeEdit/>
    },
    ]
  },
  {
    path : "/auth/signin" ,
    element : <Signin/> ,   
  } ,
  {
    path:'/dashboard/resume/:resumeId/view', // dynamic route
    element:<ViewDownload/>
  }

]  , { // options
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
}) ;


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

    <RouterProvider
     router={router} 
    future={{  
      v7_startTransition:true, }}/> 
      <Toaster /> 

    </ClerkProvider>
    
    
  </StrictMode>,
)

/*
tailwind + shadcn setup
SHADcn : a react componenet libray ... from ehere we can install components in componets  f o l d e r

 client routing by 
createBrowserRouter in main file in this method NESTING can be done properly 


CLERK authentication + setup from docs + create new project on clerk website --> add provider + key in mainn 

<Signin/> ---->> for login page
<userButton/> for user icon for logout

use isSignedIn of useUser hook to know about user for protection of route
const {user , isLoaded , isSignedIn}=useUser();
 if(!isSignedIn){
  return  <Navigate to={'auth/signin'}/>
  }


  in app header is made common to outlet { home, dashboard }


  __________________________________________________________________

  STRAPI : A  C M S   --   content managemnt system   ---- for providing { backend routes API } automanatically rather than making our  own
      by starpi create schema by UI  and generatee route get post .. by UI itself .... and starpi converting to js code


  WE have connect the CMS to database

  postgre vs mysql ( rdbms )  :  Open-source with strong community support ,  more extensible featres like ,   ,,, extensible complex queries ,,, custom data types and function , 

  database : neon postgresql : Neon PostgreSQL is a cloud-based implementation of PostgreSQL tailored for modern, serverless architectures. 
  ( not on local machine )  Neon aims to enhance PostgreSQL for cloud-native workloads  ,distribution load , on-demand scaling, cost efficiency, and minimal operational overhead.


  __________________________________________________

   make  - - - - - neon project - - -  get connection string 
   CONNECT IN strapi install
    run npm run develop to start strapi  localhost
     make api key from starpi localhost   and add in frontend  env



    now in strapi  localhost 

    create   schema   table  in content builder of loaclhoat strapi by UI 
    NOW STARPI AUTO PROVIDE CRUD API ON SCHEMA MADE as well input validate on Schema constaint u provide with ERROR HANDLING

   
     now create  AXIOS request for CRUD in schema made in strapi
      
    const axiosClient = axios.create( {
        baseURL : 'http://localhost:1337/api/',
        headers : {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${API_KEY}`,
        }
    })
       _ _________ _
       _ POST req  _
       _ __________ _
        const createResume=(data)=> axiosClient.post('/user-resumes' , data);

        _  _ _________ _
       _ GET req  _
       _ __________ _
       const getResumes = (userEmail)=>axiosClient.get(`/user-resumes?filters[userEmail][$eq]=${userEmail}`);

    
    

       In resume maker u have mulltiple pages  maintaing a common resume object { } state which context to be globally avaialble
       AND 
  
        u render stae in prewiew page and series of form inputs
        
        input CAN also      C H A N G E     S T A T E   

        IMMUTABLE STATE CHANGE - new copy by spred op , map  , filter slice

        by spread opearotor
        delete in array = filter accn to ID
        add in aray - by [ ..prev , data]
        update elemnt of  array = create a new array by mapping all elemnt modifying only updated    part 

        function update(id , e){
        setResume((prev)=>(
          
              {
          ...prev,
          skills:prev.skill.map((i)=>(i.id==id)?{...i , name:e.target.value }  : i )



          }
          ))
        }

   
   download by only window.print()
   we can cutomise by print & showcasing only a div by choosing its id 

   in  index.css

   @media print{
  #notMainPage{
      display: none;
  }
  #mainPage{
    display: block;
  }
     body{
    margin: 0;
    padding: 0;
    box-shadow: none;
  }
}

we can avoid  , pageno , link

@page{
  margin: 0mm;
  
  size: auto;
}


share by recat web share libarary


// generate summary
connnect gemeni with API KEY several imports and genearate prompt

 const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());

    ask to retunr in json fromat with summary key
    JSON a lasrge string same like js object but key are also string .. for data transport in string and nesting WAY

    and JSON.parse it to normal object format      ....   and access response.summary key by .


    deploy frontend - run npm run build   // .gitignore=env dist node modules
    // npm run build npm run strat cmmnd auto done
*/