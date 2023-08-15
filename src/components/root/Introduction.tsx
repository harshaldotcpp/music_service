import {recoleta_regular, inconsolata} from "@/fonts/fonts";



function Introduction(){ 
    
    
    return(
        <section id="app-introduction" className={`${inconsolata.className}`} >  
        
           <h1 className={`header  ${recoleta_regular.className}`} >  
             {" Explore Top Music Powered by your Listening habits "}
           </h1> 
           <p className="" > 
             {" We bring together your favourite music services and join up listening, watching and sharing to connect your musical world." }
           </p>
           <p className="" > 
              
              { "Below you can visualise, in real-time, the listening habits & trends of global community. Go Explore."}
           </p>  
           
           <div className="underline" >
            <a href="#signin">
                Get Started
            </a>
           </div> 
           
        </section>
    );
    
} 


export default Introduction;