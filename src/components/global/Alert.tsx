"use client"


import "@/components/global/Alert.css";
import { useState,useEffect} from "react";

import { motion } from "framer-motion";
import {useAlertBoxContext} from "@/contexts/AlertContext";




function Alert(){ 
    
    const { message,setHide,hide } = useAlertBoxContext();
 
    
    const variant = {
        hidden: {
            height: 0,
        },
        visible:{
            height: "auto",
        },
    }
    
    useEffect(()=>{
       if(!hide){
            setTimeout(()=>{
                setHide(true);
            },2500);
       }
      
    },[hide]);
    
   
    return( 
       <div>
        <motion.div id="alert-box" className="" variants={variant} initial={"hidden"} animate={hide?"hidden":"visible"}  >
            <span> {message} </span>
        </motion.div>

    
    
      </div>
    );
}

export default Alert;