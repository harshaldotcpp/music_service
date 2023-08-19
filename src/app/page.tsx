/* This page/component is sign in and sign up page*/
'use client'
import "./page.css"; 
import Introduction from "@/components/root/Introduction";
import Signin from "@/components/root/Signin";
import Signup from "@/components/root/Signup";
import Fade from "@/components/animation/Fade"
import { AlertContextProvider } from "@/contexts/AlertContext";
import Alert from "@/components/global/Alert";


export default function Entry() { 
   
   
   
  return (
     <AlertContextProvider> 
     <Alert />
     <main id="landing-page"> 
       <Fade>
        <Introduction />
       </Fade>
       
       <Fade>
        <Signin /> 
       </Fade>
       
       <Fade>
        <Signup />
       </Fade>
     </main>
      </AlertContextProvider>
  )     
}
