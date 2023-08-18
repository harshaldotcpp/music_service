'use client'
import {recoleta_regular, inconsolata} from "@/fonts/fonts";
import {useState, FormEvent, ChangeEvent} from "react";



function Signin(){ 
    const initial_signin_data = {
        usernameOrEmail: "",
        password: "",
        
    }
    const [signinData,setSigninData]  = useState(initial_signin_data);
   
    
    function handleSubmit(event: FormEvent<HTMLFormEvent>){
        event.preventDefault();
    }
    
    function handleOnChange(event: ChangeEvent<HTMLInputElement>){
        const name = event.target.name;
        setSigninData(prevData =>{
            return {
                ...prevData,
                [name]: event.target.value,
            };
        });
    } 
    
    
    
    
    
    return(
        <section id="signin" className={`${inconsolata.className}`} > 
           <div className="text-center text-3xl" >
              <a href="#app-introduction">
                 ↑
              </a>
           </div>
              
           <h1 className={`header ${recoleta_regular.className}`} >
             Sign In
           </h1> 
            <p>   
            {" Welcome back! Your musical journey continues here. Let's explore, discover, and groove together once again. 🎶 "}
            </p>
           
            <form onSubmit={handleSubmit} className="form" > 
            
                 <div className="entry"> 
                    <label htmlFor="signin-username" > username or email </label> <br/>
                    <input onChange={handleOnChange} id="signin-username" name="usernameOrEmail" type="text" /> 
                 </div> 
                 <div className="entry">  
                     <label htmlFor="signin-password" > password </label>  <br />
                    <input onChange={handleOnChange} id="signin-password" name="password" type="password" />
                 </div> 
                 <div className="entry"> 
                    <button > sign in </button> 
                 </div> 
                 
            </form>
          
          <div> Dont Have Account?{" "}
           <a className="underline" href="#signup">sign up
           </a>
          </div>
        </section>
    );
}


export default Signin;