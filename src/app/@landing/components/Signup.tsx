"use client"

import {recoleta_regular} from "@/fonts/fonts";
import {FormEvent} from "react"; 
import {useAlertBoxContext} from "@/contexts/AlertContext";


function Signup(){ 
    
    
    const { alertUser } = useAlertBoxContext();
    
    function handleOnSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault(); 
        alertUser("service unavailable (in development) ");
    }
    
    
    return(
        <section  className="" id="signup" >
          
           <h1 className={`header ${recoleta_regular.className}`} >
            Sign up
          </h1> 
          <p> Join the music exploration! Sign up now to discover, share, and groove with us </p>
          
          <form onSubmit={handleOnSubmit} className="form" >  
             <div className="entry"> 
                <label htmlFor="signup-email"> enter email </label> <br />
                <input id="signup-email" name="email" type="email" />
             </div>
             <div className="entry"> 
                <label htmlFor="signup-username"> create username </label> <br />
                <input id="signup-username" name="username" type="text" />
             </div> 
             <div className="entry" > 
                <label htmlFor="signup-name"> your name </label> <br />
                <input id="signup-name" name="name" type="text" />
             </div> 
             <div className="entry" >  
                   <label htmlFor="signup-password"> create password </label> <br />
                
                <input id="signup-password" name="password" type="password" />
             </div> 
             <div className="entry" > 
                <label htmlFor="signup-confirm-password"> confirm password </label> <br />
                <input id="signup-confirm-password" name="confrim-password" type="password" />
             </div> 
             <div className="entry" > 
                <button> sign up </button> 
             </div>
          </form> 
          
          <div className="underline" >
            <a  href="#signin"> Dont Have An Account?? </a>
          </div>
           
        </section>
    );
}


export default Signup;