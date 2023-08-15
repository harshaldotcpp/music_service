import {recoleta_regular, inconsolata} from "@/fonts/fonts";



function Signin(){
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
            
            <div className="form" > 
                 <div> 
                    <label htmlFor="signin-username" > username or email </label> <br/>
                    <input id="signin-username" name="usernameOrpassword" type="text" /> 
                 </div> 
                 <div> 
                    <label htmlFor="signin-password" > password </label> <br /> 
                    <input id="signin-password" name="password" type="password" />
                 </div> 
                 <div> 
                    <button> sign in </button> 
                 </div>
            </div>
           
          <div> Dont Have Account?{" "}
           <a className="underline" href="#signup">sign up
           </a>
          </div>
        </section>
    );
}


export default Signin;