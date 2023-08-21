import {recoleta_regular} from "@/fonts/fonts";
import db from "@/lib/db";


function Introduction(){ 
    
   
    return(
        <section id="welcome" className="" >  
        
           <h1 className={`header ${recoleta_regular.className}`} >  
             {" Explore Top Music Powered by your Listening habits"}
           </h1> 
           <p className="article" > 
             {" We bring together your favourite music services and join up listening, watching and sharing to connect your musical world." }
           </p>
           <p className="article" >
              { "Below you can visualise, in real-time, the listening habits & trends of global ccommunity, go explore "}
           </p>  
           
           <div className="underline" >
            <a href="#signin">
                Sign in ↓
            </a>
           </div> 
           
        </section>
    );
    
} 


export default Introduction;
