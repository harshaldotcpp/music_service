/* This page/component is sign in and sign up page*/

import "./page.css"; 
import Introduction from "@/components/root/Introduction";
import Signin from "@/components/root/Signin";
import Signup from "@/components/root/Signup";
import Fade from "@/components/Animation/Fade"


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
