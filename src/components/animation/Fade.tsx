'use client';

import {useEffect,useRef} from "react";
import { motion,useInView,useAnimation } from "framer-motion";


export default function Fade({ children }: { children: React.ReactNode }) {
  
  const ref = useRef(null);
  const isInView = useInView(ref,{once:false});
  const mainControls = useAnimation();
 
  const variants = {
      "hidden":{ 
          opacity:0, 
          y: 10,
     
      },
      "visible": { 
        opacity:1, 
        y:0,
     
        transition: {
            duration:0.8,
        }
          
      }, 
            
    }
  useEffect(()=>{
      if(isInView){
         mainControls.start("visible");
      }
      else{ 
         mainControls.start("hidden"); 
      }
      
  },[isInView]);

  
  return (
       <main ref={ref} >
        <motion.main
            variants={variants}
            initial="hidden"
            animate={mainControls}
        >
            {children}
        </motion.main>
       </main>
  )
}