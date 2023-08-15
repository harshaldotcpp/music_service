

import {recoleta_regular, inconsolata} from "@/fonts/fonts";


function Signup(){ 
    
    

    
    
    
    
    return(
        <section className={`${inconsolata.className}`} id="signup" >
          
           <h1 className={`header ${recoleta_regular.className}`} >
            Sign up
          </h1> 
          <p> Join the music exploration! Sign up now to discover, share, and groove with us </p>
          
          <div className="form" >  
             <div> 
                <label htmlFor="signup-email"> enter email </label> <br />
                <input id="signup-email" name="email" type="email" />
             </div>
             <div> 
                <label htmlFor="signup-username"> create username </label> <br />
                <input id="signup-username" name="username" type="text" />
             </div> 
             <div> 
                <label htmlFor="signup-name"> your name </label> <br />
                <input id="signup-name" name="name" type="text" />
             </div> 
             <div>  
                   <label htmlFor="signup-password"> create password </label> <br />
                
                <input id="signup-password" name="password" type="password" />
             </div> 
             <div> 
                <label htmlFor="signup-confirm-password"> confirm password </label> <br />
                <input id="signup-confirm-password" name="confrim-password" type="password" />
             </div> 
             <div> 
                <button> sign up </button> 
             </div>
          </div> 
          
          <div className="underline" >
            <a  href="#signin"> Dont Have An Account?? </a>
          </div>
           
        </section>
    );
}


export default Signup;