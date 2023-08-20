/* This page/component is sign in and sign up page*/
import "./page.css"; 
import Introduction from "./components/Introduction";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Fade from "@/components/animation/Fade"

export default function Entry() { 
   
   
   
  return (
    
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
      
  )     
}
